import React from 'react';
import Card from './Card.jsx';
import reviews from '../data.js';
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi';
import {useState} from 'react';

function Testimonials (props) {
  let reviews = props.reviews;
  const [index, setIndex] = useState (0);
  function leftHandler () {
    if (index - 1 < 0) {
      setIndex (reviews.length - 1);
    } else {
      setIndex (index - 1);
    }
  }
  function rightHandler () {
    if (index + 1 >= reviews.length) {
      setIndex (0);
    } else {
      setIndex (index + 1);
    }
  }
  function surpriseHandler () {
    setIndex (Math.floor (Math.random () * reviews.length));
  }
  return (
    <div className="flex flex-col w-[85vw] md:w-[700px] bg-white justify-center items-center mt-10 p-10 transition-all duration-700 hover:shadow-xl rounded-md">
      <Card review={reviews[index]} />
      <div className="flex text-3xl mt-10 gap-3 text-violet-400 font-bold mx-auto">
        <button className="cursor-pointer hover:text-violet-500">
          {<FiChevronLeft onClick={leftHandler} />}
        </button>
        <button className="cursor-pointer hover:text-violet-500">
          {<FiChevronRight onClick={rightHandler} />}
        </button>
      </div>
      <div className="mt-6">
        <button
          className="bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white text-lg"
          onClick={surpriseHandler}
        >
          Surprise Me
        </button>
      </div>
    </div>
  );
}
export default Testimonials;
