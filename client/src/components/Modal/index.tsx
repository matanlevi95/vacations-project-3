import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import "./style.css"

// const useStyles = makeStyles((theme: Theme) =>
//   createStyles({
//     modal: {
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     paper: {
//       backgroundColor: theme.palette.background.paper,
//       border: '2px solid #000',
//       boxShadow: theme.shadows[5],
//       padding: theme.spacing(2, 4, 3),
//     },
//   }),
// );

export default class TransitionsModal extends React.Component<any, any> {

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
              <h2 id="transition-modal-title">Are you sure you want to delete ?</h2>
              <div className="fade-in-buttons">
                <button className="btn btn-primary">Delete</button>
                <button className="btn btn-primary" onClick={() => closeModal()}>Cancel</button>
              </div>
            </div>
          </Fade>
        </Modal>
      </div >
    )
  };
}