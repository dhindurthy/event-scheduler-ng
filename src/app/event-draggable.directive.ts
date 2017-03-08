import { Input, ElementRef, HostListener, Directive, HostBinding } from '@angular/core';

export interface DraggableOptions {
  zone?: string;
  data?: any;
  group?: string;
}

@Directive({
  selector: '[appEventDraggable]'
})

export class EventDraggableDirective {

  constructor(private el: ElementRef) { }

  @HostBinding('draggable')
  get draggable() {
    return true;
  }
  
  @Input()
  set appEventDraggable(options: DraggableOptions) {
    if (options) {
      this.options = options;
    }
  }
  
  private options: DraggableOptions = {};
  
  @HostListener('dragstart', ['$event'])
  onDragStart(event) {
    
    this.el.nativeElement.classList.add('event-drag');

    const { zone = 'zone', data = {}, group = 'group'} = this.options;
    event.dataTransfer.setData(`application/x-${zone}`, JSON.stringify(data));
  }

  @HostListener('dragend', ['$event'])
  onDragEnd(event) {

    this.el.nativeElement.classList.remove('event-drag');
  }
}