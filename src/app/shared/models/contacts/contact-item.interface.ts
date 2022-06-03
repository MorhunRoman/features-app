import {MyTel} from "./phone-input";

export interface ContactItemInterface {
  id: number;
  phone: MyTel | null;
  formattedPhone?: string;
  name?: string;
  surname?: string;
}
