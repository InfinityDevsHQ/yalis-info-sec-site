import React from "react";
import Richtext from "../common/Richtext";

export default function RequirmentsSection({ data }) {
  return (
    <section class="bg-light py-[30px] md:py-[60px]">
      <div class="max-container my-2.5 md:my-5 flex flex-col lg:flex-row items-center justify-between gap-5 lg:gap-[4%]">
        {data?.image?.fields?.file?.url && (
          <div class="w-full lg:w-[41%]">
            <img
              src={data?.image?.fields?.file?.url}
              alt={"image"}
              width={500}
              height={320}
              class={"rounded-[5px] w-full lg:w-auto"}
            />
          </div>
        )}
        <div class="w-full lg:w-[50%] text-center lg:text-left">
          <h2 class="mb-8 text-primary2">{data?.title}</h2>
          {data?.description && (
            <div class="rich-text list-checked types-list two-column-ul">
              <Richtext data={data?.description} />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
