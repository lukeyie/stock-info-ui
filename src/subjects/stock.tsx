import { BehaviorSubject } from "rxjs";
import { PERatiosResponse } from "../types/pe-ratio-info.types";

export const peRatiosResponseSubject = new BehaviorSubject<PERatiosResponse>(null as any);