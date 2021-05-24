import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';
import { YearlyDriversList } from '../shared/f-model';

@Component({
  selector: 'app-winner-list',
  templateUrl: './winner-list.component.html',
  styleUrls: ['./winner-list.component.scss'],
  // changeDetection:ChangeDetectionStrategy.OnPush
})
export class WinnerListComponent implements OnInit {
  @Input() winners = new YearlyDriversList;

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(){
  }

}

