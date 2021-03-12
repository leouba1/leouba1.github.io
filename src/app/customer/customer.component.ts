import { Component, AfterViewInit } from "@angular/core";
import { debounceTime, filter, map, tap } from "rxjs/operators";
import { CustomerService } from "./../services/customer.service";
import { CustomerSearchService } from "../services/customer-search.service";
import { Observable } from "rxjs";
import { Customer } from "../services/ebo-client.service";
import { SearchConstants } from "../shared/constants"

@Component({
  selector: "app-customer",
  templateUrl: "./customer.component.html",
})
export class CustomerComponent implements AfterViewInit {
  customers$: Observable<Customer[]>;

  constructor(
    private customerService: CustomerService,
    private customerSearchService: CustomerSearchService
  ) {}

  ngAfterViewInit(): void {
    
    this.customerSearchService.searchValueChanged$.pipe(
      filter((query: string) => query.length == 0 || query.length >= SearchConstants.MIN_LENGTH),
      debounceTime(SearchConstants.DEBOUNCE_TIME),
      map((query: string) => this.customerService.getAllFiltered(query))
    ).subscribe(
      (result => {this.customers$ =  result})
    );
  }
}
