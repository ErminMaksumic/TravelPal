import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccommodationService } from '../accommodation.service';
import { AccommodationVM } from '../stays.model';

@Component({
  selector: 'app-stay-details',
  templateUrl: './stay-details.component.html',
  styleUrls: ['./stay-details.component.css'],
})
export class StayDetailsComponent implements OnInit {
  startDate!: Date;
  endDate!: Date;
  stay!: AccommodationVM;
  constructor(
    private _route: ActivatedRoute,
    private _accommodationService: AccommodationService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._route.params.subscribe((params) => {
      this._accommodationService
        .getById(params.id)
        .subscribe((data: AccommodationVM) => {
          this.stay = data;
        });
    });
  }

  change() {
    console.log('this.startDate :>> ', this.startDate);
    console.log('this.endDate :>> ', this.endDate);
  }
}
