import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class FWorldService {

  baseURL = environment.base_url;

  raceListCache:any = {};

  constructor(private http:HttpClient) { }

  raceList(year:number){
    return this.http.get(`${this.baseURL}/${year}/driverStandings/1.json`).pipe(
      map((res:any)=>{
         return {'year':year,'drivers':res.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver}
      })
    )
  }

  seasonList(year:number){
    if(this.raceListCache[year]){
        return of(this.raceListCache[year])
    }
    return this.http.get(`${this.baseURL}/${year}/results/1.json`).pipe(
      map((res:any)=>{
        return {'year':year,'drivers':res.MRData.RaceTable.Races}
     }),
     map((res)=>{
      return  res.drivers.map((re:any)=>{
       return re.Results[0].Driver
    })
    }),
     tap(resolvedValue =>{
        this.raceListCache[year] = resolvedValue
     })
    )
  }

}

