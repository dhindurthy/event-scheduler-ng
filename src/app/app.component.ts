import { Component } from '@angular/core';

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
export class AppComponent {
  // title = 'Test Works!';
  // bindingValue = "binding";
}
