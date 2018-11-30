import { Component, OnInit } from '@angular/core';
import {UpperCasePipe,DatePipe,LowerCasePipe,SlicePipe} from '@angular/common';

//for create our directive
import { Directive,ElementRef } from '@angular/core'; 


@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {

  constructor() { }
 birthday = new Date(1988, 3, 15); // April 15, 1988
 name="rama";
 mks=78;
  ngOnInit() {
  }

}
