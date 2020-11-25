import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';
import { ValuesModel } from '../Models/ValuesModel';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  constructor(private getDataService: GetdataService) { }

  public valuesModel: ValuesModel = new ValuesModel();

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.getDataService.getData(2).subscribe(x => 
      this.valuesModel = {
        dateTime: x.dateTime,
        microcontrollerID: x.microcontrollerID,
        temperature: x.temperature,
        doorOpen: x.doorOpen,
        dust: x.dust,
        humidity: x.humidity,
        power: x.power,
      } as ValuesModel
    );
  }

}
