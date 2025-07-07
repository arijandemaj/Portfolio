import { useState } from "react"

function IconToggle({imgSrc, toggleImgSrc, altText}){

    const [hovered, setHovered] = useState(false)

    return (
        <img 
            src={hovered ? toggleImgSrc : imgSrc}
            alt={altText}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        />
    )
}

export default IconToggle