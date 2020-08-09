import { Component, OnInit } from '@angular/core';


// declare var require: any;

// const data= require('./data.json');

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




@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  constructor() { }

	ngAfterViewInit() {}

  displayedColumns: string[] = ['serviceName', 'status','log', 'start', 'stop', 'restart'];
	dataSource = ELEMENT_DATA

  ngOnInit(): void {
  }

}
