import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  siteLanguage: string = 'English';
  siteLocale: string;
  languageList = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' }
  ];
  constructor() { }
  ngOnInit() {
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage = this.languageList.find(f => f.code === this.siteLocale).label;
    console.log(this.siteLanguage);
  }
}
