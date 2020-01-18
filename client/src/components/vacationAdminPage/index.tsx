import React from "react"
import "./Style.css"
import SimpleImageSlider from "react-simple-image-slider";
import { connect } from "react-redux"
import { handleFollow } from "../../redux/actions"
import DeleteModal from "../Modal/delete"
import { vacationTypes } from "../../interfaces/index"


export interface VacationPageProps {
    vacation: vacationTypes
    actions: {
        handleFollow: Function
    }
    edit: any
}

export interface VacationPageState {

}

class VacationAdminPage extends React.Component<VacationPageProps, VacationPageState> {
    state = {
        showDeleteWindow: false
    }

    closeModal = () => {
        this.setState({ showDeleteWindow: false })
    }

    render() {
        let { showDeleteWindow } = this.state
        let { id, description, destination, images, check_in, check_out, price, followers_count } = this.props.vacation
        return (<div>
            <DeleteModal show={showDeleteWindow} closeModal={this.closeModal} name={destination} vacationId={id} />
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
                        <button className="edit-button btn btn-primary" onClick={() => {
                            this.props.edit(this.props.vacation)
                        }}
                        >✏️</button>
                        <button className="delete-button btn btn-danger" onClick={() => {
                            this.setState({ showDeleteWindow: true })
                        }}>🗑</button>
                        <button className="order-button btn btn-success">Order {price}$</button>
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