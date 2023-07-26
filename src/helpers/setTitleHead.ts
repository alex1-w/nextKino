'use client'
import { useEffect } from "react"
export const SetTitleHead = (name: string) => {
    useEffect(() => { document.title = name }, [])
}
