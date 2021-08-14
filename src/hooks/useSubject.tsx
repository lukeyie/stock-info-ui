import { Dispatch, SetStateAction, useEffect } from "react";
import { BehaviorSubject, Subject } from "rxjs";


export function useSubject<T>(
    observable: BehaviorSubject<T> | Subject<T>,
    setter: Dispatch<SetStateAction<T>>
): [next: Function] {
    useEffect(() => {
        let subscription = observable.subscribe(result => setter(result))
        return () => { subscription.unsubscribe(); };
    }, [observable, setter])
    return [(nextValue: T) => observable.next(nextValue)]
}