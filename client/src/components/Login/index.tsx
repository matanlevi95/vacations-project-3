import React, { HtmlHTMLAttributes, HTMLAttributes, InputHTMLAttributes } from 'react';
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
import { Link } from "react-router-dom"
import Header from "../Header"
import { login } from "../../redux/actions"
import { stateTypes } from "../../interfaces/index"
import "./Style.css"
import { Helmet } from 'react-helmet'

export interface LoginProps {
    actions: {
        login: Function,
    }
    history: Array<String>,
    redirect: boolean
}

export interface LoginState {

}


class Login extends React.Component<LoginProps, LoginState> {
    state = {
        email: "",
        password: ""
    }
    componentDidMount() {
        document.title = "Login"
    }

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { value, name } = e.target
        this.setState({ [name]: value })
    }
    handleLogin = async () => {
        const { login } = this.props.actions
        await login(this.state)
        this.props.history.push("/vacations")
    }

    render() {
        return (<div className="login-main-div">
            <Header title="Login" />
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div >
                    <Avatar>
                    </Avatar>
                    <form noValidate>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={this.state.email}
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            onChange={this.handleChange}

                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            value={this.state.password}
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={this.handleChange}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="button"
                            fullWidth
                            variant="contained"
                            color="primary"
                            onClick={this.handleLogin}
                        >
                            Sign In
          </Button>
                        <Grid container>
                            <Grid item>
                                <Link to="/register">
                                    Don't have an account? Sign Up
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                </Box>
            </Container>
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            login: (userDetails: object) => dispatch(login(userDetails))
        }
    }
}

export default connect(null, mapDispatchToProps)(Login);