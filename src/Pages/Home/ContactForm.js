import React from "react";
import PrimaryButton from "../Shared/PrimaryButton";
import appointment from '../../assets/images/appointment.png'

const ContactForm = () => {
  return (
    <section style={{
        background: `url(${appointment})`
    }}>
    <div class="hero min-h-screen ">
    <div class="hero-content flex-col lg:flex-row-reverse">
      <div class="text-center lg:text-left">
        <h3 className="text-2xl font-bold text-primary">Contact us</h3>
        <h1 class="text-5xl text-white">Stay Connected with us</h1>
      </div>
      <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <div class="card-body">
          <div class="form-control">
            <label class="label">
              <span class="label-text">Email</span>
            </label>
            <input
              type="text"
              placeholder="email"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <label class="label">
              <span class="label-text">Subject</span>
            </label>
            <input
              type="text"
              placeholder="subject"
              class="input input-bordered"
            />
          </div>
          <div class="form-control">
            <input
              type="textarea"
              placeholder="your message"
              class="input input-bordered"
            />
          </div>
          <div class="form-control mt-6">
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
