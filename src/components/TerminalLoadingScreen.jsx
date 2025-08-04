import { useEffect, useRef, useState } from "react";


function TerminalLoadingScreen({onAnimationFinish}){

    const machineName = "arijan@computer"
    const [cdCommad, setCdCommand] = useState('')
    const cdCommandIntervalRef = useRef(null);
    const cdCommandIndexRef = useRef(0)
    
    const openVSCodeCommandContainerRef = useRef(null);
    const vsCodeCommandIntervalRef = useRef(null);
    const [openVSCodeCommand, setOpenVSCodeCommand] = useState('')
    const openVSCodeCommandIndexRef = useRef(0);
    const commandCursorRef = useRef(null);

    

    useEffect(() => {

        const cdCommandText = "cd portfolio";
        const openVSCodeCommandText = "code ."

        const cdCommandFunction = () => {
                
            cdCommandIntervalRef.current = setInterval(() => {
            
                if(cdCommandIndexRef.current < cdCommandText.length)
                {
                    const nextChar = cdCommandText[cdCommandIndexRef.current];
                    setCdCommand((prev) => prev + nextChar)
                    cdCommandIndexRef.current += 1;
                }
                else
                {
                    clearInterval(cdCommandIntervalRef.current)
                    openVSCodeCommandContainerRef.current.style.visibility = "visible"
                    commandCursorRef.current.style.visibility = "hidden"
                    setTimeout(() => {
                        openVSCodeCommandFunction();
                    }, 200);
                }

            }, 150);
        }
        
        const openVSCodeCommandFunction = () => {
                
            vsCodeCommandIntervalRef.current = setInterval(() => {
            
                if(openVSCodeCommandIndexRef.current < openVSCodeCommandText.length)
                {
                    const nextChar = openVSCodeCommandText[openVSCodeCommandIndexRef.current];
                    setOpenVSCodeCommand((prev) => prev + nextChar)
                    openVSCodeCommandIndexRef.current += 1;
                }
                else
                {
                    clearInterval(vsCodeCommandIntervalRef.current)
                    setTimeout(() => {
                        onAnimationFinish(true)
                    }, 1000)
                    
                }

            }, 150);
        }


        setTimeout(() => {
            cdCommandFunction();
        }, 200)
        

        return () => {
            clearInterval(cdCommandIntervalRef.current);
            clearInterval(vsCodeCommandIntervalRef.current)
        }

    }, [])

    return (
        <div id="terminal-container">
            <div id="terminal-window">
                <div id="terminal-header">
                    <p id="terminal-title">{machineName} ~</p>
                </div>
                <div id="terminal-body">
                    <div className='terminal-commands'>
                        <p className="terminal-command-title">{machineName}</p>
                        <p className='terminal-pre-command'>~</p>
                        <p className='typed-command'>$ {cdCommad}</p>
                        <span ref={commandCursorRef} className="cursor">|</span>
                    </div>
                    <div className='terminal-commands' ref={openVSCodeCommandContainerRef} style={{visibility: 'hidden'}}>
                        <p className="terminal-command-title">{machineName}</p>
                        <p className='terminal-pre-command'>~/portfolio</p>
                        <p className='typed-command'>$ {openVSCodeCommand}</p>
                        <span className="cursor">|</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TerminalLoadingScreen;