import { Component, OnInit, ViewChild, AfterContentInit, AfterContentChecked, Inject, Input } from '@angular/core';
import { MatSlideToggle } from '@angular/material/slide-toggle';
import { ConfigService } from '../config.service';
import { Platform } from '@angular/cdk/platform';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { SafeHtml, DomSanitizer } from '@angular/platform-browser';



@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit, AfterContentInit,AfterContentChecked {
  @ViewChild('sidebarToggle',{static:true,read:MatSlideToggle}) public sidebarToggle:MatSlideToggle;
  @ViewChild ('navMenu',{static:true}) public menuButton;

  constructor(public cfg:ConfigService,public platform:Platform,public dialog:MatDialog) {
   }

  ngOnInit() {
  }
  ngAfterContentInit(){
    console.log(this.sidebarToggle)
  }
  ngAfterContentChecked(){
  }
  OpenDialog(data){
    this.dialog.open(NavDialog,{minWidth:'300px',minHeight:'300px',data:data})
  }
}

@Component({
  selector:'nav-dialog',
  template:`<div [innerHTML]="dialogHTML"></div>`,
})
export class NavDialog{
  public dialogHTML:SafeHtml = this.sanitizer.bypassSecurityTrustHtml(`<mat-card>You passed this data: <br>{{data}}</mat-card>`);
  constructor(private dialog:MatDialogRef<NavDialog>,@Inject(MAT_DIALOG_DATA) public data:any,public config:ConfigService,private sanitizer:DomSanitizer) { 
  }
}