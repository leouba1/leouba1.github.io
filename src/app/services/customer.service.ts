import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Client, Customer } from './ebo-client.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private eboClientService: Client) { }

  getAllFiltered(filter: string) : Observable<Customer[]>{
    // call ebo-service
    console.log(`called with: ${filter}`);
    return new Observable<Customer[]>();
  }
}
