import React, { useState } from "react";
import dayjs from "dayjs";

function ReviewsCard({ review, reviews, user, setReviews, id }) {
  const [helpful, setHelpful] = useState(review?.helpful);

  const fiveStars = "/ten.png";

  console.log(review.rating);

  const stars = () => {
    if (review.rating === 1) {
      return (
        <div className="flex ml-2">
          <img className="h-7" src={fiveStars} />
        </div>
      );
    } else if (review.rating === 2) {
      return (
        <div className="flex ml-2">
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
        </div>
      );
    } else if (review.rating === 3) {
      return (
        <div className="flex ml-2">
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
        </div>
      );
    } else if (review.rating === 4) {
      return (
        <div className="flex ml-2">
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
        </div>
      );
    } else if (review.rating === 5) {
      return (
        <div className="flex ml-2 ">
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
          <img className="h-7" src={fiveStars} />
        </div>
      );
    } else
      return (
        <div className="flex ml-2">
          <img className="h-7" src={fiveStars} />
        </div>
      );
  };

  const handleHelpful = () => {
    const addHelpful = {
      helpful: helpful + 1,
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
        // const updatedHelpful = reviews.map((r) => {
        //   if (r.id === data.id) return { ...r, helpful: data.helpful };
        //   else return r;
        // });
        // setReviews(addHelpful);
      });
  };

  console.log(review?.helpful);

  const dateFormat = dayjs(review?.date).format("dddd MMMM DD, YYYY");

  return (
    <div className="my-4 p-3 bg-slate-100 rounded-3xl hover:shadow-xl">
      <div className="flex items-center space-x-4">
        <img
          className="w-15 h-15 rounded-full"
          src={review?.reviewer?.picture}
          alt="user picture"
        />
        <div className="space-y-1 font-medium text-xl text-indigo-700 ">
          <p>{review?.reviewer?.first_name}</p>
        </div>
      </div>

      <div className="flex items-end ">
        <h3 className=" text-lg font-semibold text-gray-900 ">
          {review?.tile}
        </h3>
        {stars()}
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
          {helpful} people found this helpful
        </p>
        <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 ">
          <button
            onClick={() => {
              handleHelpful(setHelpful(helpful + 1));
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
