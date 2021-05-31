import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';
import * as morgan from 'morgan';
import * as rfs from 'rotating-file-stream';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';
import { environment } from './src/environments/environment';
import { format } from 'util';
import * as domino from 'domino';

function formatLog(d: string) {
  return `[${new Date().toLocaleString()}] - ` + format(d) + '\n';
}

function mockWebEnvironment() {
  // mock global window by domino
  const win = domino.createWindow();
  const nodeJsGlobal = global as any;
  // mock
  nodeJsGlobal.window = win;
  // not implemented property and functions
  Object.defineProperty(win.document.body.style, 'transform', {
    value: () => {
      return {
        enumerable: true,
        configurable: true,
      };
    },
  });
  nodeJsGlobal.document = win.document;
}

export function systemInit() {
  // ignore SSL check
  process.env["NODE_TLS_REJECT_UNAUTHORIZED"] = "0";

  // add log to file
  const consoleLogStream = rfs.createStream('render-console.log', {
    interval: '1d', // rotate daily
    path: environment.LOG_DIR || join(__dirname, 'log')
  })
  const errorLogStream = rfs.createStream('render-error.log', {
    interval: '1d', // rotate daily
    path: environment.LOG_DIR || join(__dirname, 'log')
  });

  console.log = function (...ds) { //
    ds.forEach(d => {
      const formated = formatLog(d);
      process.stdout.write(formated);
      consoleLogStream.write(formated);
    })
  };
  console.warn = function (...ds) { //
    ds.forEach(d => {
      const formated = formatLog(d);
      process.stdout.write(formated);
      consoleLogStream.write(formated);
    })
  };
  console.error = function (...ds) { //
    ds.forEach(d => {
      const formated = formatLog(d);
      process.stderr.write(formated);
      errorLogStream.write(formated);
    })
  };
  mockWebEnvironment();
}




// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  const server = express();
  const distFolder = join(process.cwd(), environment.SERVER_DIST_FOLDER || 'dist/taiwanlife-render/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html')) ? 'index.original.html' : 'index';

  const accessLogStream = rfs.createStream('render-access.log', {
    interval: '1d', // rotate daily
    path: join(__dirname, 'log')
  })

  server.use(morgan('combined', { stream: accessLogStream }))

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine('html', ngExpressEngine({
    bootstrap: AppServerModule,
  }));

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get('*.*', express.static(distFolder, {
    maxAge: '1y'
  }));

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, { req, providers: [{ provide: APP_BASE_HREF, useValue: req.baseUrl }] },
      (err: Error, html: string) => {
        const siteId = req.query?.site_id || '';
        if (!req.originalUrl.includes("preview") && siteId !== "portal") {
          const baseHrefStringRegex = new RegExp(/<base href="\/">/g);
          const replaced = html.replace(baseHrefStringRegex, `<base href="/${siteId ? siteId + '/' : ''}">`);
          res.send(replaced);
        }
        else {
          res.send(html);
        }
      }
    );
  });

  return server;
}

function run(): void {
  systemInit();
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}


// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = mainModule && mainModule.filename || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
