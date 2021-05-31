const fs = require('fs');
const path = require('path');
const util = require('util');

console.log(fs.readdirSync('./'), 'for test');

// replace-config

const targetFiles = [
  './target/package.json',
];

const tgzDir = './target/neux';
const libArr = [
  { key: 'cms-core', fileName: '', dependencyName: '@neux/cms-core' },
  { key: 'ui', fileName: '', dependencyName: '@neux/ui' },
  { key: 'render', fileName: '', dependencyName: '@neux/render' },
  { key: 'core', fileName: '', dependencyName: '@neux/core' }
];

const packageArr = fs.readdirSync(tgzDir);

assginFileName();

targetFiles.forEach(package => {
  updatePackageVersion(package);
});


/**
 * 找到tgz檔名 並存到libArr
 *
 */
function assginFileName() {
  packageArr.forEach(file => {
    const lib = libArr.find(e => file.includes(e.key));
    if (lib) {
      lib.fileName = file;
    };
  });
}

/**
 * 更新package.json裡的版本號
 * @param { } targetFile 
 */
function updatePackageVersion(targetFile) {
  fs.readFile(targetFile, "utf8", (err, packageJsonString) => {
    if (err) throw err;

    packageArr.forEach(file => {
      const lib = libArr.find(e => file.includes(e.key));
      if (lib) {
        const dependencyName = lib.dependencyName;
        const oldDependencyFile = JSON.parse(packageJsonString)['dependencies'][dependencyName];
        const newDependencyFile = lib.fileName;
        packageJsonString = replaceDependency(packageJsonString, dependencyName, oldDependencyFile, newDependencyFile);
      };
    });

    fs.writeFile(targetFile, packageJsonString, function (err) {
      if (err)
        console.log(err);
      else
        console.log('replace-config complete');
    });
  });
};

/**
 * 更換 dependency
 *
 * @param {*} packageJsonString
 * @param {*} dependencyName
 * @param {*} dependencyFile
 * @return {*} 
 */
function replaceDependency(packageJsonString, dependencyName, oldDependencyFile, newDependencyFile) {
  const regex = new RegExp(`\"${dependencyName.replace(/\//g, '\/')}\": \"${oldDependencyFile.replace(/\^/g, '\\^')}\"`, 'g')
  return packageJsonString.replace(regex, `"${dependencyName}": "file:./neux/${newDependencyFile}"`);
}
