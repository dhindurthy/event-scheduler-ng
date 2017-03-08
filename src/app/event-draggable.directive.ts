import { Input, ElementRef, HostListener, Directive, HostBinding } from '@angular/core';

export interface DraggableOptions {
  dragdroparea?: string;
  eventData?: any;
}

@Directive({
  selector: '[appEventDraggable]'
})

export class EventDraggableDirective {

  constructor(private el: ElementRef) { }

  /**
   * [HostBinding This sets 
   * the draggable HTML attribute 
   * which enables HTML5 Drag and Drop]
   * It is like setting draggable=true in html5
   * @param {attribute} 'draggable' [description]
   */
  @HostBinding('draggable')
  get draggable() {
    return true;
  }
  
  /**
   * [Input So we can assign an object 
   * while using the directive like 
   * [appEventDraggable]="{eventData: event}"]
   */
  @Input()
  set appEventDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }
  
  private options: DraggableOptions = {};
  
  /**
   * [HostListener Adding event handler]
   * @param {dragstart} 'dragstart' [dragstart is 
   * a DOM event and attaching an event handler]
   * @param {object} '$event'    [Event object from DOM]
   * The data associated with the draggable directive 
   * is stored as a custom MIME type. 
   * This custom MIME type later allows to implement drop 'dragdroparea' - 
   * restricting what a drop target accepts.
   */
  @HostListener('dragstart', ['$event'])
  onDragStart(event) {

    this.el.nativeElement.classList.add('event-drag');

    const { dragdroparea = 'dragdroparea', eventData = {}} = this.options;
    event.dataTransfer.setData(`application/x-${dragdroparea}`, JSON.stringify(eventData));
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {

    this.el.nativeElement.classList.remove('event-drag');
  }
}