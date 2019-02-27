import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopulationComponent } from 'src/app/core/body/population/population.component';
import { RoutingComponent } from 'src/app/core/body/routing/routing.component';
import { SettingsComponent } from 'src/app/core/body/settings/settings.component';
import { HomeComponent } from 'src/app/core/body/home/home.component';


const routes: Routes = [
  { path: 'population', component: PopulationComponent},
  { path: 'routing', component: RoutingComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'home', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
