import { TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { AppComponent } from './app.component';
import { FWorldService } from './f-world.service';

describe('AppComponent', () => {
  let fixture: any, MOCKService:any, MOCKDrivesResponse:any, MOCKWinners;
  beforeEach(async () => {
    MOCKService = jasmine.createSpyObj(['raceList','seasonList'])
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      providers:[
        {provide:FWorldService,useValue:MOCKService}
      ]
    }).compileComponents();
   fixture = TestBed.createComponent(AppComponent)
  });

  beforeEach(()=>{
    MOCKDrivesResponse = [{
      race:2005,
      drivers:[{
        givenName:'Valentine',
        familyName:'Awe'
      }]
    }]

  })


  it('It should call the raceList method in ther Fservice method on the Initialisation',()=>{
     MOCKService.raceList.and.returnValue(of(MOCKDrivesResponse));

     fixture.componentInstance.ngOnInit()

     expect(MOCKService.raceList).toHaveBeenCalled();
  })

  it('It should call the raceList method in our Fservice',()=>{
    MOCKService.raceList.and.returnValue(of(MOCKDrivesResponse));

    fixture.componentInstance.getRaceList()

    expect(MOCKService.raceList).toHaveBeenCalled();
 })

 it('It should call the seasonList method in the Fservice',()=>{
  MOCKService.seasonList.and.returnValue(of(MOCKDrivesResponse));

  fixture.componentInstance.openNav(2005,'valentine')

  expect(MOCKService.seasonList).toHaveBeenCalled();
})

 it('It should return 2005',()=>{
  MOCKService.raceList.and.returnValue(of(MOCKDrivesResponse));

  fixture.componentInstance.getRaceList()

  expect(fixture.componentInstance.raceList[0][0].race).toEqual(2005);
})

it('should expect the width of the sidevan to be 100%',()=>{
  MOCKService.seasonList.and.returnValue(of(MOCKDrivesResponse));

  fixture.componentInstance.openNav(2005,'valentine')

  expect(fixture.nativeElement.querySelector(".sidenav").style.width).toBe('100%');
})

it('should expect return 2021 when the openNav is called',()=>{
  MOCKService.seasonList.and.returnValue(of(MOCKDrivesResponse));

  fixture.componentInstance.openNav(2021,'valentine')

 expect(fixture.componentInstance.yearlyWinners.year).toEqual(2021)
})


});
