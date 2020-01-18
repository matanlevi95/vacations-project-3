import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import "./style.css"
import { vacationTypes } from 'interfaces';

export interface AddVacationProps {
    details: {
        destination: string
        description: string
        check_in: string
        check_out: string
        price: string
    }
    handleDetailsChange: Function
}

export interface AddVacationState {

}

class vacationsDetails extends React.Component<AddVacationProps, AddVacationState> {

    render() {
        const { destination, price, check_in, check_out, description } = this.props.details
        return (<div className="order-div">
            <Typography variant="h6" gutterBottom>
                Add Vacation Details
            </Typography>
            <Grid container spacing={10}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        style={{ marginLeft: "10%" }}
                        required
                        id="destination"
                        name="destination"
                        value={destination}
                        fullWidth
                        label="Destination"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleDetailsChange(e)}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="price"
                        name="price"
                        label="Price (in dollars)"
                        fullWidth
                        value={price}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleDetailsChange(e)}

                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        style={{ marginLeft: "10%" }}
                        id="checkIn"
                        name="check_in"
                        fullWidth
                        label="Check In"
                        type="date"
                        value={check_in}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleDetailsChange(e)}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="checkOut"
                        name="check_out"
                        fullWidth
                        label="Check Out"
                        type="date"
                        value={check_out}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleDetailsChange(e)}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                        required
                        id="description"
                        name="description"
                        label="Description"
                        style={{ marginLeft: "10%" }}
                        fullWidth
                        rows="6"
                        multiline={true}
                        value={description}
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleDetailsChange(e)}
                    />
                </Grid>

            </Grid>
        </div>);
    }
}

export default vacationsDetails;