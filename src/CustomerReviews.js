import React from 'react';
import './CustomerReviews.css'; 
import Slider from 'react-slick';  
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "John Doe",
    date: "April 15, 2024",
    content: "The service was fantastic! Very professional and thorough. Highly recommend.",
    rating: 5
  },
  {
    id: 2,
    name: "Jane Smith",
    date: "April 20, 2024",
    content: "Incredible results on our deck and driveway. They look brand new!",
    rating: 5
  },
  {
    id: 3,
    name: "Alice Johnson",
    date: "April 22, 2024",
    content: "Very satisfied with the power washing. Quick and efficient!",
    rating: 4
  },
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
