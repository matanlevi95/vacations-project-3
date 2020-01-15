import React from "react"
import "./Style.css"
import SimpleImageSlider from "react-simple-image-slider";
import { connect } from "react-redux"
import { handleFollow } from "../../redux/actions"


export interface VacationPageProps {
    vacation: {
        id: number,
        description: String,
        destination: string,
        images: Array<any>,
        check_in: string,
        check_out: string,
        price: string,
        followers_count: number,
        is_following: any
    },
    actions: {
        handleFollow: Function
    }
}

export interface VacationPageState {

}

class VacationUserPage extends React.Component<VacationPageProps, VacationPageState> {
    state = {
        checked: false
    }

    componentDidMount() {
        const { is_following } = this.props.vacation
        this.setState({ checked: is_following })
    }

    handleFollow = (e: React.ChangeEvent<HTMLInputElement>) => {
        let { checked } = e.target
        const { id } = this.props.vacation
        if (!id) return
        const { handleFollow } = this.props.actions
        if (!checked) this.setState({ checked: !this.state.checked })
        else this.setState({ checked: !this.state.checked })
        handleFollow(id, checked)
    }

    render() {
        let { description, destination, images, check_in, check_out, price, followers_count, is_following } = this.props.vacation
        if (!is_following) is_following = false
        else is_following = true
        return (<div>
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
                        <input className="follow-box" type="checkbox" checked={this.state.checked} onChange={this.handleFollow} />
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

export default connect(null, mapDispatchToProps)(VacationUserPage);