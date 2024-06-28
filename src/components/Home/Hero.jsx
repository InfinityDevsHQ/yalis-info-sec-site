import Image from "next/image";
import React from "react";
import ContactForm from "../contact/contact-form";

export default function Hero({ data }) {
  return (
    <section
      // style={{
      //   backgroundImage: `url(${data?.bgImage?.fields?.file?.url})`,
      // }}
      className={`bg-gray-cement relative`}
    >
      {data?.bgImage?.fields?.file?.url && (
        <Image
          src={"https:" + data?.bgImage?.fields?.file?.url}
          alt="background-image"
          width={1500}
          height={1500}
          priority
          unoptimized
          className="absolute z-0 top-0 object-cover object-center w-full h-full"
        />
      )}
      <div className="relative z-[1] max-container pt-20 md:pt-24 lg:pt-5">
        <div className="py-16 my-5 lg:my-16 flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="w-full lg:w-[55%]">
            <h1 className="mb-5 text-white">{data?.title}</h1>
            <p className="text-gray-cement text-2xl mb-8 leading-[1.5]">
              {data?.description}
            </p>
          </div>
          <div className="w-full lg:w-[44%]">
            <div className="bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-lg p-5 md:p-8">
              <h3 className="text-primary-dark font-extrabold leading-[1.3] text-center mb-5">
                {data?.formTitle}
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
