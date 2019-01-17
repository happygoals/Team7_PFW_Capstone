import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopulationComponent } from './body/population/population.component';


const routes: Routes = [
  { path: 'population', component: PopulationComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
