import { ControllerComponent } from './core/body/controller/controller.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatGridListModule } from '@angular/material';
import { MatMenuModule } from '@angular/material';
import { MatCheckboxModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';
import { PopulationComponent } from './core/body/population/population.component';
import { HeatmapComponent } from './core/body/population/heatmap/heatmap.component';
import { RoutingComponent } from './core/body/routing/routing.component';
import { SettingsComponent } from './core/body/settings/settings.component';
import { HomeComponent } from './core/body/home/home.component';
import { AngularMaterialModule } from './angular-material.module';
import { ChartComponent } from './core/body/routing/chart/chart.component';
import { jqxChartComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxchart';
import { jqxDropDownListComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxdropdownlist';
import { Ng5SliderModule } from 'ng5-slider';
import { BeaconService } from './services/beacon.service';
import { HttpClientModule } from '@angular/common/http';
import { FormControl, FormGroup } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatePipe } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    PopulationComponent,
    RoutingComponent,
    HomeComponent,
    LoginComponent,
    SettingsComponent,
    ControllerComponent,
    HeatmapComponent,
    ChartComponent,
    jqxChartComponent,
    jqxDropDownListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AngularMaterialModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatButtonModule,
    MatCheckboxModule,
    MatMenuModule,
    Ng5SliderModule,
    HttpClientModule,

  ],
  providers: [DatePipe, BeaconService],
  bootstrap: [AppComponent]
})
export class AppModule { }
