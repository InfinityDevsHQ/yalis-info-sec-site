import ContactForm from "../contact/contact-form";
import React from "react";
export default function Hero({ data }) {
  return (
    <section
      style={{ backgroundImage: `url(${data?.bgImage?.fields?.file?.url})` }}
      className="bg-slate-40 bg-[center_100px] bg-no-repeat bg-cover py-5 lg:py-16"
    >
      <div className="max-container pt-20 md:pt-24 lg:pt-5">
        <div className="py-16 flex flex-col lg:flex-row items-start justify-between gap-12">
          <div className="w-full lg:w-[55%]">
            <h1 className="mb-5 text-white">{data?.title}</h1>
            <p className="text-gray-cement text-2xl mb-8">
              {data?.description}
            </p>
          </div>
          <div className="w-full lg:w-5/12">
            <div className="bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-lg p-5 md:p-8">
              <h3 className="text-primary-dark font-extrabold text-center mb-5">
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
