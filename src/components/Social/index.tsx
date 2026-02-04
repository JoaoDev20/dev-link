import type { ReactNode } from "react";
import { Link } from "react-router-dom"

interface SocialProps {
  url: string;
  children: ReactNode;
}

export function Social({url, children}: SocialProps) {
    return (
        <>
        <a href={url} rel="noopener noreferrer" target="_blank">
        {children}
        </a>
            
        </>
    )
}
