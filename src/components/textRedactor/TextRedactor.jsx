import './textRedactor.css'
import { useState } from 'react'

function TextRedactor() { 
  // const textValue = document.querySelector(".text").value

  const [text, setText] = useState("")
  const [size, setSize] = useState("")
  const [color, setColor] = useState("")
  const [updatedText, setUpdatedText] = useState({
    text,
    size,
    color
  })

 // https://www.npmjs.com/package/react-draggable

 const handleSubmitShowText = (e) => {
  e.preventDefault()
  setUpdatedText({
    text,
    size,
    color
  })
 }
  return (
    <>
    <div className="formContainer">
      <form action="" className="form" onSubmit={handleSubmitShowText}>
        <input type="text" className="text" onChange={(e) => setText(e.target.value)}/>
        <input type="text" className="size" onChange={(e) => setSize(e.target.value)}/>
        <select name="color" id="" className="option" onChange={(e) => setColor(e.target.value)}>
          <option value="black">black</option>
          <option value="red">red</option>
          <option value="green">green</option>
        </select>
        <button className="button">Save</button>
      </form>
      
      <h1 style={{fontSize: updatedText.size + "px", color: updatedText.color}}>{updatedText.text}</h1>
    </div>
    
      
    </>
  )
}

export default TextRedactor
