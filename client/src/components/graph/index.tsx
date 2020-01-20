import React from 'react';
import { Bar } from 'react-chartjs-2';
import "./style.css"
import { connect } from "react-redux"
import { stateTypes, vacationTypes } from 'interfaces';
import { getVacations } from 'redux/actions';
import Header from 'components/Header';



interface propsTypes {
    actions: {
        getVacations: Function
    }
    vacations: Array<vacationTypes>
}
interface stateType {
    labels: Array<string>
    datasets: Array<object>
}


class Graph extends React.Component<propsTypes, stateType> {

    state = {
        labels: [],
        datasets: [
            {
                label: 'Followers',
                backgroundColor: 'rgb(58, 37, 245)',
                borderColor: 'rgb(83, 65, 245)',
                borderWidth: 1,
                hoverBackgroundColor: 'rgb(113, 99, 243)',
                hoverBorderColor: 'rgba(255,99,132,1)',
                data: []
            }
        ]
    }
    componentDidMount() {
        this.props.actions.getVacations()
    }

    handleGraphDetails = () => {
        const { vacations } = this.props
        const { datasets } = this.state
        const labels: Array<string> = []
        const newData: any = []
        vacations.map((vacation: vacationTypes) => {
            const { destination, followers_count } = vacation
            labels.push(destination)
            newData.push(followers_count)
        })
        datasets[0].data = newData
        this.setState({ labels, datasets })
    }

    render() {
        const { labels } = this.state
        const { vacations } = this.props
        if (!vacations.length) return (<h1>loading</h1>)
        if (!labels.length) {
            this.handleGraphDetails()
        }
        return (
            <div className="graph-div">
                <Header title="Graph" />
                <Bar
                    data={this.state}
                    width={500}
                    height={450}
                    options={{
                        maintainAspectRatio: false,
                        scales: {
                            yAxes: [{
                                ticks: {
                                    beginAtZero: true,
                                    min: 0,
                                    max: 10
                                }
                            }],
                            
                        }
                    }}
                />
            </div>
        );
    }
};

const mapStateToProps = (state: stateTypes) => {
    const { vacations } = state
    return { vacations }
}
const mapDispatchToprops = (dispatch: Function) => {
    return {
        actions: {
            getVacations: () => dispatch(getVacations())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToprops)(Graph)