import React from 'react';
import "./style.css"

export interface AddVacationProps {
    showVacationCard: Function
}

export interface AddVacationState {

}

class vacationsReview extends React.Component<AddVacationProps, AddVacationState> {
    state = {}
    render() {
        const { showVacationCard } = this.props
        return (<div className="order-div review-div">
            {showVacationCard()}
        </div>);
    }
}

export default vacationsReview;