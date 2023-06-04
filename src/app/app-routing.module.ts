import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CalculatorComponent} from "./components/caculator/calculator.component";
import {HelloworldComponent} from "./components/helloworld/helloworld.component";

const routes: Routes = [
  { path: '', component: HelloworldComponent },
  { path: 'calc', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
