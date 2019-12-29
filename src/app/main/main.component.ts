import { Component, OnInit, ViewChild } from '@angular/core';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { MatSidenav } from '@angular/material/sidenav';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  private u$:Subject<any> = new Subject();
  constructor(public cfg:ConfigService) { }

  ngOnInit() {
  }
  @ViewChild('toolbar',{static:true,read:ToolbarComponent}) public toolbar:ToolbarComponent;
  @ViewChild('drawer',{static:true,read:MatSidenav}) public sidenav:MatSidenav;


  ngAfterContentInit():void {
    console.log(this.toolbar);
    this.sidenav.toggle(); // start with sidebar showing
    this.toolbar.sidebarToggle.change.pipe(takeUntil(this.u$)).subscribe(()=>{
      this.sidenav.toggle();
    });
  }

}
