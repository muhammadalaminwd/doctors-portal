import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import appointment from '../../assets/images/appointment.png'

const ContactForm = () => {
  return (
    <section style={{
        background: `url(${appointment})`
    }}>
    <div className="hero min-h-screen ">
    <div className="hero-content flex-col lg:flex-row-reverse">
      <div className="text-center lg:text-left">
        <h3 className="text-2xl font-bold text-primary">Contact us</h3>
        <h1 className="text-5xl text-white">Stay Connected with us</h1>
      </div>
      <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subject</span>
            </label>
            <input
              type="text"
              placeholder="subject"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <input
              type="textarea"
              placeholder="your message"
              className="input input-bordered"
            />
          </div>
          <div className="form-control mt-6">
            <PrimaryButton>Submit</PrimaryButton>
          </div>
        </div>
      </div>
    </div>
  </div>
    </section>
  );
};

export default ContactForm;
