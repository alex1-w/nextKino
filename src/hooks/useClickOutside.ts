import { RefObject, useEffect } from "react";

export const useOnClickOutside = <T extends HTMLElement = HTMLElement>
    (ref: RefObject<T>, handler: (event: MouseEvent | TouchEvent) => void) => {
    useEffect(() => {
        const listener = (event: MouseEvent | TouchEvent) => {
            !ref?.current?.contains(event.target as Node) && handler(event);
        }
        document.addEventListener('mousedown', listener);
        document.addEventListener('touchstart', listener);
        return () => {
            document.removeEventListener('mousedown', listener);
            document.removeEventListener('touchstart', listener);
        };
    }, [ref, handler]);
}