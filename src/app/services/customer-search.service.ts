import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class CustomerSearchService {
  searchValueChanged$ = new BehaviorSubject<string>('');

  setSearchValue(value: string) :void{
    this.searchValueChanged$.next(value);
  }
}
