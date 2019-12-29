import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material';
import { MainComponent } from './main.component';
import { ToolbarComponent } from '../toolbar/toolbar.component';
import { RouterModule } from '@angular/router';
import { subRoutes1 } from '../app-routing.module';
import { ConfigService } from './config.service';


@NgModule({
  declarations: [MainComponent,ToolbarComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forRoot(subRoutes1)
  ],
  exports:[MainComponent],
  providers:[ConfigService],
  bootstrap:[MainComponent]
})
export class MainModule { }
