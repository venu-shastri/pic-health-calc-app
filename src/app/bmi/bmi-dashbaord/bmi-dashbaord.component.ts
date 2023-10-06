import { ChangeDetectionStrategy } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-bmi-dashbaord',
  templateUrl: './bmi-dashbaord.component.html',
  styleUrls: ['./bmi-dashbaord.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class BmiDashbaordComponent implements OnInit {
  activeCalculator:string="None";

  constructor(public service:CommunicationService) { }

  ngOnInit(): void {
    this.service.register().subscribe((message:string)=>{
      this.activeCalculator=message;

    });
  }
  ngAfterViewInit(){
     //this.activeCalculator="Helloooo";
  }

}
