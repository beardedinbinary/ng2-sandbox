import { reducer } from './requests/requests.reducer';
import { StoreModule } from '@ngrx/store';
import { ServiceRequest } from './requests/request';
import { ServiceRequestService } from './requests/request.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { ChartsModule } from 'ng2-charts';
import { ChartModule } from 'angular2-highcharts';
import { ChartsModule as KendoChartsModule } from '@progress/kendo-angular-charts';
import { GridModule } from '@progress/kendo-angular-grid';
//import { InMemoryWebApiModule } from 'angular-in-memory-web-api';

// Imports for loading & configuring the in-memory web api


import { AppComponent } from './app.component';
import { DoughnutChartDemoComponent } from './shared/chartjs/doughnutChartDemo.component';
import { HighchartComponentDemo } from './shared/highcharts/highchart.component';
import { DynamicChartComponent } from './shared/highcharts/dynamic-chart/dynamic-chart.component';
import { ChartJsComponent } from './shared/chartjs/chartjs.component';
import { BarchartComponent } from './shared/barchart/barchart.component';
import { DynamicLineComponent } from './shared/chartjs/dynamic-line/dynamic-line.component';
import { KendoChartComponent } from './shared/kendoChart/kendo-chart/kendo-chart.component';

import { RequestsComponent } from './requests/requests.component';
import { ChartComponent } from './requests/chart/chart.component';
import { TableComponent } from './requests/table/table.component';

import { DashboardComponent } from './dashboard/dashboard.component';

import { InMemoryDataService } from './in-memory-data.service';

import 'hammerjs';
const appRoutes: Routes = [
  { path: 'service-requests', component: RequestsComponent },
  { path: 'dashboard', component: DashboardComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    DoughnutChartDemoComponent,
    HighchartComponentDemo,
    DynamicChartComponent,
    ChartJsComponent,
    BarchartComponent,
    DynamicLineComponent,
    KendoChartComponent,
    RequestsComponent,
    ChartComponent,
    DashboardComponent,
    TableComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    StoreModule.provideStore({request:reducer}),
    BrowserModule,
    FormsModule,
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    HttpModule,
    ChartsModule,
    ChartModule,
    KendoChartsModule,

    //InMemoryWebApiModule.forRoot(InMemoryDataService),
    GridModule,
  ],
  providers: [
    ServiceRequestService 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
