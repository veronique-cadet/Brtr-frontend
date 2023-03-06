import React, { useState, useEffect } from "react";
import ReviewsCard from "./ReviewsCard";

function Reviews({ user, setUser, userProfile }) {
  const [reviews, setReviews] = useState([]);
 

  useEffect(() => {
    fetch("/reveiws")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);
  // ((review?.barter?.recipient_id === review?.reviewee_id) && (review?.barter?.recepient !== user?.id)

console.log(userProfile)



const filteredReviews = reviews?.filter((review) => ((userProfile?.user?.id === review?.reviewee_id) || (user?.id === review?.reviewee_id)));

   

  const reviewCard = filteredReviews.map((review) => {
    return (
      <ReviewsCard
        key={review.id}
        review={review}
        user={user}
        reviews={reviews}
        setReviews={setReviews}
        id={review.id}
     
      />
    );
  });

  console.log(filteredReviews);

  return (
    <div className="my-4 p-3 bg-white rounded-3xl hover:shadow-xl">
      <div className="mb-3 flex items-center space-x-2 font-bold leading-8 text-indigo-700">
        <span clas="text-green-500">
          <svg
            className="h-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            ></path>
          </svg>
        </span>
        <span className="tracking-wide">Reviews</span>
      </div>
      {reviewCard}
    </div>
  );
}

export default Reviews;
