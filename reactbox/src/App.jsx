import { useState } from 'react'
import Boxes from './UI/Boxes'
import Box from './UI/Box'
import './App.css'

function App() {
  const [box, setBox] = useState(Boxes)

  /*
  Really, really just a mess of a function
  function Toggle(id){
    setBox(prevBoxes => {
      const newBoxes = []
      for (let i=0;i<prevBoxes.length;i++){
        const thisBox = prevBoxes[i]
        if (thisBox.id === id) {
          const NewBox = {
            ...thisBox,
            on: !thisBox.on
          }
          newBoxes.push(NewBox)
        } else {
          newBoxes.push(thisBox)
        }
      }
      return newBoxes
    })
  }

  CONTINUE HERE: https://scrimba.com/learn/learnreact/conditional-rendering--co00d4a3c9a328b5ff96f418e
  */

  function Toggle(id){
    setBox(prevBoxes => { //setBox returns prevBoxes (set state function)
      return prevBoxes.map((box) => { //we return prevBoxes.map (we map it out) with 'box' obj
        return box.id === id ? {...box, on:!box.on} : box //If Box ID === id, we change the "on" of the old box to the exact opposite of itself, else, just return the box
      })
    })
  }

  const Elements = box.map(boxy => (
    <Box key={boxy.id} on={boxy.on} toggle={() => Toggle(boxy.id)}/> //We've set the key (needed, can be ID or any identifier), on (Boolean: true or false), id (box's id attribute) toggle (toggle function)
  ))

  return (
    <div className='Boxes'>
      {Elements}
    </div>
  )
}

export default App
