import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { SeWebModule } from '@se/web-ui-angular';

import { environment } from '../environments/environment';

import { API_BASE_URL } from './services/ebo-client.service';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './header/header.component';
import { TabbarComponent } from './tabbar/tabbar.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerSearchComponent } from './customer/customer-search/customer-search.component';
import { CustomerCardComponent } from './customer/customer-list/customer-card/customer-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    HeaderComponent,
    TabbarComponent,
    CustomerComponent,
    CustomerSearchComponent,
    CustomerCardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SeWebModule.forRoot()
  ],
  providers: [{ provide: API_BASE_URL, useValue: environment.apiUrl }],
  bootstrap: [AppComponent]
})
export class AppModule { }
