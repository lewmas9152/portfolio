import React from "react";
import './Contacts.css';

const Contacts = () => {
  return (
    <main className="contactsContainer">
      <h1>Contacts</h1>
      <quote className="promo">
        ~Reach out to me and let's make the experience of your dream website a
        reality~
      </quote>

      <div className="contacts">
        <div className="location cont">
          <img
            src="/assets/location-on.svg"
            alt="location-icon"
            className="socialIcons"
          />
         <div className="label">
         <h2>Location</h2>
          <p>Nyeri,Kenya</p>
         </div>
        </div>

        <div className="email cont">
          <img
            src="/assets/email-solid.svg"
            alt="email-icon"
            className="socialIcons"
          />
         <div className="label">
         <h2>Email</h2>
          <p>Smnjuguna22@gmail.com</p>
         </div>
        </div>

        <div className="phone cont">
          <img
            src="/assets/phone.svg"
            alt="phoneIcon"
            className="socialIcons "
          />
         <div className="label">
         <h2>Call</h2>
          <p>+254723128290</p>
         </div>
        </div>
      </div>
    </main>
  );
};

export default Contacts;