import React from 'react';
import { connect } from "react-redux"
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import Header from "../Header"
import { register } from "../../redux/actions"
import { Redirect } from 'react-router-dom';
import {stateTypes} from "../../interfaces/index"
import "./Style.css"

export interface RegisterProps {
    actions: {
        register: Function
    }
    redirect: boolean
}

export interface RegisterState {

}

class Register extends React.Component<RegisterProps, RegisterState> {
    state = {
        email: "",
        password: "",
        firstName: "",
        lastName: ""
    }

    componentDidMount(){
        document.title="Register"
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.currentTarget
        this.setState({ [name]: value })
    }
    handleRegister = () => {
        console.log("register");
        
        const { register } = this.props.actions
        register(this.state)
    }

    render() {
        const { redirect } = this.props
        if (redirect) {
            return (
                <Redirect to="/login" />
            )
        }
        return (<div className="register-main-div">
            <Header title="Register" />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div>
                    <Avatar>
                    </Avatar>
                    <form noValidate>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    autoComplete="fname"
                                    name="firstName"
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="lname"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="current-password"
                                    onChange={this.handleChange}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                                    label="I want to receive inspiration, marketing promotions and updates via email."
                                />
                            </Grid>
                        </Grid>
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleRegister}
                        >
                            Sign Up
                        </Button>
                    </form>
                </div>
                <Box mt={5}>
                </Box>
            </Container>
        </div>);
    }
}
const mapStateToProps = (state: stateTypes) => {
    const { redirect } = state.registerDetails
    return { redirect }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            register: (userDetails: object) => dispatch(register(userDetails))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);