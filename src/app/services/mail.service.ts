import {BehaviorSubject, Observable} from "rxjs";
import {Injectable} from "@angular/core";
import {MailItemInterface} from "../shared/models/mails/mail-item.interface";
import {map, take, tap} from "rxjs/operators";
import {generateId} from "../shared/helpers/generate-id.helper";


const DEFAULT_MAILS: MailItemInterface[] = [
  {
    id: 1,
    subject: 'Mocked email subject',
    from: 'test@gmail.com',
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae vel beatae natus eveniet ratione temporibus aperiam harum alias officiis assumenda officia quibusdam deleniti eos cupiditate dolore doloribus!"
  },
  {
    id: 2,
    from: 'test@gmail.com',
    text: "Ad dolore dignissimos asperiores dicta facere optio quod commodi nam tempore recusandae. Rerum sed nulla eum vero expedita ex delectus voluptates rem at neque quos facere sequi unde optio aliquam!"
  },
  {
    id: 3,
    from: 'test@gmail.com',
    subject: 'Invitation is waiting for you',
    text: "Tenetur quod quidem in voluptatem corporis dolorum dicta sit pariatur porro quaerat autem ipsam odit quam beatae tempora quibusdam illum! Modi velit odio nam nulla unde amet odit pariatur at!"
  },
]

@Injectable({
  providedIn: "root"
})
export class MailService {

  private mailsListSubject$: BehaviorSubject<MailItemInterface[]> = new BehaviorSubject<MailItemInterface[]>(DEFAULT_MAILS);

  constructor() {
  }

  get mailsList(): Observable<MailItemInterface[]> {
    return this.mailsListSubject$.asObservable();
  }

  public createEmail(newMail: MailItemInterface): void {
    this.mailsList.pipe(
      take(1),
      tap((mails: MailItemInterface[]) => {
        newMail.id = generateId();
        mails.push(newMail);
        this.updateMailsList(mails);
      })
    ).subscribe();
  }

  public deleteMail(mailId: number): void {
    this.mailsList.pipe(
      take(1),
      map((items) => {
        return items.filter((mail) => {return mail.id !== mailId})}
        ),
      tap((filteredList) => {
        this.updateMailsList(filteredList);
      })
    ).subscribe();
  }

  private updateMailsList(mailsList: MailItemInterface[]): void {
    this.mailsListSubject$.next(mailsList);
  }

}
