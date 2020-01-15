import * as React from 'react';
import { Component } from 'react';
import { Link, Redirect } from "react-router-dom"
import { connect } from "react-redux"
import { AppLinks } from '../../appRouter/appRouter';
import { routes } from '../../appRouter/router.config';
import { logout } from '../../redux/actions';
import { stateTypes } from "../../interfaces/index"
import "./style.css"



class Navbar extends Component<any, any> {
    state = {
        inputField: "",
        isVerify: false
    }

    render() {
        const { name } = this.props
        const token = localStorage.getItem("token") || ""
        let route = this.checkIfLogin(token)
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-primary bg-primary">
                    <a className="navbar-brand"><img height="40px" src="https://www.freepngimg.com/thumb/vacation/6-2-vacation-free-download-png.png" alt="" /></a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li><button className="btn btn-primary">lala</button></li>
                            <AppLinks routes={routes} />

                        </ul>
                        <span className="user-span">{name}</span>
                        {route}
                    </div>
                </nav>
            </div>);
    }
    checkIfLogin = (token: String) => {
        if (token) {
            return (
                <button type="submit" className="btn btn-primary" key="Logout" onClick={() => {
                    this.props.actions.logout()
                }}><Link style={{ color: "white" }} to="login"> Logout </Link></button>
            )
        }
        else {
            return (
                <button type="submit" className="btn btn-primary" key="Login">< Link style={{ color: "white" }} to="/login">Login </Link> </button>
            )
        }
    }
}


const mapStateToProps = (state: stateTypes) => {
    let { name } = state.loginDetails
    name = name ? `Hello ${name}` : ""
    return { name }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            logout: () => dispatch(logout())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Navbar)