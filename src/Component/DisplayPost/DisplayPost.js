import React from 'react'
import disp from './DisplayPost.css'

const DisplayPost=(props)=>{

return(

        <div >
            <p >{props.genre }</p>
            <button className={disp.button}>Watch trailer</button>
        </div>
)
} 
        
    


export default DisplayPost;