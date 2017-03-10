import { OpaqueToken } from '@angular/core';

// import localize files
import { LANG_EN_NAME, LANG_EN_TRANS } from './localize-en';
import { LANG_ES_NAME, LANG_ES_TRANS } from './localize-es';

// localizations token created to make this a provider
export const LOCALIZATIONS = new OpaqueToken('localizations');

// all localization variables are gathered here in lookup
export const lookup = {
	[LANG_EN_NAME]: LANG_EN_TRANS,
	[LANG_ES_NAME]: LANG_ES_TRANS
};

// providers
/**
 * The same is added in app.module.ts as well
 * @type {Array}
 */
// export const LOCALIZATION_PROVIDERS = [
// 	{ provide: LOCALIZATIONS, useValue: lookup },
// ];