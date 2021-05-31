import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  iconSvgHtml: SafeHtml;
  
  constructor(
    private sanitizer: DomSanitizer,
    private http: HttpClient,
  ){

  }
  ngOnInit(){
    this.http.get('assets/images/ml-all-icon.svg', { responseType: 'text' })
    .subscribe(icon => {
      this.iconSvgHtml = this.sanitizer.bypassSecurityTrustHtml(icon);
    });
  }

}
