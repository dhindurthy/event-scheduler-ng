import { Output, ElementRef, EventEmitter, Input, HostListener, Directive, HostBinding } from '@angular/core';

export interface DropTargetOptions {
  dragdroparea?: string;
}

@Directive({
  selector: '[appEventDroppable]'
})

export class EventDroppableDirective {
  /**
   * [Input Property that allows us to specify the dragdroparea
   * like [appEventDroppable]="{dragdroparea:'another'}"] if required
   */
  @Input()
  set appEventDroppable(options: DropTargetOptions) {
    if (options) {
      this.options = options;
    }
  }
  
  /**
   * [Output Property which will emit whenever 
   * the user drops something which has a prefix 
   * for usage purpose]
   * 
   */
  @Output('dropSection') drop = new EventEmitter();

  constructor(private el: ElementRef) { }
  
  private options: DropTargetOptions = {};
  
  /**
   * [HostListener Checks for the presence of the custom MIME type]
   * 
   */
  @HostListener('dragover', ['$event'])
  onDragOver(event) {

    this.el.nativeElement.classList.add('event-drag-action');

    const { dragdroparea = 'dragdroparea'} = this.options;
    if (event.dataTransfer.types.indexOf(`application/x-${dragdroparea}`) >= 0) {
      event.preventDefault();
    }
  }
  
  /**
   * [HostListener Handles the drop event and emits the 
   * 'dropSection' event with the data associated with the drag operation]
   */
  @HostListener('drop', ['$event'])
  onDrop(event) {

    this.el.nativeElement.classList.remove('event-drag-action');

    const { dragdroparea = 'dragdroparea' } = this.options;
    const eventData = JSON.parse(event.dataTransfer.getData(`application/x-${dragdroparea}`));
    eventData.section = event.target.id;
    let itemStartsAt = document.getElementById(eventData.id).getAttribute('group');
    let targetAreaId = event.target.id;
    let itemEndsIn = event.target.getAttribute('group');

    /**
     * itemEndsIn //should be available and non-empty
     * targetAreaId //should be available and non-empty
     * targetAreaId should be equal to 'one' or 'two'//not required
     * itemStartsAt !== itemEndsIn
     */
    if (itemEndsIn && itemEndsIn !== '' && targetAreaId && targetAreaId !== '' && itemStartsAt !== itemEndsIn){
        this.drop.next(eventData);
    } else {
      document.getElementById(eventData.id).classList.add('drag-action-disabled');
      setTimeout(function() {
        document.getElementById(eventData.id).classList.remove('drag-action-disabled');
      }, 1500);
    }
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