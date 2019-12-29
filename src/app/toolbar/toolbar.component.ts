import { Component, OnInit, ViewChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ConfigService } from '../main/config.service';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, AfterContentInit,AfterContentChecked {
  @ViewChild('sidebarToggle',{static:true,read:MatSlideToggle}) public sidebarToggle:MatSlideToggle;
  @ViewChild ('navMenu',{static:true}) public menuButton;

  constructor(public cfg:ConfigService) {
   }

  ngOnInit() {
  }
  ngAfterContentInit(){
  }
  ngAfterContentChecked(){
  }
}
