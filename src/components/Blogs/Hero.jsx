"use client";
import React, { useEffect, useState } from "react";
// import bgImg from "../../../public/images/about-hero-bg.jpg";
import { usePathname } from "next/navigation";
import { searchBlogsData } from "@/lib/api";
import Link from "next/link";

export default function Hero({ title, bgImg }) {
  const pathname = usePathname();
  const [search, setSearch] = useState("");
  const [blogsList, setBlogsList] = useState([]);

  useEffect(() => {
    const handleSearch = async () => {
      const data = await searchBlogsData(search);
      setBlogsList(data);
    };
    if (search?.length > 0) {
      handleSearch();
    } else {
      setBlogsList([]);
    }
  }, [search]);
  return (
    <section
      style={{ backgroundImage: `url(${bgImg?.fields?.file?.url})` }}
      class={`bg-center bg-no-repeat bg-cover bg-[#324450]`}
    >
      <div class="max-container pt-[80px] md:pt-[100px] lg:pt-[70px]">
        <div class="pt-[20px] pb-[50px] md:py-[150px] relative text-center">
          <h1 class="text-white">{title}</h1>
          {pathname === "/blog" && (
            <div className="relative max-w-[400px] mx-auto mt-[30px]">
              <div className="w-full relative">
                <input
                  type="text"
                  placeholder="Search"
                  style={{ paddingRight: "35px" }}
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
                {(search?.length > 0 || blogsList?.length > 0) && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setBlogsList([]);
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-[20px]"
                  >
                    <i class="fa-solid fa-circle-xmark"></i>
                  </button>
                )}
              </div>
              {(blogsList?.length > 0 || search?.length > 0) && (
                <div className="absolute top-[45px] left-0 w-full bg-white h-max">
                  {search?.length > 0 && blogsList?.length === 0 ? (
                    <div className="w-full h-[100px] flex items-center justify-center">
                      <p>No search results found.</p>
                    </div>
                  ) : (
                    <div className="flex flex-col gap-2 px-[20px] py-[5px] max-h-[250px] overflow-y-auto">
                      {blogsList?.map((item, i) => {
                        return (
                          <Link
                            key={i}
                            onClick={() => {
                              setSearch("");
                              setBlogsList([]);
                            }}
                            href={`/blog/${item?.fields?.slug}`}
                            className="text-left py-[5px] border-b-[1px] last:border-none hover:text-link-hover"
                          >
                            {item?.fields?.title}
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
