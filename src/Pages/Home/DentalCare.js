import React from 'react';
import dental from '../../assets/images/treatment.png'
import PrimaryButton from '../Shared/PrimaryButton';

const DentalCare = () => {
    return (
        <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <div>
            <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
            <p class="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
              a id nisi. It is a long established fact that a reader will be distracted by the reedablle content of a page when looking.
            </p>
            <PrimaryButton>GET STARTED</PrimaryButton>
          </div>
          <img
          src={dental}
          class="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
      </div>
    );
};

export default DentalCare;