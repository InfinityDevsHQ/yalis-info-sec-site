import React from "react";
import BlogCards from "./BlogCards";
import Richtext from "../common/Richtext";
import Link from "next/link";
import { calculateReadingTime } from "../common/calculateReadingTime";
import { convertDate } from "@/utils/convert-data";

export default function BlogDetails({ data, relatedBlogs, slug }) {
  const date = data?.sys?.createdAt;
  const dateObject = new Date(date);
  const formattedDate = convertDate(dateObject);
  const author = data?.fields?.author;
  const pathname = `/blog/${slug}`;
  const siteUrl = "https://astro-stefan-ade.vercel.app";
  return (
    <>
      <section className="py-8 md:py-16">
        <div className="max-w-screen-lg mx-auto my-2.5 md:my-5 px-5">
          {data?.fields?.image?.fields?.file?.url && (
            <img
              src={data?.fields?.image?.fields?.file?.url}
              alt={data?.fields?.image?.fields?.title}
              className="max-h-full md:max-h-[500px] w-full mb-8 object-cover"
            />
          )}
          <div className="flex items-center gap-4 mb-2.5">
            <p>
              <i className="fa-regular fa-calendar mr-1"></i>
              {formattedDate}
            </p>
            <p>
              <i className="fa-solid fa-stopwatch mr-1"></i>{" "}
              {calculateReadingTime(data?.fields?.description?.content)} min
              read
            </p>
          </div>
          <div className="rich-text blog-description">
            <Richtext data={data?.fields?.description} />
          </div>
          <div className="mt-8 flex items-center gap-4">
            <h4>Share Post:</h4>
            <Link
              href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                `${siteUrl}${pathname}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button-facebook text-2xl hover:text-link-hover"
            >
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link
              href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(
                `${siteUrl}${pathname}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button-twitter text-2xl hover:text-link-hover"
            >
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link
              href={`http://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
                `${siteUrl}${pathname}`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="share-button-linkedin text-2xl hover:text-link-hover"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </div>
          {data?.fields?.tag?.length > 0 && (
            <div className="flex flex-wrap items-center gap-4 mt-8">
              {data?.fields?.tag?.map((item, index) => {
                return (
                  <Link
                    href={`/tag/${item?.fields?.slug}`}
                    className="bg-primary-dark hover:bg-muted-red text-white font-bold px-5 py-1.5 rounded-full"
                    key={index}
                  >
                    {item?.fields?.title}
                  </Link>
                );
              })}
            </div>
          )}
          {author && (
            <div className="flex flex-col mt-8 gap-5">
              {author?.fields?.avatar?.fields?.file?.url && (
                <img
                  src={author?.fields?.avatar?.fields?.file?.url}
                  alt="avatar"
                  className="w-24 rounded-full"
                />
              )}
              <div>
                <h3>{author?.fields?.name}</h3>
                <p>{author?.fields?.bio}</p>
                {author?.fields?.socialMedia && (
                  <div className="flex items-center gap-3 mt-3">
                    {author?.fields?.socialMedia?.map((item, index) => {
                      return (
                        <Link
                          href={item?.link}
                          key={index}
                          target="_blank"
                          className="hover:text-link-hover"
                        >
                          <i className={`${item?.icon} text-2xl`} />
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </section>
      {relatedBlogs && <BlogCards data={relatedBlogs} relatedBlogs={true} />}
    </>
  );
}
