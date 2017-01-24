import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {AppComponent} from './app.component';

import {ChartsModule} from 'ng2-charts';
import {ChartModule} from 'angular2-highcharts';
import {DataTablesModule} from 'angular-datatables';
import {ChartsModule as KendoChartsModule} from '@progress/kendo-angular-charts';

import {HelloWorldComponent} from './shared/helloworld/helloworld.component';
import {DoughnutChartDemoComponent} from './shared/chartjs/doughnutChartDemo.component';
import {HighchartComponentDemo} from './shared/highcharts/highchart.component';
import {DynamicChartComponent } from './shared/highcharts/dynamic-chart/dynamic-chart.component';
import {ChartJsComponent} from './shared/chartjs/chartjs.component';
import {BarchartComponent} from './shared/barchart/barchart.component';
import {DynamicLineComponent} from './shared/chartjs/dynamic-line/dynamic-line.component';
import { KendoChartComponent } from './shared/kendoChart/kendo-chart/kendo-chart.component';

import 'hammerjs';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DoughnutChartDemoComponent,
    HighchartComponentDemo,
    DynamicChartComponent,
    ChartJsComponent,
    BarchartComponent,
    DynamicLineComponent,
    KendoChartComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    ChartModule,
    KendoChartsModule,
    DataTablesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
