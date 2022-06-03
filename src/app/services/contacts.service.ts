import {Injectable} from "@angular/core";
import {ContactItemInterface} from "../shared/models/contacts/contact-item.interface";
import {BehaviorSubject, Observable} from "rxjs";
import {map, take, tap} from "rxjs/operators";
import {generateId} from "../shared/helpers/generate-id.helper";

const DEFAULT_CONTACTS: ContactItemInterface[] = [
  {
    id: 1,
    phone: null,
    formattedPhone: '1111111111',
    name: 'Name',
    surname: 'Surname'
  },
  {
    id: 2,
    phone: null,
    formattedPhone: '2222222222',
    name: 'Name',
    surname: 'Surname'
  },
  {
    id: 3,
    phone: null,
    formattedPhone: '3333333333',
    name: 'Name',
    surname: 'Surname'
  },
  {
    id: 4,
    phone: null,
    formattedPhone: '44444444444',
    name: 'Name',
    surname: 'Surname'
  },
]


@Injectable({
  providedIn: "root"
})
export class ContactsService {

  private contactsList$: BehaviorSubject<ContactItemInterface[]> = new BehaviorSubject<ContactItemInterface[]>(DEFAULT_CONTACTS);

  constructor() {
  }

  get contactsList(): Observable<ContactItemInterface[]> {
    return this.contactsList$.asObservable();
  }

  createContact(contact: ContactItemInterface) {
    this.contactsList.pipe(
      take(1),
      tap((contacts: ContactItemInterface[]) => {
        contact.id = generateId();
        contact.formattedPhone = `${contact.phone.area}${contact.phone.exchange}${contact.phone.subscriber}`
        contacts.push(contact);
        this.updateContactsList(contacts);
      })
    ).subscribe();
  }

  deleteContact(contactId: number) {
    this.contactsList.pipe(
      take(1),
      map((items) => {
        return items.filter((contact) => {return contact.id !== contactId})}
      ),
      tap((filteredList) => {
        this.updateContactsList(filteredList);
      })
    ).subscribe();
  }

  updateContactsList(contactsList: ContactItemInterface[]): void {
    this.contactsList$.next(contactsList);
  }

}
