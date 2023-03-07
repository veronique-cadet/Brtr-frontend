import React, { useState, useEffect } from "react";
import dayjs from "dayjs";

function CalCompleteCard({ calendar, user, id, calendars, setCalendars }) {
  const [isClicked, setIsClicked] = useState(true);
  const [reviews, setReviews] = useState([])
  const [rating, setRating] = useState("")
  const [title, setTitle] = useState("")
  const [comment, setComment] = useState("")

  useEffect(() => {
    fetch("/reveiws")
      .then((response) => response.json())
      .then((data) => {
        setReviews(data);
        console.log(data);
      });
  }, []);

  const dateFormat = dayjs(calendar?.date).format('dddd MMMM DD, YYYY')
  const timeFormat = dayjs.unix(calendar?.time).format('h:mm A')

  let date = new Date()
  

  const reviewee = calendar?.scheduling_user_id === user?.id
  ? calendar?.recipient_user?.id
  : calendar?.recipient_user_id === user?.id
  ? calendar?.scheduling_user?.id
  : null 

  console.log(reviewee)
  console.log(calendar?.user_skill?.id)
  console.log(calendar?.barter?.id)

  const newReview ={
    reviewer_id: user?.id,
    reviewee_id: reviewee,
    user_skill_id: calendar?.user_skill?.id,
    rating: rating,
    tile: title,
    comment: comment,
    calendar_id: calendar?.id,
    barter_id: calendar?.barter?.id,
    review_date: date,
    helpful: 0
  }


  const handleSubmit = () => {
    fetch("/reveiws", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newReview),
    })
      .then((response) => response.json())
      .then(() => {
        setReviews([...reviews, newReview]);
        console.log(newReview)
      });
  };

  return (
    <div>
      {isClicked ? (
        <div className="mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100 hover:shadow-xl">
          <div className="flex justify-center mb-5">
            <p className="text-2xl font-bold">
              {" "}
              {calendar?.scheduling_user_id === user?.id
                ? "You"
                : calendar?.scheduling_user?.first_name}{" "}
              completed a lesson with&nbsp;
            </p>

            <p className="text-2xl    font-bold">
              {calendar?.recipient_user_id === user?.id
                ? "You"
                : calendar?.recipient_user?.first_name}
            </p>
          </div>
          <div className="flex justify-center mb-1">
            <p className="text-2xl text-indigo-700  ">{dateFormat} </p>
          </div>
          <p className="font-extrabold mb-5 flex justify-center text-2xl text-transparent transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-text from-indigo-500 via-orange-500 to-indigo-500 animate-text hover:scale-110">
            {timeFormat}
          </p>
          <div className="flex justify-center ">
            <p className="text-2xl font-normal">
              {calendar?.user_skill?.name} Lesson
            </p>
          </div>
          <div className="flex justify-center mb-5">
            <p className="text-indigo-700 text-xl font-bold">
              {calendar?.hours === 1
                ? calendar?.hours + " hour"
                : calendar?.hours + " hours"}
            </p>
          </div>

          <div className="flex justify-center">
            <button
              onClick={() => setIsClicked(!isClicked)}
              className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1"
            >
              Leave A Review!
            </button>
          </div>
        </div>
      ) : (
        <div className="mx-auto mt-5 p-10 h-full w-4/6 hover:bg-slate-200 bg-opacity-70 rounded-xl transition ease-in-out duration-200 bg-slate-100 hover:shadow-xl">
          <div className="flex-col justify-start mb-10">
            <div className="flex justify-evenly">
              <div className="flex ">
                <p className="text-xl font-bold text-indigo-500">
                  Skill:&nbsp;
                </p>
                <p className="text-xl">{calendar?.user_skill?.name}</p>
              </div>
              <div className="flex ">
                <p className="text-xl font-bold text-indigo-500">
                  Review For:&nbsp;
                </p>
                <p className="text-xl">
                  <p className="text-xl">
                    {calendar?.scheduling_user_id === user?.id
                      ? calendar?.recipient_user?.first_name
                      : calendar?.recipient_user_id === user?.id
                      ? calendar?.scheduling_user?.first_name
                      : null}
                  </p>
                </p>
              </div>
              <div className="flex">
                <p className="text-xl font-bold text-indigo-500">
                  Rating:&nbsp;
                </p>{" "}
                <input
                  className="w-full px-1 py-1 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input"
                  type="number"
                  max="5"
                  min="1"
                  value={rating}
                  onChange={(e)=> setRating(e.target.valueAsNumber)}
                />
              </div>
            </div>
            <div className="flex-col justify-center mt-5 ">
              <div className="flex justify-center">
                <p className="text-xl font-bold text-indigo-500">
                  Title:&nbsp;
                </p>{" "}
                <input
                  className="w-5/6 px-1 py-1 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input"
                  type="text"
                  value={title}
                  onChange={(e)=> setTitle(e.target.value)}
                />
              </div>
              <p className=" mt-5 flex justify-center text-xl font-bold text-indigo-500 mb-2">
                Skill Description:&nbsp;
              </p>{" "}
              <textarea 
              value={comment}
              onChange={(e)=> setComment(e.target.value)}
              className="block w-full h-64 p-6 text-base text-slate-900 font-normal outline-none focus:border-amber-500 border border-slate-200 rounded-lg shadow-input resize-none"></textarea>
            </div>
          </div>

          <div className="flex justify-center">
            <button 
            onClick={ ()=> {setIsClicked(!isClicked)
            handleSubmit()
            }}
              
            className="inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1">
              Submit Review
            </button>
            <button
              onClick={() => setIsClicked(!isClicked)}
              className=" ml-7 inline-block px-6 py-3 leading-none text-white rounded shadow bg-amber-500 hover:bg-indigo-600 hover:-translate-y-1"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default CalCompleteCard;
