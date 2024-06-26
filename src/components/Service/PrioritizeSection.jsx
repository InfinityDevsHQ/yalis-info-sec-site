import React from "react";
import Richtext from "../common/Richtext";

export default function PrioritizeSection({ data }) {
  return (
    <section className="bg-light py-8 md:py-16">
      <div className="max-container my-2.5 md:my-5 flex flex-col-reverse lg:flex-row items-center justify-between gap-8 lg:gap-[4%]">
        <div className="w-full lg:w-[50%] text-center lg:text-left">
          <h2 className="text-primary-dark mb-5">{data?.title}</h2>
          {data?.description && (
            <div className="rich-text list-checked">
              <Richtext data={data?.description} />
            </div>
          )}
        </div>
        {data?.image?.fields?.file?.url && (
          <div className="w-full lg:w-[41%]">
            <img
              src={data?.image?.fields?.file?.url}
              alt="image"
              width={480}
              height={215}
              className={
                "w-full lg:w-auto rounded-md shadow-[0_0.25rem_1.25rem_rgba(0,0,0,0.075)]"
              }
            />
          </div>
        )}
      </div>
    </section>
  );
}
