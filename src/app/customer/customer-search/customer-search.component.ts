import { Component } from "@angular/core";
import { CustomerSearchService } from "./../../services/customer-search.service";

@Component({
  selector: "app-customer-search",
  templateUrl: "./customer-search.component.html",
})
export class CustomerSearchComponent {

  constructor(private customerSearchService: CustomerSearchService) {}

  onSearchChange(value: string): void {
    this.customerSearchService.setSearchValue(value);
  }
}
