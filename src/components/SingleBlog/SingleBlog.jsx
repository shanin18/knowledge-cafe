import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/fontawesome-free-regular";

const SingleBlog = (props) => {
  const { image, author_image, author, published_date, read_time, title } =
    props.blog;
  console.log(props.blog);
  return (
    <div className="border-b">
      <div>
        <img src={image} alt="blog-image" className="rounded-xl" />
      </div>
      <div className="py-9">
        <div className="my-8 flex justify-between items-center">
          <div className="flex items-center">
            <img
              src={author_image}
              alt="author-image"
              className="w-14 rounded-full mr-6"
            />
            <div>
              <h3 className="font-bold text-2xl">{author}</h3>
              <p className="font-semibold text-gray-600">{published_date}</p>
            </div>
          </div>

          <div className="flex items-center text-xl text-gray-500">
            <p className="mr-3">{read_time} read </p>
            <FontAwesomeIcon icon={faBookmark} />
          </div>
        </div>

        <h2 className="text-4xl font-bold text-black">{title}</h2>
        <div className="flex items-center gap-5 my-6 text-xl text-gray-500">
          <p>#beginners</p>
          <p>#programming</p>
        </div>

        <div>
          <a href="" className="text-[#6047EC] text-xl font-semibold underline">
            Mark as read
          </a>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
