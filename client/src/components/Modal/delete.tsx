import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./style.css"
import { connect } from 'react-redux';
import { deleteVacation } from "../../redux/actions"

interface propsTypes {
  name: string
  actions: {
    deleteVacation: Function
  }
  vacationId?: Number
  closeModal: any,
  show: boolean
}
interface stateTypes {
}

class DeleteModal extends React.Component<propsTypes, stateTypes> {

  state = {
    isError: true
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    const { name: vacationName } = this.props
    if (value.toLocaleLowerCase() === vacationName.toLocaleLowerCase()) {
      this.setState({ isError: false })
    }
    else {
      this.setState({ isError: true })
    }
  }
  handleDelete = () => {
    this.props.actions.deleteVacation(this.props.vacationId)
    this.props.closeModal()
  }

  render() {
    const { show, closeModal } = this.props
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={show}
          onClose={closeModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={show}>
            <div className="fadeIn">
              <span className="confirm-message" id="transition-modal-title">Are you sure?</span>
              <br />
              <span className="" id="transition-modal-title">if you sure you want to delete this vacation, type the name to confirm</span>
              <br />
              <span className="" id="transition-modal-title"><b>{this.props.name}</b></span>
              <br />
              <input type="text" autoComplete="off" name="confirmName" onChange={this.handleChange} />
              <div className="fade-in-buttons">
                <button className="btn btn-danger" disabled={this.state.isError} onClick={this.handleDelete}>Delete</button>
                <button className="btn btn-primary" onClick={() => closeModal()}>Cancel</button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div >
    )
  };
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    actions: {
      deleteVacation: (vacationId: number) => dispatch(deleteVacation(vacationId))
    }
  }
}

export default connect(null, mapDispatchToProps)(DeleteModal)