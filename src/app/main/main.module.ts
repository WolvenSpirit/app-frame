import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { MainComponent } from './main.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { RouterModule, Route } from '@angular/router';
import { ConfigService } from './config.service';

@NgModule({
  declarations: [MainComponent,ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule, 
    RouterModule
  ],
  exports:[MainComponent],
  providers:[ConfigService],
  bootstrap:[MainComponent]
})
export class MainModule {} 
