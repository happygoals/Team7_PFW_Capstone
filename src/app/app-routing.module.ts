import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopulationComponent } from './body/population/population.component';
import { RoutingComponent } from './body/routing/routing.component';
import { SettingsComponent } from './body/settings/settings.component';


const routes: Routes = [
  { path: 'population', component: PopulationComponent},
  { path: 'routing', component: RoutingComponent},
  { path: 'settings', component: SettingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
