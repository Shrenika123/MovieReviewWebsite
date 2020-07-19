import React, { Component } from 'react';
import {Link} from 'react-router-dom'



 class Register extends Component {

    userData;

    constructor(props) {
        super(props);

     

        this.state = {
            name:'',
            email: '',
            password:'',
            phone:'',
            value:'None'
        }
    }

    // Form Events

    validate = values => {

        if (values) {
            return true
        }
        
        if (values) {
            return true
        }
        if(values)
        {
            return true
        }
        return false
      }
  
    onChangeName=(e)=> {
        this.setState({ name: e.target.value })
        

    }

    onChangeEmail=(e)=> {
        this.setState({ email: e.target.value })
       
    }

    onChangePhone=(e)=> {
        this.setState({ phone: e.target.value })
    }

    onChangePassword=(e)=> {
        this.setState({ password: e.target.value })
        
    }

    onChangeProfession=(e)=>{
        
        this.setState({value:e.target.value})
       
    }

    onSubmit=(e)=> {
        e.preventDefault()
        let a=this.validate(this.state.name)
        let b=this.validate(this.state.email)
        let c=this.validate(this.state.password)
        console.log(a)

        if(a && b && c){
        localStorage.setItem('user',JSON.stringify(this.state))
        window.alert("You have successfully registeted")
        }
        else{
        window.alert("You have filled the mandatory fiels or not entered a valid email_id")
        }
    }

    
  
   

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <form onSubmit={(e)=>this.onSubmit(e)}>
                <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Mandatory" value={this.state.name} onChange={(event)=>this.onChangeName(event)} />
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" placeholder="Mandatory" value={this.state.email} onChange={(event)=>this.onChangeEmail(event)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" placeholder="Mandatory" value={this.state.password} onChange={(event)=>this.onChangePassword(event)} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={(event)=>this.onChangePhone(event)} />
                    </div>
                    <div className="form-group">
                    <label >Profession</label><br/>
                    <select value={this.state.value} onChange={(event)=>this.onChangeProfession(event)}>
                    <option type="text" value="Doctor" className="form-control" >Doctor</option>
                     <option type="text" value="Film Artish" className="form-control">Film Artish</option>
                    <option type="text" value="Engineer" className="form-control">Engineer</option>
                    <option type="text" value="Student" className="form-control">Student</option>
                    <option type="text" value="None" className="form-control">None</option>
                    </select>
                    </div> 
                    <button type="submit" className="btn btn-primary bte-block" >Register</button> 
                    <Link to="/" className="btn btn-link">login</Link>
                </form>
               
            </div>
        )
    }
}


export default Register;