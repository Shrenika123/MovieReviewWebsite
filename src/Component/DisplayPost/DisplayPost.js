import React from 'react'

const DisplayPost=(props)=>{
    const img= {
        position: "relative",
        border: "1px solid #ddd",
        borderradius: "4px",
        padding: "5px",
        width: "150px",
        height: "250px",
        display: "inline-block",
        marginleft: "auto",
        marginright: "auto",
        float: "left",
        alignitems: "center"
        
    }

    const img2={
        position: "relative",
        border: "1px solid #ddd",
        borderradius: "4px",
        padding: "5px",
        width: "20px",
        height: "20px",
        display: "inline-block",
        marginleft: "auto",
        marginright: "auto",
        align:"centre",
        top:"-45px",
        float: "left"
    }


    const img3={
        position: "relative",
        border: "1px solid #ddd",
        borderradius: "4px",
        padding: "5px",
        width: "20px",
        height: "20px",
        display: "inline-block",
        marginleft: "auto",
        marginright: "auto",
        align:"centre",
        float: "left",
        top:"5px",
        right:"20px"
    }


   const blocktext= {
        marginleft: "auto",
        marginright: "100px",
        color:"blue"
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
        float:"right",
        boxShadow: "5px 8px 8px #888888"
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

  const block2 ={
    display: "block",
    width: "3%",
    border: "none",
    background: "#FFFFFF",
    color: "black",
    padding: "3px 3px",
    fontsize: "2px",
    cursor: "pointer",
    textalign: "center",
  }

 



return(

    
    
        <div style={Post}>
                         <button style={block2} >{props.voting}</button>

            <img src="https://cdn0.iconfinder.com/data/icons/arrows-2-10/128/Button-Top-Up-Upload-Above-Command-Triangle-512.png" alt= "" style={img2}></img>
            <img src="https://i7.pngguru.com/preview/680/950/331/arrow-drop-down-list-button-computer-icons-down-arrow.jpg"  alt="" style={img3} ></img>
            <img src={props.imp} style={img} alt="Movie images"></img>
            
           <h1 > {props.title}</h1> 
            <p >Genere:{props.genre }</p>
            <p >Director:{props.director}</p>
            <p >Starring:{props.stars }</p>
            <p>{props.runtime || "Unknown"}|{props.language}</p>
        
            <p style={blocktext}>{props.views} views|Voted by {props.voting} People</p>
            <button style={block1} >Watch trailer</button>
            
        </div>
)
} 
        
    


export default DisplayPost;