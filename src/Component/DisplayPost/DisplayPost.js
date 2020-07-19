import React from 'react'

const DisplayPost=(props)=>{
    const img= {
        position: "relative",
        border: "1px solid #ddd",
        borderradius: "4px",
        padding: "5px",
        width: "110px",
        height: "170px",
        display: "inline-block",
        marginleft: "auto",
        marginright: "auto",
        float: "left",
        alignitems: "center"
        
    }

   const blocktext= {
        marginleft: "auto",
        marginright: "100px"
    }

    

    const Post= {
        width: "800px",
        padding: "16px",
        textalign: "right",
        border: "1px solid #eee",
        boxshadow: "0 2px 3px #ccc",
        margin: "10px",
        boxsizing: "border-box",
        cursor: "pointer",
        float:"right"
    }
const block1 ={
    display: "block",
    width: "100%",
    border: "none",
    background: "#00BFFF",
    color: "white",
    padding: "14px 28px",
    fontsize: "16px",
    cursor: "pointer",
    textalign: "center"
  }

 
return(

    
    
        <div style={Post}>
            <img src={props.imp} style={img} alt="Movie images"></img>
           <h1 > {props.title}</h1> 
            <p >Genere:{props.genre }</p>
            <p >Director:{props.director}</p>
            <p >Starring:{props.stars }</p><br/>
            <p style={blocktext}>{props.views}views|Voted by {props.voting}</p>
            <button style={block1} >Watch trailer</button>
        </div>
)
} 
        
    


export default DisplayPost;