import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section style={{
            background: `url(${appointment})`
        }} className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
            <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 px-5'>
            <h3 className='text-xl text-primary font-bold'>Appointment</h3>
            <h2 className='text-3xl text-white py-5'>Make an Appointment Today</h2>
            <p className='text-white pb-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat, consequatur accusamus culpa, at porro officia eius recusandae similique officiis rem corrupti quibusdam quasi? Labore praesentium facere vero sint soluta, asperiores, sed porro nisi adipisci mollitia sequi similique excepturi maxime inventore!</p>
            <PrimaryButton>GET STARTED</PrimaryButton>
            </div>

        </section>
    );
};

export default MakeAppointment;