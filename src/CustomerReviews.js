import React from 'react';
import './CustomerReviews.css'; 
import Slider from 'react-slick';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Christopher Eyre",
    date: "May 23, 2024",
    content: "They showed up on time and they did a great job on our driveway and sidewalk.  Will definitely use them again.",
    rating: 5
  },
  {
    id: 2,
    name: "Sara Trindade",
    date: "June 11, 2024",
    content: "They did our walkway, patio, deck and deck furniture. They came on time when they said they would, spent all day working hard, everything looks bright and so much better. Good price for the amount of time and effort they put in. Will use them again!",
    rating: 5
  },
  {
    id: 3,
    name: "Dan Reiss",
    date: "June 10, 2024",
    content: "They showed up on time, did a very deep clean and worked with me to move a bunch of bulky items out of the way. Everything looks bright and new again. I would hire them again next year.",
    rating: 5
  },
  {
    id: 4,
    name: "Jessica Satin Zurita",
    date: "June 19, 2024",
    content: "We had an excellent experience with A&A - highly recommend! 10/10",
    rating: 5
  }
];

function CustomerReviews() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true
  };

  return (
    <div className="review-container">
      <h2>Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map(review => (
          <div key={review.id} className="review">
            <h3>{review.name} - <span>{review.date}</span></h3>
            <p>{review.content}</p>
            <p>Rating: {'★'.repeat(review.rating)}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default CustomerReviews;
