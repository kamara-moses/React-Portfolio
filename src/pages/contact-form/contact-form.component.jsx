import React, { Component } from 'react';
import "./contact-form.css";
import Button from "react-bootstrap/Button";


class Contact extends Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }


  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }

  render() {
    const { status } = this.state;
    return (
      <div className="bg-white text-primary" id="contactSect">
        <div className="container" id="contact">
          <h2 className="contact text-center">Contact Me</h2>

          <form
            className="contact-form"
            onSubmit={this.submitForm}
            action="https://formspree.io/f/xbjpkqrr"
            method="POST">
            <div className="form-group">
              <label>Name</label>
              <input type="text" className="form-control" id="exampleInputName1" name="name" placeholder="Bob Smith" />

            </div>

            <div className="form-group">
              <label>Email address</label>
              <input type="email" className="form-control" id="exampleInputEmail1" name="email" placeholder="email@gmail.com" />
            </div>

            <div className="form-group">
              <label>Message</label>
              <textarea name="message" className="form-control" id="exampleFormControlTextarea1" rows="6" />
            </div>

            {status === "SUCCESS" ? <p className="success">Thank you for sending me a message!</p> : <Button className="m-2" variant="outline-primary">
                        Submit
                      </Button>}
            {status === "ERROR" && <p className="failure">Ooops! There was an error. Please fill out all the fields and try again</p>}
          </form>
          <div className="contactInfo text-center">
            <span>Email: </span><a href="mailto:kamara.moses@yahoo.com">kamara.moses@yahoo.com</a><br />
            <span>Call: </span><a href="tel:(206) 302-8844">(206) 302-8844</a><br />
          </div>
        </div>
      </div>

    );
  }
}
export default Contact