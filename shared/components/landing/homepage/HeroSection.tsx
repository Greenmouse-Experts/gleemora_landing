import Link from "next/link";
import React from "react";

const HeroSection = () => {
  return (
    <>
      <div className="bg-hero bg-cover h-[90vh]">
        <div className="box h-full">
          <div className="flex items-center h-full">
            <div>
              <p className="text-white text-4xl lg:text-[45px] fw-600 leading-[65px]">
                Navigate your <span className="text-primary">health</span> challenges <br/> hand-in-hand with <span className="text-primary">celebrities</span> &
                influential <br/>figures who've walked your path
              </p>
              <div className="mt-12">
                <Link href={''} className="btn-feel">Meet the Celebrity Survivors</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
