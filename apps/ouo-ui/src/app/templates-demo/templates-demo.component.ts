import { Component, OnInit } from '@angular/core';
import { LayoutTemplateStore, RenderPageStore } from '@neux/render/renderer';
import { SitemapNode } from '@neux/ui/lib/util/model/mega-menu.model';

@Component({
  selector: 'app-templates-demo',
  templateUrl: './templates-demo.component.html',
  styleUrls: ['./templates-demo.component.scss'],
  providers: [RenderPageStore, LayoutTemplateStore]
})
export class TemplatesDemoComponent implements OnInit {

  // All template
  templateList = [
    {
      type: 'P',
      list: [
        { number: '01', name: '首頁', url: '/home' },
      ]
    }
  ];



  constructor(private readonly renderPageStore: RenderPageStore) { }

  ngOnInit(): void {
  }


}

