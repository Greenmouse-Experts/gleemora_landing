import React, {useEffect} from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Experiences = () => {
    useEffect(() => {
        AOS.init();
      })
  return (
    <>
      <div className="bg-dark section">
        <div className="box">
          <div className="text-white pb-10">
            <p
              className="text-5xl font-times fw-500"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
            >
              Find strength in shared experiences
            </p>
            <div
              className="lg:mt-8 mt-4"
              data-aos="zoom-in-up"
              data-aos-easing="ease-in-sine"
            >
              <p className="lg:w-9/12 xl:w-8/12 xl:fs-700">
                If you&apos;re navigating the challenges of breast cancer,
                coping with uterine fibroids, or seeking understanding amidst
                endometriosis or PCOS, Gleemora&apos;s platform is for you.
                Amidst the physical and emotional battles, there lies a
                universal yearning for understanding, relatability, and a beacon
                of hope. At Gleemora, we bridge this gap.
              </p>
            </div>
            <div className="mt-12 lg:mt-20 grid lg:grid-cols-3 text-center gap-x-12">
                <div data-aos="zoom-out" data-aos-easing='ease-out'>
                    <div>
                    <Image src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696669/Gleemora/Rectangle_12_fa7cph.png'} alt="shake" width={200} height={200} className="w-28 mx-auto"/>
                    <p className="fw-600 text-lg mt-4 leading-6">Exclusive one-on-one access to celebrity-driven support</p>
                    </div>
                    <p className="mt-4 fs-500">Discover and connect with celebrated figures who&apos;ve braved your health journey</p>
                </div>
                <div data-aos="zoom-out" data-aos-easing='ease-out' data-aos-delay='200'>
                    <div>
                    <Image src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696670/Gleemora/Rectangle_13_b1azln.png'} alt="shake" width={200} height={200} className="w-28 mx-auto"/>
                    <p className="fw-600 text-lg mt-4 leading-6">Secured Heart-to-Heart sessions</p>
                    </div>
                    <p className="lg:mt-10 mt-4 fs-500">All video calls are conducted within our web app, ensuring encryption and strong backend security. Your privacy and safety of all users is our top priority.</p>
                </div>
                <div data-aos="zoom-out" data-aos-easing='ease-out' data-aos-delay='400'>
                    <div>
                    <Image src={'https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696669/Gleemora/Rectangle_14_lfhmwn.png'} alt="shake" width={200} height={200} className="w-28 mx-auto"/>
                    <p className="fw-600 text-lg mt-4 leading-6">Flexibility</p>
                    </div>
                    <p className="lg:mt-10 mt-4 fs-500">Schedule sessions based on your availability, ensuring every conversation happens at the right time.</p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experiences;
