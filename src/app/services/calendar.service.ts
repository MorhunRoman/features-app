import {Injectable} from "@angular/core";
import {CalendarItemInterface} from "../shared/models/calendar/calendar-item.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {ContactItemInterface} from "../shared/models/contacts/contact-item.interface";
import {map, take, tap} from "rxjs/operators";
import {generateId} from "../shared/helpers/generate-id.helper";

const DEFAULT_EVENTS: CalendarItemInterface[] = [
  {
    id: 1,
    date: new Date('03-06-2022'),
    eventName: 'Grooming',
    eventDesc: 'Discuss current sprint'
  },
  {
    id: 2,
    date: new Date('04-06-2022'),
    eventName: 'Grooming',
    eventDesc: 'Discuss current sprint'
  },
  {
    id: 3,
    date: new Date('06-06-2022'),
    eventName: 'Grooming',
    eventDesc: 'Discuss current sprint'
  },
]


@Injectable({
  providedIn: "root"
})
export class CalendarService {

  private eventsList$: BehaviorSubject<CalendarItemInterface[]> = new BehaviorSubject<CalendarItemInterface[]>(DEFAULT_EVENTS);

  constructor() {
  }

  public get eventsList(): Observable<CalendarItemInterface[]> {
    return this.eventsList$.asObservable();
  }

  createEvent(event: CalendarItemInterface) {
    this.eventsList.pipe(
      take(1),
      tap((events: CalendarItemInterface[]) => {
        event.id = generateId();
        events.push(event);
        this.updateEventsList(events);
      })
    ).subscribe();
  }

  deleteEvent(eventId: number) {
    this.eventsList.pipe(
      take(1),
      map((items) => {
        return items.filter((contact) => {return contact.id !== eventId})}
      ),
      tap((filteredList) => {
        this.updateEventsList(filteredList);
      })
    ).subscribe();
  }

  private updateEventsList(eventsList: CalendarItemInterface[]): void {
    this.eventsList$.next(eventsList);
  }


}
