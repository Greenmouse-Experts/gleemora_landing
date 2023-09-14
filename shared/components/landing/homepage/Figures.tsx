import React, { useEffect } from 'react'
import Image from 'next/image'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Figures = () => {
    useEffect(() => {
        AOS.init();
      })
  return (
    <>
        <div className='section'>
            <div className='box'>
                <div>
                    <p className='text-5xl font-times fw-500' data-aos="zoom-out-up" data-aos-easing="ease-in-sine">Why celebrities & influential figures?</p>
                    <div className='lg:mt-8 mt-4' data-aos="zoom-out-up" data-aos-easing="ease-in-sine">
                        <p className='lg:w-9/12 xl:w-8/12 xl:fs-700'>They aren&apos;t just about the glamour and the spotlight. Behind the scenes, they face challenges like everyone else. Their journey from pain to empowerment inspires and resonates. Our empowering figures — from celebrities to influencers and authors — will soon share their personal journeys with fibroids, hysterectomy, endometriosis, PCOS, and breast cancer. Be the first to connect with them.</p>
                    </div>
                    <div className='mt-10 grid lg:grid-cols-4 gap-x-6 lg:gap-x-16 items-center'>
                        <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine">
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696670/Gleemora/Modern_woman-bro_1_gvkssh.png' alt='' width={400} height={400} className='w-full h-60 object-fit'/>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-delay="400">
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696670/Gleemora/Influencer-pana_1_n6cqus.png' alt='' width={400} height={400} className='w-full h-60 object-fit'/>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-delay="600">
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696670/Gleemora/Women_talking-bro_1_spc1gt.png' alt='' width={400} height={400} className='w-full h-60 object-fit'/>
                        </div>
                        <div data-aos="fade-left" data-aos-duration="500" data-aos-easing="ease-in-sine" data-aos-delay="800">
                            <Image src='https://res.cloudinary.com/greenmouse-tech/image/upload/v1694696670/Gleemora/Women_s_Equality_Day-amico_1_oowukr.png' alt='' width={400} height={400} className='w-full h-60 object-fit'/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Figures