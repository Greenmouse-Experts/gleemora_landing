import React, {useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Drawing = () => {
    useEffect(() => {
        AOS.init();
      })
  return (
    <>
      <div className="section pb-0 bg-[#FFF8F9]">
        <div className="box">
          <div className="flex flex-row-reverse items-center">
            <div className="w-4/12" data-aos="flip-up" data-aos-easing='ease-in'>
              <Image
                src={
                  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696670/Gleemora/Floating_in_water-bro_1_cnjjya.png"
                }
                alt="shake"
                width={200}
                height={200}
                className="w-10/12 mx-auto"
              />
            </div>
            <div className="w-8/12" data-aos="zoom-out" data-aos-easing='ease-out'>
              <p className="font-times text-2xl lg:text-[35px] leading-[40px]">
                Drawing strength from celebrities & influential figures has
                never been more accessible
              </p>
              <div className="mt-12">
                <Link href={""} className="btn-feel">
                  Be among the first to know
                </Link>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between mt-12">
            <div className="w-4/12" data-aos="flip-right" data-aos-easing='ease-out'>
              <Image
                src={
                  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696671/Gleemora/Pinky_promise-pana_1_r3wcim.png"
                }
                alt="shake"
                width={200}
                height={200}
                className="w-10/12"
              />
            </div>
            <div className="lg:w-7/12" data-aos="zoom-out" data-aos-easing='ease-out'>
              <p className="font-times text-2xl lg:text-[45px] lg:text-right">
              Our Promise
              </p>
              <div className="mt-12 lg:text-right leading-[30px] fw-500 lg:fs-700">
                <p>From that first unsettling symptom, through the anxious moments awaiting a diagnosis, the weight of the weeks leading up to surgery, and the tender days of recovery — Gleemora will be there with you, every heartbeat, every tear, every step of the way. You will never walk this journey alone!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section">
        <div className="box">
            <div className="flex flex-row-reverse items-center lg:gap-x-12">
                <div className="lg:w-4/12 lg:flex justify-end">
                <Image
                src={
                  "https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696671/Gleemora/Blob_5_v8yjd9.png"
                }
                alt="shake"
                width={200}
                height={200}
                className="w-9/12 "
              />
                </div>
                <div className="w-8/12">
                    <p className="font-times text-2xl lg:text-[45px] pt-12">Founder's Story</p>
                    <div className="mt-12 fw-500 lg:fs-700">
                        <p>"I was wheeled into the theatre with fear and uncertainty. The medical experts did their part, but I yearned for someone who had walked my path. That's the void Gleemora aims to fill. Dive deeper into my journey and the genesis of this platform."</p>
                    </div>
                    <div className="mt-12 flex gap-x-8 items-center">
                        <Link href={''} className="btn-feel px-16">Beyond the Medical</Link>
                        <p>My Personal Quest for Emotional Support</p>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Drawing;
