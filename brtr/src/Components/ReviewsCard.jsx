import React from "react";

function ReviewsCard({ review, reviews, user, setReviews, id }) {
  return (
    <div className="my-4 p-3 bg-slate-100 rounded-3xl hover:shadow-xl">
      <div className="flex items-center mb-4 space-x-4">
        <img
          className="w-15 h-15 rounded-full"
          src={review?.reviewer?.picture}
          alt="user picture"
        />
        <div className="space-y-1 font-medium text-xl text-indigo-700 ">
          <p>{review?.reviewer?.first_name}</p>
        </div>
      </div>
      <div className="flex items-center">
        <h3 className=" text-lg font-semibold text-gray-900 ">
        {review?.tile}
        </h3>
      </div>
      <div className="mb-">
        <p className="text-indigo-700">
          Reviewed on {review?.review_date}
        </p>
      </div>
      <p className="mb-2 overflow-scroll font-light text-gray-500 "> {review?.comment} </p>
      <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
        {review?.helpful} people found this helpful
        </p>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 ">
          <button className="bg-gradient-to-r bg-clip-border from-indigo-300 via-orange-300 to-indigo-300 animate-text border shadow-dashboard hover:bg-indigo-500  font-medium rounded-lg text-xs px-2 py-1.5 text-white hover:scale-125 ">
            Helpful
          </button>
        </div>
      </aside>
    </div>
  );
}

export default ReviewsCard;
