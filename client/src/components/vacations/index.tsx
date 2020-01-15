import React from "react";
import Axios from "axios";
import { connect } from "react-redux";
import VacationUserPage from "../vacationUserPage";
import VacationAdminPage from "../vacationAdminPage";
import Header from "../Header";
import { getVacations } from "../../redux/actions"
import { Redirect, Link } from "react-router-dom";
import "./style.css"

export interface VacationsPageProps {
    vacations: Array<Object>
    actions: {
        getVacations: Function
    }
    role: String,
    isAdmin: Boolean
}

export interface VacationsPageState {

}

class Vacations extends React.Component<VacationsPageProps, VacationsPageState> {
    state = {
        vacations: []
    }
    componentDidMount() {
        const { getVacations } = this.props.actions
        document.title = "Vacations"
        getVacations()
    }

    displayAddVacation = () => {
        const { role } = this.props
        if (role === "admin") {
            return (
                <button className="button btn btn-success"> <Link style={{ color: "white" }} to="/addVacation"> Add Vacations </Link></button>
            )
        }
    }

    render() {
        const { vacations, role } = this.props
        return (<div>
            <Header title="Vacations" />
            <div>
                {this.displayAddVacation()}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap" }} className="col-12">
                {vacations.map((vacation: any) => {
                    if (role === "admin") return <VacationAdminPage key={vacation.id} vacation={vacation} />
                    return <VacationUserPage key={vacation.id} vacation={vacation} />
                })
                }
            </div>
        </div>);
    }
}
const mapStateToProps = (state: any) => {
    let { vacations, loginDetails } = state
    const { role } = loginDetails
    vacations = Array.isArray(vacations) ? vacations : []
    return { vacations, role }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            getVacations: () => dispatch(getVacations())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vacations);