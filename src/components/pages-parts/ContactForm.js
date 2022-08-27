import React, { useState } from 'react';

const ContactForm = () => {
  const [set, setSet] = useState({
    name: '',
    email: '',
    message: '',
  });
 const {name, email, message} = set
 console.log(set)
  const formHandler = (e) => {
    e.preventDefault();
    console.log(set)

  };

  return (
    <form onSubmit={formHandler}>
      <div class="group">
        <h3 className="page__contact__heading">Contact Form</h3>
      </div>

      <div class="group">
        <input
          type="text"
          className="group__control"
          placeholder="Your name"
          value={name}
          onChange={(e) => setSet({ ...set, name: e.target.value })}
        />
      </div>
      <div class="group">
        <input
          type="email"
          className="group__control"
          placeholder="Your email"
          name=""
          value={email}
          onChange={(e) => setSet({ ...set, email: e.target.value })}
        />
      </div>
      <div class="group">
        <textarea
          cols="12"
          row="8"
          className="group__textarea"
          placeholder="Enter your message"
          defaultValue={message}
          onChange={(e) => setSet({ ...set, message: e.target.value })}
        />
      </div>
      <div class="group">
        <input type="submit" value="Send message &rarr;" className="btn-dark" />
      </div>
    </form>
  );
};

export default ContactForm;
