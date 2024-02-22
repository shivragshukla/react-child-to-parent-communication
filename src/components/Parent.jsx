import { useState } from 'react';
import Child from "./Child";

export default function Parent() {

    const [childText, setChildText] = useState('')

    function getData(params) {
        setChildText(params)
    }

    return (
        <>
            <div style={{border: '1px solid #CCC', padding : '1rem', margin: '1rem', backgroundColor: '#FAFAFA'}}>
                <h3>This is a Parent component</h3>
                <p>{ childText }</p>
                <Child getData={getData} />
            </div>
            
        </>
    )
}
