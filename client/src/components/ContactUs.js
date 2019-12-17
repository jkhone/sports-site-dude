import React from "react";
import "../styles/Newsletter.css"


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
      <form
        onSubmit={this.submitForm}
        action="https://formspree.io/mpzqzydn"
        method="POST"
        className="contactForm"
      >
<div className="newletter">Contact Us</div>
<div className="footcontainer">
      <div className="footer2">
        <div className="form">
          <input type="name" name="fullname" aria-autocomplete="none" aria-required="true"/>
          <label for="name" className="label-email">
          <span className="content-email">Full Name</span>
          </label>
        </div>
        <div className="form">
          <input type="email" name="email" aria-autocomplete="none" aria-required="true"/>
          <label for="email" className="label-email">
          <span className="content-email">Email</span>
          </label>
        </div>
        <div className="form">
          <input type="tel" name="telphone" aria-autocomplete="none" aria-required="true"/>
          <label for="tel" className="label-email">
          <span className="content-email">Phone Number</span>
          </label>
        </div>
        <div className="formcomments">
        <label for="comments" className="label-comments">
          <span className="content-comments">Comments:</span>
          </label>
          <textarea  maxLength="500" className="commentInput" type="textarea" name="comments" aria-autocomplete="none" aria-required="true"/>
        </div>
      </div>
    </div>


        {status === "SUCCESS" ? <p className="good" >Thank you for contacting us, you will hear from us soon!</p> : <div className="buttonContainer"> <button className="puButtonHome3" >Submit</button></div>}
        {status === "ERROR" && <p className="bad"> Ooops! There was an error. Please fill out required fields.</p>}
      </form>
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