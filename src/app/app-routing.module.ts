import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PopulationComponent } from 'src/app/core/body/population/population.component';
import { RoutingComponent } from 'src/app/core/body/routing/routing.component';
import { SettingsComponent } from 'src/app/core/body/settings/settings.component';
import { LoginComponent } from './authentication/login/login.component';
import { ForgotpassComponent } from './authentication/forgotpass/forgotpass.component';
import { RegisterComponent } from './authentication/register/register.component';
import { NotfoundComponent } from './notfound/notfound.component';


const routes: Routes = [
  { path: 'population', component: PopulationComponent},
  { path: 'routing', component: RoutingComponent},
  { path: 'settings', component: SettingsComponent},
  { path: 'login', component: LoginComponent},
  { path: 'forgotpass', component: ForgotpassComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'notfound', component: NotfoundComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
