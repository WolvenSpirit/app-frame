import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DemoComponent } from './demo/demo.component';

export const subRoutes1: Routes = [
  {path:"demo",component:DemoComponent}
]
const routes: Routes = [
  {path:"admin",component:MainComponent,children:subRoutes1} // Info - place guard if you need it!
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
