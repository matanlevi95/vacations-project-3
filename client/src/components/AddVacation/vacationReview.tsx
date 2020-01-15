import React from 'react';
import "./style.css"

export interface AddVacationProps {

}

export interface AddVacationState {

}

class vacationsReview extends React.Component<any, any> {
    state = {}
    render() {
        const { showVacationCard } = this.props
        return (<div className="order-div review-div">
            {showVacationCard()}
        </div>);
    }
}

export default vacationsReview;