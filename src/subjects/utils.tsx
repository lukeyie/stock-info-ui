import { BehaviorSubject } from "rxjs";

export const errorMessage = new BehaviorSubject<string>("");

export const errorCode = new BehaviorSubject<Array<string>>([]);