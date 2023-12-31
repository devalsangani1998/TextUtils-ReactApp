// import React, { useState } from 'react'


export default function About(props) {


    // const [myStyle, setMyStyle] = useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })

    let myStyle = {
        color: props.mode === 'warning' ? 'white' : 'black',
        backgroundColor: props.mode === 'warning' ? '#042743' : 'white',
        border: '1px solid',
        // borderColor:  props.mode === 'warning' ? 'white' : '#5a5757'
    }

    // const [btnText, setBtnText] = useState('Enable Dark Mode')

    // const toggleStyle = () => {
    //     if (myStyle.color === 'black') {
    //         setMyStyle({
    //             color: 'white',
    //             backgroundColor: 'black',
    //             border: '1px solid white'
    //         })
    //         setBtnText('Enable Light Mode')
    //     }

    //     else {

    //         setMyStyle({
    //             color: 'black',
    //             backgroundColor: 'white'
    //         })
    //         setBtnText('Enable Dark Mode')
    //     }
    // }
    
    

    return (
        <div className='container'>
            <h1 style={{color: props.mode === 'warning' ? 'white' : 'black',}}>About Us</h1>
            <div className="accordion accordion-flush" id="accordionFlushExample" style={{color: props.mode === 'warning' ? 'black' : 'white',}}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingOne">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                          <strong>Analyze Your text</strong> 
                        </button>
                    </h2>
                    <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                          Textutils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingTwo">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                           <strong>Free to use</strong> 
                        </button>
                    </h2>
                    <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                         Textutils is a free character counter tool that provides instant character count & word count statistics for a given text. Textutils reports the number of words and characters.Thus it is suitable for writing text with word/character limit.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="flush-headingThree">
                        <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                            <strong>Browser Compatible</strong> 
                        </button>
                    </h2>
                    <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                        <div className="accordion-body" style={myStyle}>
                          This word counter software works in any web browsers such as Chrome, Firebox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, pdf documents, essays etc. 
                             </div>
                    </div>
                </div>
            </div>
            {/* <div className="contaoner my-3">
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{btnText}</button>
            </div> */}
        </div>
    )
}
