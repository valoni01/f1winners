import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { FWorldService } from './f-world.service';
import {  YearlyDriversList } from './shared/f-model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  raceStartYear = environment.defaultStartDate;
  dobj = new Date();
  currentYear = this.dobj.getFullYear();
  raceList!:any;
  isOpen:boolean=false;
  yearlyWinners = new YearlyDriversList;

  @ViewChild('tpl', { static: true }) myDiv! : ElementRef ;

  constructor(private fservice:FWorldService){

  }


  ngOnInit(){
    this.getRaceList();
  }

  getRaceList(){
    let raceObs$ = []
    for(let a = 0; a <= (this.currentYear - this.raceStartYear); a++){
        raceObs$.push(this.fservice.raceList(this.raceStartYear + a))
    }
    forkJoin(raceObs$).subscribe((res:any)=>{
       this.raceList = res;
    })
  }

  getWinnersList(year:number,champId:string){
    this.fservice.seasonList(year).subscribe((res)=>{
        this.yearlyWinners = {
        drivers:res,year:year,currentChampion:champId
      }
    })
  }


//opens the side nav that deplays the forcast
openNav(year:number,currentChampion:string) {
  this.myDiv.nativeElement.style.width = "100%";
  this.getWinnersList(year,currentChampion)
  this.isOpen = true;
}

 closeNav() {
  this.myDiv.nativeElement.style.width = "0";
  this.isOpen = false;
}



}
