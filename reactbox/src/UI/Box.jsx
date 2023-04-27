import { useState } from 'react'

export default function Box(Props){

    const [box, setBox] = useState(Props.on)

    /*function handleClick(){ <-OLD FUNCTION
        setBox(prevOn => !prevOn)
    }*/

    const styles = {
        backgroundColor: Props.on ? 'black' : 'white' //IF box == true (Props.on === true) then 'black', else, 'white'
    }

    return(
        <div className='Box' style={styles} onClick={Props.toggle}></div> //We can set style rules & we can set up onClick function (using Toggle from the parent component)
    )
}

//onClick={handleClick}