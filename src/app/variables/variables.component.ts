import { Component, OnInit } from '@angular/core';
import { GetdataService } from '../getdata.service';

@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {

  constructor(private getDataService: GetdataService) { }

  public data: string = 'Liviu';

  ngOnInit(): void {
    this.getData();
  }

  public getData(): void {
    this.getDataService.getData().subscribe(x => 
      this.data = x?.toString())
  }

}
