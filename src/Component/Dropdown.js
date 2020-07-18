import React,{Component} from 'react'

class Dropdown extends Component {
    state = {
      isOpen: false,
      shoMessage:false
    };
  
    toggleOpen = () => this.setState({ isOpen: !this.state.isOpen });

    showDetails=()=>{
    
        this.setState({showMessage: true})
        }
  
    render() {
      const menuClass = `dropdown-menu${this.state.isOpen ? " show" : ""}`;
      
      return (
        <div className="dropdown" onClick={this.toggleOpen}>
          <button
            className="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
          >
            Dropdown
          </button>
          <div className={menuClass} aria-labelledby="dropdownMenuButton" >

            <a className="dropdown-item" href="#company" onClick={this.showDetails}>
              Company
            </a>


          </div>
          {this.state.showMessage && <p style={{ color: "red" }}>Company: Geeksynergy Technologies Pvt Ltd
Address: Sanjayanagar, Bengaluru-56
Phone:XXXXXXXXX09 Email: XXXXXX@gmail.com</p>}

        </div>
      );
    }
  }
  
export default Dropdown;