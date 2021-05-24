import { Component, Input, OnInit } from '@angular/core';
import { Drivers, YearlyDriversList } from '../shared/f-model';

@Component({
  selector: 'app-race-list',
  templateUrl: './race-list.component.html',
  styleUrls: ['./race-list.component.scss']
})
export class RaceListComponent implements OnInit {

  @Input() raceList:any

  constructor() { }

  ngOnInit(): void {
  }

}
