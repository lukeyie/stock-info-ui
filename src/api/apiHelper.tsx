import { errorCode, errorMessage } from "../subjects/utils";

export interface HttpResponse<T> extends Response {
    parsedBody?: T;
}

interface ErrorResponse {
    error: string,
    errors: string[]
}

export async function http<T>(
    request: RequestInfo
): Promise<HttpResponse<T>> {
    const response: HttpResponse<T> = await fetch(request);
    const res: T | ErrorResponse = await response.json();
    if (!response.ok) {
        console.log(response.statusText);
        // const { error, errors } = res as ErrorResponse;
        // errorMessage.next(error);

        // if (errors)
        //     errorCode.next(errors);

        // throw new Error(error)
        throw new Error("Something Wrong")
    }

    response.parsedBody = res as T
    return response
}

export async function get<T>(
    path: string,
    args: RequestInit = {
        method: "GET",
        headers: { "Content-Type": "application/json" }
    }
): Promise<HttpResponse<T>> {
    return http<T>(new Request(path, args));
};