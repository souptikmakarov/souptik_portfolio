import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { QlearnerBasicComponent } from './qlearner-basic/qlearner-basic.component';

const routes: Routes = [
  {path: "home", component: HomepageComponent},
  {path: "", component: QlearnerBasicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
