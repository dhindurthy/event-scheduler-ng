/**
 * Class that creates 'event' class with 
 * two properties id and name in it.
 * This calss should be imported wherever 
 * "events" array is being used
 */
export class Event {
  constructor(
    public id: number,
    public name: string,
    public description: string,
    public people: string,
    public date: string,
    public time: string,
    public address: string,
    public status: string
  ) {  }
}
