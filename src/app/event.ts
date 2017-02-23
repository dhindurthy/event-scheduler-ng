/**
 * Class that creates 'event' class with 
 * two properties id and name in it.
 * This calss should be imported wherever 
 * "events" array is being used
 */
export class Event {
  constructor(
    public id: number,
    public name: string
  ) {  }
}
