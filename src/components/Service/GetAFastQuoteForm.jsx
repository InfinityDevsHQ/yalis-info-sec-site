import Richtext from "../common/Richtext";
import ContactForm from "../contact/contact-form";
import React from "react";
export default function GetAFastQuoteForm({ data }) {
  return (
    <section className="bg-slate-40 text-white py-8 md:py-16">
      <div className="max-container my-2.5 md:my-5">
        <div className="bg-white shadow-[0px_15px_52px_rgba(50,68,80,0.14)] rounded-lg flex flex-col md:flex-row items-stretch">
          {(data?.title || data?.description) && (
            <div className="w-full p-8 bg-neutral-800 rounded-l-[8px]">
              <div className="m-2.5">
                <h2 className="text-primary-dark mb-2.5">{data?.title}</h2>
                <div className="rich-text penetration-testing-form-description list-target">
                  <Richtext data={data?.description} />
                </div>
              </div>
            </div>
          )}
          {data?.showForm && <ContactForm />}
        </div>
      </div>
    </section>
  );
}
