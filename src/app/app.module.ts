import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import {ChartsModule } from 'ng2-charts';
import {ChartModule} from 'angular2-highcharts';

import {HelloWorldComponent} from './shared/helloworld/helloworld.component';
import {DoughnutChartDemoComponent} from './shared/chartjs/doughnutChartDemo.component';
import {HighchartComponentDemo} from './shared/highcharts/highchart.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DoughnutChartDemoComponent,
    HighchartComponentDemo
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartsModule,
    ChartModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }