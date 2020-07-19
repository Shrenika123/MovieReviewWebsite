import React,{Component} from 'react'


class Dropdown extends Component{
  state={
    details:false
  }
  showDetails=()=>{
    
         this.setState({details: !this.state.details})
       }


  render(){
    const block1 ={
      display: "block",
      width: "50%",
      border: "none",
      background: "#000080",
      color: "white",
      padding: "14px 28px",
      fontsize: "16px",
      cursor: "pointer",
      textalign: "center"
    }
    return(
      <div>
      <div>
        <button onClick={this.showDetails} style={block1}>Company Info</button>
      </div>

      <div>
        {this.state.details && <p style={{ color: "red" }}>Company: Geeksynergy Technologies Pvt Ltd
 Address: Sanjayanagar, Bengaluru-56
 Phone:XXXXXXXXX09 Email: XXXXXX@gmail.com</p>}
      </div>
      </div>
    )
  }

}
  
export default Dropdown;

