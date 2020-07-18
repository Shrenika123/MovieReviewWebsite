import React, { Component } from 'react';
import {Link} from 'react-router-dom'

 class Register extends Component {

    userData;

    constructor(props) {
        super(props);

     

        this.state = {
            email: '',
            password:'',
            phone:''
        }
    }

    // Form Events
  

    onChangeEmail=(e)=> {
        this.setState({ email: e.target.value })
    }

    onChangePhone=(e)=> {
        this.setState({ phone: e.target.value })
    }

    onChangePassword=(e)=> {
        this.setState({ password: e.target.value })
    }

    onSubmit=(e)=> {
        e.preventDefault()

        localStorage.setItem('user',JSON.stringify(this.state))
    }

    // React Life Cycle
    componentDidMount() {
        this.userData = JSON.parse(localStorage.getItem('user'));

        if (localStorage.getItem('user')) {
            this.setState({
                
                email: this.userData.email,
                phone: this.userData.phone,
                password: this.userData.password
            })
        } else {
            this.setState({
                email: '',
                phone: '',
                password: '',

            })
        }
    }

   

    render() {
        console.log(this.state)
        return (
            <div className="container">
                <form onSubmit={(e)=>this.onSubmit(e)}>
                    
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" value={this.state.email} onChange={(event)=>this.onChangeEmail(event)} />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input type="password" className="form-control" value={this.state.password} onChange={(event)=>this.onChangePassword(event)} />
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="tel" className="form-control" value={this.state.phone} onChange={(event)=>this.onChangePhone(event)} />
                    </div>
                    <button type="submit" className="btn btn-primary bte-block" >Register</button> 
                    <Link to="/" className="btn btn-link">login</Link>
                </form>
               
            </div>
        )
    }
}

export default Register