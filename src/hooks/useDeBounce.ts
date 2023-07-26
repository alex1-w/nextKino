import { useEffect, useState } from "react"

export const useDeBounce = (value: string, delay: number = 500): string => {
    const [deBounceValue, setDeBounceValue] = useState<string>(value)

    useEffect(() => {
        const handler = setTimeout(() => {
            setDeBounceValue(value)
        }, delay)
        return () => { clearTimeout(handler) }
    }, [value])
    
    return deBounceValue
}

// export const useDebounce = (value: string, delay: number) => {
//     const [debounceValue, setDebounceValue] = useState(value)
//     useEffect(() => {
//         const hadler = setTimeout(() => {
//             setDebounceValue(value)
//         }, delay)
//     })
// }
// useDeBounce('jkvbsdkjf')