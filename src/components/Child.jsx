import { useState, useEffect } from "react"

export default function Child({getData}) {

    const [input, setInput] = useState('');
    
    useEffect(() => {
        getData(input)
    } ,[input])

    return (
        <>
            <div style={{border: '1px solid #CCC', padding : '1rem', margin: '1rem',  backgroundColor: '#FFF'}}>
                <h3>This is a Child component</h3>
                <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    style={{padding: '0.5rem'}}
                />
            </div>
            
        </>
    )
}