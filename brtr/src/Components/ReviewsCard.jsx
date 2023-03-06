import React from 'react'

function ReviewsCard() {
  return (
    <div>
    <div className="flex items-center mb-4 space-x-4">
    <img className="w-10 h-10 rounded-full" src="./vero.png" alt=""/>
    <div className="space-y-1 font-medium dark:text-white">
        <p>Jese Leos </p>
    </div>
</div>
<div className="flex items-center">
<h3 className=" text-lg font-semibold text-gray-900 dark:text-white">Thinking to buy another one!</h3>
</div>
<div className="mb-">
<p className="text-indigo-700">Reviewed on <time datetime="2017-03-03 19:00">March 3, 2017</time></p>
</div>
<p className="mb-2 overflow-scroll font-light text-gray-500 dark:text-gray-400 ">This is my third Invicta Pro Diver. They are just fantastic value for money. This one arrived yesterday and the first thing I did was set the time, popped on an identical strap from another Invicta and went in the shower with it to test the waterproofing.... No problems.</p>
<aside>
    <p className="mt-1 text-xs text-gray-500 dark:text-gray-400">19 people found this helpful</p>
    <div className="flex items-center mt-3 space-x-3 divide-x divide-gray-200 dark:divide-gray-600">
        <button className="text-white bg-amber-500 border focus:outline-none hover:bg-indigo-500 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-xs px-2 py-1.5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">Helpful</button>
    </div>
</aside>
</div>
  )
}

export default ReviewsCard