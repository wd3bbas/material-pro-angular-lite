import { Component, AfterViewInit } from '@angular/core';

import * as Chartist from 'chartist';
import { ChartType, ChartEvent } from 'ng-chartist';
declare var require: any;

const data= require('./data.json');

export interface PeriodicElement {
	serviceName: string;
	status: string;
	log: String;
	start: string;
	stop: string;
	restart:string;
  }
  
  const ELEMENT_DATA: PeriodicElement[] = [
	{serviceName: 'Connect API 13 ', status: 'Active', log: 'Log', start: 'Start', stop: 'stop'  ,restart:'Restart'},
	{serviceName: 'Connect API 14', status: 'Active', log: 'Log',start: 'Start', stop: 'stop'  ,restart:'Restart'},
	{serviceName: 'Connect API 15', status: 'Active', log: 'Log',start: 'Start', stop: 'stop'  ,restart:'Restart'},

	{serviceName: 'Nginx', status: 'Active', log: 'Log',start: 'Start', stop: 'stop'  ,restart:'Restart'},
	// {serviceName: '3', status: 'Lithium', start: '6.941', stop: 'Li'   ,restart:'mango'},
	// {serviceName: '4', status: 'Beryllium', start: '9.0122', stop: 'Be',restart:'mango'},
	// {serviceName: '5', status: 'Boron', start: '10.811', stop: 'B'     ,restart:'mango'},
	// {serviceName: '6', status: 'Carbon', start:' 12.0107', stop: 'C'   ,restart:'mango'},
	// {serviceName: '7', status: 'Nitrogen', start: '14.0067', stop: 'N' ,restart:'mango'},
	// {serviceName: '8', status: 'Oxygen', start: '15.9994', stop: 'O'   ,restart:'mango'},
	// {serviceName: '9', status: 'Fluorine', start: '18.9984', stop: 'F' ,restart:'mango'},
  ];

export interface Chart {
	type: ChartType;
	data: Chartist.IChartistData;
	options?: any;
	responsiveOptions?: any;
	events?: ChartEvent;
}

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements AfterViewInit {
	
	ngAfterViewInit() {}

	displayedColumns: string[] = ['serviceName', 'status','log', 'start', 'stop', 'restart'];
	dataSource = ELEMENT_DATA

	// Barchart
	barChart1: Chart = {
		type: 'Bar',
		data: data['Bar'],
		options: {
			seriesBarDistance: 15,
			high: 12,

			axisX: {
				showGrid: false,
				offset: 20
			},
			axisY: {
				showGrid: true,
				offset: 40
			},
			height: 360
		},

		responsiveOptions: [
			[ 
				'screen and (min-width: 640px)',
				{
					axisX: {
						labelInterpolationFnc: function(value: number,index: number): string {
							return index % 1 === 0 ? `${value}` : '';
						}
					}
				}
			]
		]
	};

	// This is for the donute chart
	donuteChart1: Chart = {
		type: 'Pie',
		data: data['Pie'],
		options: {
			donut: true,
			height: 260,
			showLabel: false,
			donutWidth: 20
		}
	};
}
