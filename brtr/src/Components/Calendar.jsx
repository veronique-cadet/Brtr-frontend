

import dayjs from "dayjs";
import React, { useState } from "react"
import cn from "./cn";
import { GrFormNext, GrFormPrevious } from "react-icons/gr";
import NavBarTwo from "./NavBarTwo";
import Footer from "./Footer";
import { Link } from "react-router-dom"

export default function Calendar({setUser, user}) {

  const generateDate = (
        month = dayjs().month(),
        year = dayjs().year()
      ) => {
        const firstDateOfMonth = dayjs().year(year).month(month).startOf("month");
        const lastDateOfMonth = dayjs().year(year).month(month).endOf("month");
      
        const arrayOfDate = [];
      
        // create prefix date
        for (let i = 0; i < firstDateOfMonth.day(); i++) {
          const date = firstDateOfMonth.day(i);
      
          arrayOfDate.push({
            currentMonth: false,
            date,
          });
        }
      
        // generate current date
        for (let i = firstDateOfMonth.date(); i <= lastDateOfMonth.date(); i++) {
          arrayOfDate.push({
            currentMonth: true,
            date: firstDateOfMonth.date(i),
            today:
              firstDateOfMonth.date(i).toDate().toDateString() ===
              dayjs().toDate().toDateString(),
          });
        }
      
        const remaining = 42 - arrayOfDate.length;
      
        for (
          let i = lastDateOfMonth.date() + 1;
          i <= lastDateOfMonth.date() + remaining;
          i++
        ) {
          arrayOfDate.push({
            currentMonth: false,
            date: lastDateOfMonth.date(i),
          });
        }
        return arrayOfDate;
      };
      
     const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ];

	const days = ["S", "M", "T", "W", "T", "F", "S"];
	const currentDate = dayjs();
	const [today, setToday] = useState(currentDate);
	const [selectDate, setSelectDate] = useState(currentDate);
	return (
      <div>
       <div className="h-screen w-screen">
        <NavBarTwo setUser={setUser}/>
    <p className="mb-6 pt-24 text-sm text-indigo-600 text-center font-bold uppercase tracking-px">{user?.first_name} {user?.last_name}</p>
    <h2 className="mb- text-6xl md:text-8xl xl:text-10xl text-center font-bold font-heading tracking-px-n leading-none">Your Calendar</h2>

    {/* //nav for barters// */}
    <section className="py-4 overflow-hidden ">
  <div className="container px-4 mx-auto">
    <div className="relative flex justify-center">
      <div className="relative z-10 inline-flex flex-wrap items-center -m-5">
      <button className="pt-5 pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500 " >Schedule a Bartr</button>
      <Link to="/yourprofile">
      <button className=" pt-5 ml-7 pb-10 group relative flex-col items-center text-lg text-indigo-600  hover:text-transparent font-bold bg-clip-text hover:bg-gradient-to-r from-amber-500">Scheduled Barters</button></Link>
  </div>
      <div className="absolute mt-10 bottom-0 left-0 w-full h-0.5 bg-neutral-100"></div>
    </div>
  </div>
</section>
		<div className="flex gap-10  sm:divide-x  sm:w-1/2 mx-auto w-screen mt-15">
			<div className="w-screen">
				<div className="flex justify-between items-center w-9/12">
					<h1 className="select-none font-semibold">
						{months[today.month()]}, {today.year()}
					</h1>
					<div className="flex gap-10 items-center ">
						<GrFormPrevious
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() - 1));
							}}
						/>
						<h1
							className=" text-amber-700 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(currentDate);
							}}
						>
							Today
						</h1>
						<GrFormNext
							className="w-5 h-5 cursor-pointer hover:scale-105 transition-all"
							onClick={() => {
								setToday(today.month(today.month() + 1));
							}}
						/>
					</div>
				</div>
				<div className="grid grid-cols-7 ">
					{days.map((day, index) => {
						return (
							<h1
								key={index}
								className="text-sm text-center h-14 w-14 grid place-content-center text-slate-500 select-none"
							>
								{day}
							</h1>
						);
					})}
				</div>

				<div className=" grid grid-cols-7 ">
					{generateDate(today.month(), today.year()).map(
						({ date, currentMonth, today }, index) => {
							return (
								<div
									key={index}
									className="p-2 text-center h-14 grid place-content-center text-sm border-t"
								>
									<h1
										className={cn(
											currentMonth ? "" : "text-slate-400",
											today
												? "transition duration-500 ease-in-out font-heading bg-gradient-to-r bg-clip-border from-indigo-500 via-orange-500 to-indigo-500 animate-text text-white"
												: "",
											selectDate
												.toDate()
												.toDateString() ===
												date.toDate().toDateString()
												? "bg-indigo-500 text-white"
												: "",
											"h-10 w-10 rounded-full grid place-content-center hover:bg-indigo-500 hover:animate-pulse hover:text-white transition-all cursor-pointer select-none"
										)}
										onClick={() => {
											setSelectDate(date);
										}}
									>
										{date.date()}
									</h1>
								</div>
							);
						}
					)}
				</div>
			</div>
			<div className="h-96 w-5/6 sm:px-5">
				<h1 className=" font-semibold">
					Schedule for {selectDate.toDate().toDateString()}
				</h1>
				<p className="text-indigo-700">No meetings for today.</p>
			</div>
		</div>
      
        </div>
        <Footer />
        </div>
	);
}