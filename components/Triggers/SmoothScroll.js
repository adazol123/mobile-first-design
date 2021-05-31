import { useEffect, useRef, useState } from 'react'


export function useScroll(options) {
    const observer = useRef(new IntersectionObserver((entries) => {
        const first = entries[0];
        console.log(first)
    }, { threshold: 1}))

    const [ element, setElement] = useState(null)

    useEffect(() => {
        const currentElement = element
        const currentObserver = observer.current
        if(currentElement) {
            currentObserver.observe(currentElement)
        }
        return () => {
             if(currentElement) {
                 currentObserver.unobserve(currentElement)
             }
        };
    }, [element]);
    return element
}