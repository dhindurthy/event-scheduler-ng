import { Injectable, Inject } from '@angular/core';

/**
 * Import our opaque token LOCALIZATIONS created in localization.ts
 */
import { LOCALIZATIONS } from './localization'; // 

@Injectable()
export class LocalizationService {

	private _currentLocale: string;

	//constructor() { }

	public get currentLocale() {
	  return this._currentLocale;
	}

  	/**
  	 * [constructor inject our localizations token which is a provider actually]
  	 * @param {any} @Inject(LOCALIZATIONS) private _localizations [description]
  	 */
	constructor(@Inject(LOCALIZATIONS) private _localizations: any) {}

	/**
	 * [use Setting the curent locale]
	 * @param {string} locale [variable that carries the locale]
	 */
	public useLocale(locale: string): void {
		this._currentLocale = locale;
	}

	public localize(key: string): string {

		let localizationText = key;
	    /**
	     * This below code directly refers the key/value pairs in the 'lookup' object in localization.ts
	     * The 'this._localizations' is a private property from the constructor above which has "LOCALIZATIONS" injected in it.
	     * The 'LOCALIZATIONS' is a provider token(opaque token) which in return is tied to a provider definition(making it a provider)
	     * by using 'provide' object literal(which has token/definition pair) like "{ provide: LOCALIZATIONS, useValue: lookup }" 
	     * and this provider is declared in the "app.module.ts" in the "Providers" so its avialable for the whole app.
	     * The 'dictionary' has locale/transy pairs, the 'transy' is an object which agian has 'property/value' pairs where
	     * property is standard(en) string whereas value is localized string. This transy object helps to locate required localized 
	     * value by looking for the appropriate property in that transy object as this property is standard for all languages.
	     * Thats why in the below code we do 'this._localizations[this.currentLocale]' and 'this._localizations[this.currentLocale][key]' 
	     * which accesses the appropriate lang/transy pair by '[this.currentLocale]' which is the language defined in 'localizations' 
	     * which then looks for the '[key]' which is property of 'transy' object which is the string we want to get localized.
	     * **/
	    if (this._localizations[this.currentLocale] && this._localizations[this.currentLocale][key]) {
			return this._localizations[this.currentLocale][key];
		}

		return localizationText;
	}
 //  /**
 //   * Try to combine both the above and below methods
 //   * */
	// public instant(key: string) {
	// 	// public perform translation
	// 	return this.translate(key); 
	// }

}
