export class YearlyDriversList{
  drivers : Drivers[] = [];
  year!:number ;
  currentChampion?:string;

}



export class Drivers{
  code: string ='';
  dateOfBirth: string ='';
  driverId: string ='';
  familyName: string ='';
  givenName: string ='';
  nationality: string ='';
  permanentNumber: string='' ;
  url: string='';
  year?:string='';
}
