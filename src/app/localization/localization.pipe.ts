import { Pipe, PipeTransform } from '@angular/core';

import { LocalizationService } from './localization.service';

@Pipe({
  name: 'l',

  pure: false // impure pipe, update value when we change language
})
export class LocalizationPipe implements PipeTransform {

	constructor(private _localizeService: LocalizationService) { }

	transform(value: any, args?: any): any {

		if (!value) return;
		return this._localizeService.localize(value);
	}
}