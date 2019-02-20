//template for the data we will recieve from the navigation table

import { Time } from "@angular/common";

export interface Beacon{
    ID : Number;
    Time : Time;
    Date : Date;
    beacon : String;
    Department : String;
}