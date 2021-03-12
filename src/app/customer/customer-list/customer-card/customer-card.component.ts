import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'customer-card',
  templateUrl: './customer-card.component.html',
  styleUrls: ['./customer-card.component.scss']
})
export class CustomerCardComponent implements OnInit {
  quoteId: String = "EBO-1234";
  business: String = "Schneider New York";
  sites: Number = 0;
  createdOn: String;
  createdBy: String;
  lastModificationOn: String;
  lastModificationBy: String;

  constructor() { }

  ngOnInit(): void {
    // Mock data
    // 
    // this.quoteId = "EBO-1234";
    // this.business = "Schneider New York";
    // this.sites = 8;
    // this.createdOn = "2021_03_03";
    // this.createdBy = "John Doe";
    // this.lastModificationOn = "2021_03_03";
    // this.lastModificationBy = "Dan Carter";
  }

  onClickEdit() {
    // Test log
    // 
    // console.log("onEdit event triggered!");
  }

  onDuplicate() {
    // Test log
    // 
    // console.log("onDuplicate event triggered!");
  }

  onDelete() {
    // Test log
    // 
    // console.log("onDelete event triggered!");
  }
}
