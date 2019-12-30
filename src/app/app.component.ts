import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { ConfigService } from './main/config.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-frame';
  constructor(private config:ConfigService, sanitizer:DomSanitizer) {
    config.toolbar_color = 'primary';
    config.navbar_logo = sanitizer.bypassSecurityTrustHtml('<b>Market</b><small>place</small>')
    config.menuButtons = [{clickfn:()=>{alert('clicked!')},label:'demo'}]
  }
}
