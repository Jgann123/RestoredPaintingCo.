import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Modal from './Modal'
import './Modal.css'
import EmailForm from '../EmailForm/EmailForm';

class ModalDisplay extends React.Component {
    constructor(props) {
      super(props);
  
      this.state = {
        modal: false,
        name: "",
        modalInputName: ""
      };
    }
  
    handleChange(e) {
      const target = e.target;
      const name = target.name;
      const value = target.value;
      
  
      this.setState({
        [name]: value
      });
    }
  
    handleSubmit(e) {
      this.setState({ name: this.state.modalInputName });
      this.modalClose();
    }
  
    modalOpen() {
      this.setState({ modal: true });
    }
  
    modalClose() {
      this.setState({
        modalInputName: "",
        modal: false
      });
    }
  
    render() {
      return (
        <div className="App">
          <h1 id="h2">Hello!! {this.state.name}</h1>
          <a id="a" href="javascript:;" onClick={e => this.modalOpen(e)}>
             Free Consultation
          </a>
          <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}>
            <h2 id="h2">Hello Modal</h2>
            <div className="form-group">
              <label id="h2">Enter Name:</label>
              <input
              id="h2"
                type="text"
                value={this.state.modalInputName}
                name="modalInputName"
                onChange={e => this.handleChange(e)}
                className="form-control"
              />
            </div>
            <div className="form">
            <EmailForm />
            </div>
            <div className="form-group">
              <button  id="h2" onClick={e => this.handleSubmit(e)} type="button">
                Save
              </button>
            </div>
          </Modal>
        </div>
      );
    }
  }

  export default ModalDisplay;