import { Component, ViewChild, AfterContentInit } from '@angular/core';
import { ConfigService } from './main/config.service';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-frame';
  constructor(public config: ConfigService, public sanitizer: DomSanitizer, public snb: MatSnackBar) {
    config.toolbar_color = '';
    config.toolbar_class = "shadow"
    config.navbar_logo = sanitizer.bypassSecurityTrustHtml('<b>Market</b><small>place</small>')
    config.navbar_right = [
      {
        label: "Cart",
        color: "primary",
        class: "ml-3",
        clickfn: () => { alert('clicked!') },
        tooltip: "Demo button 1",
        matBadge: "3",
        matBadgePosition: "after",
        matBadgeColor: "warn"
      }
    ];
    config.sidebar_logo = config.navbar_logo;
    config.menuButtons = [{ clickfn: () => { alert('clicked!') }, label: 'demo' }]
  }
  addMenuButton(label: string) {
    this.config.navbar_left.push({ label: label, clickfn: () => { this.snb.open(`Clicked on ${label}.`, '✗', { duration: 9000 }) } });
  }
  info = "This demo is made to give a tiny glimpse into how costumizable an angular application can be by simply exporting configurable properties and aggregating them using a simple service.";
  notify(msg) {
    this.snb.open(msg, '✗');
  }
}
