import React, {useEffect} from "react";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Link from "next/link";

const Didyouknow = () => {
    useEffect(() => {
        AOS.init();
      })
  return (
    <>
      <div className="relative min-h-[400px] pb-12 overflow-hidden">
        <div className="box flex items-center justify-between">
          <div className="lg:w-6/12 relative z-10 ">
            <p className="font-times text-2xl lg:text-[45px] pt-12">
              Did You Know ?
            </p>
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1694705402/Gleemora/Group_24_1_ovm0c5.png"
              alt="doyouknow"
              width={500}
              height={500}
              className="py-12 w-10/12"
              data-aos="flip-up" data-aos-easing='ease-out'
            />
            <Link href=''>
            <Image
              src="https://res.cloudinary.com/greenmouse-tech/image/upload/v1694706012/Gleemora/Arrow_1_mhquwp.png"
              alt="doyouknow"
              width={60}
              height={10}
              className="relative -top-20 left-[10%]"
            />
            </Link>
          </div>
          <div className="lg:w-6/12 relative z-10 text-white">
            <ul className="grid gap-10">
                <li data-aos="zoom-out" data-aos-easing='ease-out' >Fibroids are the most commonly overlooked tumors in women. Yet, 80% of women are diagnosed by age 50.</li>
                <li data-aos="zoom-out" data-aos-easing='ease-out' data-aos-delay='200'>PCOS affects an estimated 8–13% of reproductive-aged persons and is a leading cause of infertility.</li>
                <li data-aos="zoom-out" data-aos-easing='ease-out' data-aos-delay='400'>Endometriosis affects roughly 10% (190 million) of reproductive-age persons globally.</li>
                <li data-aos="zoom-out" data-aos-easing='ease-out' data-aos-delay='600'>More than 4 out of 10 women aged 70–79 reported having had a hysterectomy.</li>
                <li data-aos="zoom-out" data-aos-easing='ease-out' data-aos-delay='800'>About 2.3 million women were diagnosed with breast cancer worldwide (2020).</li>
                <li data-aos="zoom-out" data-aos-easing='ease-out' data-aos-delay='1000'>Access to early diagnosis and effective treatment is important but is limited in many settings, including in low- and middle-income countries.</li>
            </ul>
          </div>
        </div>
        <div className="absolute top-0 right-0 h-full w-8/12 z-0 bg-primary rounded-bl-[100px]"></div>
      </div>
    </>
  );
};

export default Didyouknow;
