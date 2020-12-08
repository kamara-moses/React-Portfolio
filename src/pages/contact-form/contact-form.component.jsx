import React from "react";
import "./contact-form.css";
import Button from "react-bootstrap/Button";

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div>
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/f/xbjpkqrr"
        method="POST"
      >
        <label>Email:</label>
        <input type="text" className="form-control" name="name" placeholder="Bob Smith" />
        <label>Message:</label>
        <textarea name="message" className="form-control" rows="6" />
        {status === "SUCCESS" ? <p>Thanks you for sending me a message!</p> : <Button className="m-2" variant="outline-primary">
                        Submit
                      </Button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      <div className="contactInfo text-center">
      <span>Email: </span><a href="mailto:kamara.moses@yahoo.com">kamara.moses@yahoo.com</a><br />
      <span>Call: </span><a href="tel:(206) 302-8844">(206) 302-8844</a><br />
    </div>
    </div>
    );
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
}