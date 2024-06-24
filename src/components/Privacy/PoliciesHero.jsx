import React from "react";

export default function PoliciesHero({ title, lastUpdated }) {
  return (
    <section class="bg-slate-40">
      <div class="max-container pt-20 md:pt-24 lg:pt-[120px]">
        <div class="pt-5 pb-12 md:py-36 relative text-center">
          <h1 class="text-white">{title}</h1>
          <p class="mb-8 textgray-cement text-lg">Last updated {lastUpdated}</p>
        </div>
      </div>
    </section>
  );
}
