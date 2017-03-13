import { Component, OnInit } from '@angular/core';

import { LocalizationService } from './localization/localization.service';

@Component({
  selector: 'app-root',

  /**
   * This is a property in the component that 
   * needs to be provided in order to use 
   * html/style externla files
   */
  moduleId: module.id,

  /**
   * templateUrl
   * This property is where the url for the external 
   * html file thats concerned with the component is added
   */
  templateUrl: './app.component.html',

  /**
   * styleUrls
   * The url(s) for thestyles of this specific component
   * are added here
   */
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  public supportedLocales: any[];

  public translateAdd: string;

  public chosenLocale: string;

  /**
   * Constructor is required for every component
   * and in case of the usage of a service, below 
   * declaration of a private instance of that 
   * service is required
   */
  constructor(
    private _localizeSevice: LocalizationService
  ) { 
    
  }

  ngOnInit() {

    this.supportedLocales = [
        { locale: 'English', value: 'en' },
        { locale: 'Español', value: 'es' },
      ];

      this.selectLocale('es');
  }

  selectLocale(locale: string) {

    this.chosenLocale = locale;
    this._localizeSevice.useLocale(locale);
    this.translateAdd = this._localizeSevice.localize('add');
  }

}
