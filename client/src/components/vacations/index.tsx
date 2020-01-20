import React from "react";
import { connect } from "react-redux";
import VacationUserPage from "../vacationUserPage";
import VacationAdminPage from "../vacationAdminPage";
import Header from "../Header";
import { getVacations } from "../../redux/actions"
import { Redirect, Link } from "react-router-dom";
import "./style.css"
import { vacationTypes } from "../../interfaces"

export interface VacationsPageProps {
    vacations: Array<vacationTypes>
    actions: {
        getVacations: Function
    }
    role: String,
    isAdmin: Boolean
    history: Array<Object>
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

    handleEdit = (vacationDetails: vacationTypes) => {
        this.props.history.push({
            pathname: '/addVacation',
            state: { vacationDetails }
        })
    }

    render() {
        const { vacations, role } = this.props
        return (<div>
            <Header title="Vacations" />
            <div style={{ display: "flex", flexWrap: "wrap" }} className="col-12">
                {vacations.map((vacation: any) => {
                    if (role === "admin") return <VacationAdminPage edit={this.handleEdit} key={vacation.id} vacation={vacation} />
                    else return <VacationUserPage key={vacation.id} vacation={vacation} />
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