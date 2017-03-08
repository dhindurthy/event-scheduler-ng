import { Output, ElementRef, EventEmitter, Input, HostListener, Directive, HostBinding } from '@angular/core';

export interface DropTargetOptions {
  zone?: string;
}

@Directive({
  selector: '[appEventDroppable]'
})

export class EventDroppableDirective {
  @Input()
  set myDropTarget(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }
  
  @Output('dropSection') drop = new EventEmitter();

  constructor(private el: ElementRef) { }
  
  private options: DropTargetOptions = {};
  
  @HostListener('dragover', ['$event'])
  onDragOver(event) {

    this.el.nativeElement.classList.add('event-drag-action');

    const { zone = 'zone'} = this.options;
    if (event.dataTransfer.types.indexOf(`application/x-${zone}`) >= 0) {
      event.preventDefault();
    }
  }
  
  @HostListener('drop', ['$event'])
  onDrop(event) {

    this.el.nativeElement.classList.remove('event-drag-action');

    const { zone = 'zone' } = this.options;
    const data = JSON.parse(event.dataTransfer.getData(`application/x-${zone}`));
    data.section = event.target.id;
    let itemStartsAt = document.getElementById(data.id).getAttribute('group');
    let targetAreaId = event.target.id;
    let itemEndsIn = event.target.getAttribute('group');
    console.log('item started in: ' +itemStartsAt);
    console.log("target area's id: " + targetAreaId);
    console.log('item ended in: ' + itemEndsIn);
    /**
     * itemEndsIn //should be available and non-empty
     * targetAreaId //should be available and non-empty
     * targetAreaId should be equal to 'one' or 'two'//not required
     * itemStartsAt !== itemEndsIn
     */
    if (itemEndsIn && itemEndsIn !== '' && targetAreaId && targetAreaId !== '' && itemStartsAt !== itemEndsIn){
        this.drop.next(data);
    } else {
      document.getElementById(data.id).classList.add('drag-action-disabled');
      setTimeout(function() {
        document.getElementById(data.id).classList.remove('drag-action-disabled');
      }, 2000);
    }
    //this.drop.next(data);
  }

  @HostListener('dragenter', ['$event'])
  onDragEnter(event) {

    this.el.nativeElement.classList.add('event-drag-action');
  }

  @HostListener('dragleave', ['$event'])
  onDragLeave(event) {

    this.el.nativeElement.classList.remove('event-drag-action');
  }
}