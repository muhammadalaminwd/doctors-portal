import React, { useState } from 'react';
import Footer from '../Shared/Footer';
import AppointmentBanner from './AppointmentBanner';
import AvailableAppointment from './AvailableAppointment';
import BookingModal from './BookingModal';

const Appointment = () => {
    const [date, setDate] = useState(new Date ());

    return (
        <div>
            <AppointmentBanner date={date} setDate={setDate} />
            <AvailableAppointment date={date} />
            <Footer />
        </div>
    );
};

export default Appointment;