import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, settext] = useState('');

    const handleChange = (event) => {
        settext(event.target.value);
    }

    const uppercasee = () => {
        settext(text.toUpperCase())
    }
    const lowercase = () => {
        settext(text.toLowerCase())
    }
    const clear = () => {
        const clearing =""
        settext(clearing)
    }

    const [mode, setmode] = useState("enable light mode");

    const [mystyle, setmystyle] = useState({
        color:'white',
        backgroundColor:"black"
    })
    

    const mystylie = () => {
        if (mode === "enable light mode") {
            setmystyle({
                color: 'black',
                backgroundColor: "white"
            });
            setmode("enable dark mode");
        } else {
            setmystyle({
                color: 'white',
                backgroundColor: "black"
            });
            setmode("enable light mode");
        }
    }
    

 return (
        <> <div style={mystyle} className="container">
            <div>
                <br />
                <h1>{props.heading}</h1>
                <div className='mb-3'>
                    <textarea onChange={handleChange} value={text} className="form-control" id="myBox" cols="30" rows="8"></textarea>
                    <button className='btn btn-primary my-3' onClick={uppercasee}  > convert to uppercase</button>
                    <button className='btn btn-primary mx-3' onClick={lowercase}  > convert to lowercase</button>
                    <button className='btn btn-primary mx-2' onClick={clear}  > clear text</button>
                    <button className='btn btn-primary mx-3' onClick={mystylie}  >{mode}</button>
                </div>
            </div>

            <div className="container">
                <h3>Your text summary is </h3>
                <p>total words is = {text.split(" ").length} and total characters is ={text.length}</p>
                {/* calculating time required to read the article  */}
                <p>{0.008*text.split(" ").length} minutes of read</p>
                  <h4>preview</h4>
                  <p>{text.length>0 ? text:"insert something to preview"}</p>
                
            </div>
            </div>
        </>
    )
}


