import React from "react"
import "./Style.css"
import SimpleImageSlider from "react-simple-image-slider";
import { connect } from "react-redux"
import { handleFollow } from "../../redux/actions"
import Modal from "../Modal"
import { vacationTypes } from "../../interfaces/index"


export interface VacationPageProps {
    vacation: vacationTypes
    actions: {
        handleFollow: Function
    }
}

export interface VacationPageState {

}

class VacationAdminPage extends React.Component<VacationPageProps, VacationPageState> {
    state = {
        show: false
    }
    handleEdit = () => {
        console.log("edit");
    }

    closeModal = () => {
        this.setState({ show: false })
    }

    handleDelete = () => {
        console.log("delete");
    }

    render() {
        let { show } = this.state
        let { description, destination, images, check_in, check_out, price, followers_count } = this.props.vacation
        return (<div>
            <Modal show={show} closeModal={this.closeModal} />
            <div className="vacation-main-div card">
                <SimpleImageSlider
                    width={350}
                    height={200}
                    images={images}
                />
                <div className="description-div card-body">
                    <h5 className="card-title">{destination}</h5>
                    <p className="card-text">{description}</p>
                    <span>{check_in} - {check_out}</span>
                </div>
                <div>
                    <div className="follow-div">
                        <label>{followers_count}</label>
                        <button className="btn btn-primary" onClick={() => {
                            this.setState({ show: true })
                        }}
                        >✏️</button>
                        <button className="btn btn-danger" onClick={() => {
                            this.setState({ show: true })
                        }}>🗑</button>
                        <button className="btn btn-success">Order {price}$</button>
                    </div>
                </div>
            </div>
        </div>);
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        actions: {
            handleFollow: (vacationId: number, checked: boolean) => dispatch(handleFollow(vacationId, checked))
        }
    }
}

export default connect(null, mapDispatchToProps)(VacationAdminPage);