import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Paper from '@material-ui/core/Paper';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import VacationDetails from './vacationDetails';
import VacationImages from './vacationsImages';
import VacationReview from './vacationReview';
import VacationPage from "../vacationUserPage"
import { connect } from "react-redux"
import { addVacation } from "../../redux/actions"
import moment from "moment"
import { Link } from 'react-router-dom';

const initialState = {
  activeStep: 0,
  destination: "",
  price: "",
  check_in: "",
  check_out: "",
  description: "",
  mainImage: { url: "" },
  image2: { url: "" },
  image3: { url: "" },
  image4: { url: "" },
  image5: { url: "" },
}

class Checkout extends React.Component<any, any>{
  state = initialState


  handleDates = () => {
    document.title = "Add Vacation"
    const currentDate = moment().format("YYYY-MM-DD")
    this.setState({ check_in: currentDate, check_out: currentDate })
  }

  handleNext = () => {
    const { description, destination, check_in, check_out, price, mainImage, image2, image3, image4, image5, activeStep } = this.state
    const currentStep = activeStep + 1
    if (currentStep === 3) {
      let imagesArray = [mainImage, image2, image3, image4, image5].filter((image: any) => {
        if (image.url !== "") return image
      }).map((image: any) => image.url)
      this.props.actions.AddVacation({ description, destination, check_in, check_out, price, imagesArray })
    }

    this.setState({ activeStep: currentStep, IfError: true });
  };

  handleBack = () => {
    const currentStep = this.state.activeStep - 1
    this.setState({ activeStep: currentStep, IfError: false });
  };

  handleDetailsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    this.setState({ [name]: value })
  }

  handleImagesChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target
    this.setState({ [name]: { name: name, url: value } })

  }

  showVacationCard = () => {
    const { description, destination, check_in, check_out, price, mainImage, image2, image3, image4, image5, activeStep } = this.state
    let images = [mainImage, image2, image3, image4, image5].filter((image: any) => image.url !== "")
    const vacation = { description, destination, check_in, check_out, price, images, is_following: false, followers_count: 0, id: 0 }
    return <VacationPage vacation={vacation} />
  }


  getStepContent = (step: number) => {
    switch (step) {
      case 0:
        return <VacationDetails handleDetailsChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleDetailsChange(e)} details={this.state} />;
      case 1:
        return <VacationImages handleImagesChange={(e: React.ChangeEvent<HTMLInputElement>) => this.handleImagesChange(e)} details={this.state} />;
      case 2:
        return <VacationReview showVacationCard={() => this.showVacationCard()} />;
      default:
        throw new Error('Unknown step');
    }
  }

  checkIfErrorWithTheFields = () => {
    const { description, destination, check_in, check_out, price, mainImage, activeStep } = this.state
    let dateCheck = moment(check_in).isAfter(check_out) || moment(check_in).isBefore(moment().subtract(1, "days"))
    switch (activeStep) {
      case 0: {
        if (!description || !destination || !check_in || !check_out || !price || dateCheck) {
          return true
        }
        return false
      }
      case 1: {
        if (!mainImage.url) {
          return true
        }
        return false
      }
    }
  }

  render() {
    const { check_in, check_out } = this.state
    if (!check_in || !check_out) {
      this.handleDates()
    }
    const steps = ['Details', 'Images', 'Review'];
    const { activeStep } = this.state
    const error = this.checkIfErrorWithTheFields()
    return (
      <div className="main-div">
        <CssBaseline />
        <AppBar position="absolute" color="default" >
        </AppBar>
        <main >
          <Paper>
            <Stepper activeStep={activeStep} >
              {steps.map(label => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <React.Fragment>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Your vacation is uploaded
                </Typography>
                  <div className="successfully-div">
                    <button className="successfully-button btn btn-primary" onClick={() => this.setState(initialState)}>Add another vacation</button>
                    <button className="successfully-button btn btn-primary"><Link style={{ color: "white" }} to="/vacations">Back to vacations</Link></button>
                  </div>
                </React.Fragment>
              ) : (
                  <React.Fragment>
                    {this.getStepContent(activeStep)}
                    <div className="buttons">
                      {activeStep !== 0 && (
                        <Button onClick={this.handleBack}>
                          Back
                    </Button>
                      )}
                      <Button
                        variant="contained"
                        color="primary"
                        disabled={error}
                        onClick={this.handleNext}
                      >
                        {activeStep === steps.length - 1 ? 'Add Vacation' : 'Next'}
                      </Button>
                    </div>
                  </React.Fragment>
                )}
            </React.Fragment>
          </Paper>
        </main>
      </div>);
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      AddVacation: (vacationDetails: Object) => dispatch(addVacation(vacationDetails))
    }
  }
}

export default connect(null, mapDispatchToProps)(Checkout)