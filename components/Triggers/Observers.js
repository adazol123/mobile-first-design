import { useEffect, useRef, useState } from 'react'


export function useOnScreen(options) {
    const [ref,setRef ]= useState(null)
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setVisible(entry.isIntersecting)
            console.log(entry.isIntersecting)
        }, options)

        if(ref) {
            observer.observe(ref)
        }
        return () => {
            if(ref) {
                observer.unobserve(ref)
            }
        };
    }, [ref]);

    return [setRef, visible]
}