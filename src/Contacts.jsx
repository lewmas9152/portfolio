import React from "react";
import "./Contacts.css";
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LocationOnIcon from '@mui/icons-material/LocationOn';

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
          <LocationOnIcon
            className="materialIcon"
          />
          <div className="label">
            <h2>Location</h2>
            <p>Nyeri,Kenya</p>
          </div>
        </div>

        <div className="email cont">
          <MailOutlineIcon
            className="materialIcon"
          />
          <div className="label">
            <h2>Email</h2>
            <p>smnjuguna22@gmail.com</p>
          </div>
        </div>

        <div className="phone cont">
          <PermPhoneMsgIcon
          className="materialIcon"
          />
          <div className="label">
            <h2>Call</h2>
            <p>+254723128290</p>
          </div>
        </div>
      
      </div>
      <form action="" className="form">
        <code>~Want some help making your site more responsive and worth visiting~</code>
          <h3>Send me an email</h3>
          <label>
            Name
            <input type="text" placeholder="e.g Njuguna samwel"/>
          </label>

          <label>
            Email
            <input type="email" placeholder="e.g smnjuguna22@gmail.com"/>
          </label>

          <label>
            Message
           <textarea name="" id="" cols="30" rows="10"></textarea>
          </label>
        </form>
    </main>
  );
};

export default Contacts;
