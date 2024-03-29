import React from "react";
import { format } from "date-fns";
import { useAuthState } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { toast } from 'react-toastify';


const BookingModal = ({ date, treatment, setTreatment }) => {
  const { _id, name, slots } = treatment;
  const [user, loading, error] = useAuthState(auth);
  const formatedDate = format(date, "PP");

  const handleBooking = (event) => {
    event.preventDefault();
    const slot = event.target.slot.value;
    
    const booking = {
      treatmentId: _id,
      treatment: name,
      date: formatedDate,
      slot,
      patient: user.email,
      patientName: user.displayName,
      phone: event.target.phone.value,
    };

    fetch("https://powerful-woodland-51816.herokuapp.com/booking", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(booking),
    })
      .then((res) => res.json())
      .then((data) => {
        // to close the modal
        console.log(data)
        if(data.success){
          toast(`Appointment is set, ${formatedDate} at ${slot}`)
        }
        else{
          toast.error(`You already have an appointment, ${data.booking?.date} at ${data.booking.slot}`)
        }
        setTreatment(null);
      });
  };

  return (
    <div>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <label
            htlmFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="font-bold text-lg text-secondary">
            Booking for: {name}
          </h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-span1 gap-3 justify-items-center mt-2"
          >
            <input
              type="text"
              disabled
              value={format(date, "PP")}
              className="input input-bordered w-full max-w-xs"
            />
            <select
              name="slot"
              className="select select-bordered w-full max-w-xs"
            >
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              name="name"
              disabled
              value={user?.displayName || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="email"
              name="email"
              disabled
              value={user?.email || ""}
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="text"
              name="phone"
              placeholder="Phone Number"
              className="input input-bordered w-full max-w-xs"
            />
            <input
              type="submit"
              value="Submit"
              placeholder="Type here"
              className="btn btn-secondary"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
