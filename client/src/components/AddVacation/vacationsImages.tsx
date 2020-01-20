import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import "./style.css"

export interface AddVacationProps {
    details: {
        mainImage: { url: string }
        image2: { url: string }
        image3: { url: string }
        image4: { url: string }
        image5: { url: string }
    }
    handleImagesChange: Function
}

export interface AddVacationState {

}

class vacationsImages extends React.Component<AddVacationProps, AddVacationState> {
    state = {
    }

    render() {
        const { mainImage, image2, image3, image4, image5 } = this.props.details
        return (<div className="order-div">
            <Typography variant="h6" gutterBottom>
                Add Images
      </Typography>
            <Grid container spacing={4}>
                <Grid item xs={11} style={{ marginLeft: "4%" }}>
                    <TextField required id="mainImage" value={mainImage.url} name="mainImage" label="Main Image" fullWidth onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleImagesChange(e)} />
                </Grid>
                <Grid item xs={11} style={{ marginLeft: "4%" }} >
                    <TextField required id="image2" value={image2.url} name="image2" label="Image 2" fullWidth onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleImagesChange(e)} />
                </Grid>
                <Grid item xs={11} style={{ marginLeft: "4%" }} >
                    <TextField required id="image3" value={image3.url} name="image3" label="Image 3" fullWidth onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleImagesChange(e)} />
                </Grid>
                <Grid item xs={11} style={{ marginLeft: "4%" }} >
                    <TextField required id="image4" value={image4.url} name="image4" label="Image 4" fullWidth onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleImagesChange(e)} />
                </Grid>
                <Grid item xs={11} style={{ marginLeft: "4%" }} >
                    <TextField required id="image5" value={image5.url} name="image5" label="Image 5" fullWidth onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.props.handleImagesChange(e)} />
                </Grid>
            </Grid>
        </div>);
    }
}

export default vacationsImages;