import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import Note from './note-details';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class ModalExample extends React.Component {
  constructor() {
    super();
    this.state = {
      showModal: false,
    };

    this.handleOpenModal = this.handleOpenModal.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
  }

  handleOpenModal() {
    this.setState({ showModal: true });
  }

  handleCloseModal() {
    this.setState({ showModal: false });
  }

  render() {
    return (
            <div>
                  <p className="details-modal" onClick={this.handleOpenModal}>View Note Details</p>
                  <ReactModal
                      style={customStyles}
                      isOpen={this.state.showModal}
                      contentLabel="Minimal Modal Example"
                  >
                        <Note id={this.props.id}/>
                      <button onClick={this.handleCloseModal}>Close</button>
                  </ReactModal>
              </div>
    );
  }
}

ModalExample.propTypes = {
  id: PropTypes.string,
};

export default ModalExample;
