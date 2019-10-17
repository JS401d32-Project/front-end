import React from 'react';
import ReactModal from 'react-modal';
import PropTypes from 'prop-types';
import Note from './note-details';

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
                <button onClick={this.handleOpenModal}>View Details</button>
                <ReactModal
                    isOpen={this.state.showModal}
                    contentLabel="Minimal Modal Example"
                >
                            <Note id={this.props.id}/>


                    <button onClick={this.handleCloseModal}>Close Modal</button>
                </ReactModal>
            </div>
    );
  }
}

ModalExample.propTypes = {
  id: PropTypes.string,
};

export default ModalExample;
