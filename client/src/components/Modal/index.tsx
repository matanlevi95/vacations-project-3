import React from 'react';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

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
  state = {
    open: true
  }

  componentDidMount() {
  }

  handleClose = (show: boolean) => {

  }

  render() {
    let show = false


    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          open={show}
          onClose={this.handleClose}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}
        >
          <Fade in={show}>
            <div>
              <h2 id="transition-modal-title">Transition modal</h2>
              <p id="transition-modal-description">react-transition-group animates me.</p>
            </div>
          </Fade>
        </Modal>
      </div >
    )
  };
}