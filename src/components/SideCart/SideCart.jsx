import React from "react";

const SideCart = ({ timeSpent, totalBookmark, titles }) => {
  return (
    <div>
      <div className="py-6 border border-[#6047EC] rounded-xl text-center bg-[#6047ec1a]">
        <h2 className="text-[#6047EC] text-2xl font-bold p-3">
          Spent time on read : {timeSpent} min
        </h2>
      </div>

      <div className="p-7 bg-[#1111110d] rounded-xl mt-6">
        <h3 className="text-2xl font-bold">
          Bookmarked Blogs : {totalBookmark.length}
        </h3>

        <div>
          {titles.map((title) => (
            <h3 className="font-semibold text-lg p-5 bg-white mt-4 rounded-xl">
              {title}
            </h3>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideCart;
