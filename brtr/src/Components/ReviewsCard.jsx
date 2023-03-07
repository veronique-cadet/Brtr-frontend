import React, { useState } from "react";
import dayjs from "dayjs";

function ReviewsCard({ review, reviews, user, setReviews, id }) {
  const [helpful, setHelpful] = useState("");

  const handleHelpful = () => {
    const addHelpful = {
      helpful: helpful,
    };

    fetch(`/reveiws/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(addHelpful),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        const updatedHelpful = reviews.map((r) => {
          if (r.id === data.id) return { ...r, helpful: data.helpful };
          else return r;
        });
        setReviews(updatedHelpful);
      });
  };

  console.log(review?.helpful);

  const dateFormat = dayjs(review?.date).format("dddd MMMM DD, YYYY");

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
        <h3 className=" ml-5 text-medium font-semibold text-gray-900 ">
          {review?.rating}/5
        </h3>
      </div>
      <div className="mb-">
        <p className="text-indigo-700">Reviewed on {dateFormat}</p>
      </div>
      <p className="mb-2 overflow-scroll font-light text-gray-500 ">
        {" "}
        {review?.comment}{" "}
      </p>
      <aside>
        <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">
          {review?.helpful} people found this helpful
        </p>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 ">
          <button
            onClick={() => {
              setHelpful(review?.helpful + 1);
              handleHelpful();
            }}
            className="bg-gradient-to-r bg-clip-border from-indigo-300 via-orange-300 to-indigo-300 animate-text border shadow-dashboard hover:bg-indigo-500  font-medium rounded-lg text-xs px-2 py-1.5 text-white hover:scale-125 "
          >
            Helpful
          </button>
        </div>
      </aside>
    </div>
  );
}

export default ReviewsCard;
