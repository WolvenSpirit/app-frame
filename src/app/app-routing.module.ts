import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DemoComponent } from './demo/demo.component';

const childRoutes:Routes = [
  {path:"admin",component:DemoComponent}
]
const routes: Routes = [
  {path:"",component:MainComponent,children:childRoutes} // Info - place guard if you need it!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
