import ContactForm from "../contact/contact-form";
import React from "react";
export default function QuoteFormSection({ data }) {
  return (
    <section id="getQuote" className="bg-zinc-50 py-8 md:py-16">
      <div className="max-container my-2.5 md:my-5">
        <div className="flex bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-lg my-8">
          <div
            style={{
              backgroundImage: `url(${data?.formImage?.fields?.file?.url})`,
            }}
            className="w-full min-h-full bg-cover bg-no-repeat bg-center hidden lg:block"
          ></div>
          <div className="w-full h-full">
            <div className="bg-white p-5 md:p-16">
              <h2 className="text-primary-dark text-center md:text-left">
                {data?.formTitle}
              </h2>
              <p className="my-8 text-center md:text-left">
                {data?.formDescription}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
