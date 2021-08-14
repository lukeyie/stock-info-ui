import { PERatiosResponse } from "../types/pe-ratio-info.types";
import { get, HttpResponse } from "./apiHelper";

export async function getPERatios(ticker: string): Promise<PERatiosResponse> {
    let response: HttpResponse<PERatiosResponse> = await get(`pe-ratios/${ticker}`);
    return response.parsedBody!;
}