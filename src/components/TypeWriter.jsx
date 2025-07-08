import { useEffect, useRef, useState } from "react";

function TypeWriter({text, writingSpeed, deletingSpeed, haltSpeed}){

    if (typeof window !== 'undefined' && window.innerWidth <= 768) {
        return null; // TO DO: Make it into a hook
    }

    const [phrase, setPhrase] = useState('')
    const textIndexRef = useRef(0)
    const writerIntervalRef = useRef(null)
    const deleteIntervalRef = useRef(null)
    const haltTimeoutRef = useRef(null)
  
    useEffect(() => {

        const writeText = () => {
            writerIntervalRef.current = setInterval(() => {
                const index = textIndexRef.current;

                if(index < text.length){
                    setPhrase((prev) => prev + text[index])
                    textIndexRef.current += 1
                }
                else
                {
                    textIndexRef.current = text.length 
                    clearInterval(writerIntervalRef.current)

                    haltTimeoutRef.current = setTimeout(() => {
                        deleteText()
                    }, haltSpeed)
                }


            }, writingSpeed);
        }

        
        const deleteText = () => {
            deleteIntervalRef.current = setInterval(() => {

                const index = textIndexRef.current;

                if(index >= 0){
                    setPhrase((prev) => prev.substring(0, index))
                    textIndexRef.current -= 1;
                }else{
                    clearInterval(deleteIntervalRef.current)
                    textIndexRef.current = 0
                    writeText()
                }


            }, deletingSpeed)
        }

        writeText()

        return () => {
            clearInterval(writerIntervalRef.current)
            clearInterval(deleteIntervalRef.current)
            clearTimeout(haltTimeoutRef.current)
        }

    }, [text, writingSpeed, deletingSpeed, haltSpeed])




    return(
        <p className="typing-line favorite-qoute">
            <span id="typed-text">{phrase}</span><span className="cursor">|</span>
        </p>
    )
}

export default TypeWriter;