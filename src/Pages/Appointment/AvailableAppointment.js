import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import Loading from "../Shared/Loading";
import BookingModal from "./BookingModal";
import Service from "./Service";

const AvailableAppointment = ({ date }) => {
  const [treatment, setTreatment] = useState(null);

  const formatedDate = format(date, 'PP');
  const {data: services, isLoading} = useQuery(['available', formatedDate], () => fetch(`https://powerful-woodland-51816.herokuapp.com/available?date=${formatedDate}`)
      .then((res) => res.json()))

      if(isLoading){
        return <Loading />
      }

  return (
    <div>
      <h4 className="text-xl text-secondary text-center my-12">
        Available Appointments on {format(date, "PP")}
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {
        services?.map(service => <Service
            key={service}
            service = {service}
            setTreatment = {setTreatment}
            >
            </Service>)
      }
      </div>
      {treatment && <BookingModal
        date={date}
        treatment={treatment}
        setTreatment={setTreatment}
        >
        </BookingModal>}
    </div>
  );
};

export default AvailableAppointment;
