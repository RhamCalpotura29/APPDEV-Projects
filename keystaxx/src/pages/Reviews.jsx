import React, { useState } from 'react';

const Reviews = () => {
  // Static reviews added directly to the state
  const staticReviews = [
    { name: 'John Doe', rating: 5, reviewText: 'Excellent product! I love it.' },
    { name: 'Jane Smith', rating: 4, reviewText: 'Very good, but could improve the battery life.' },
    { name: 'Chris Johnson', rating: 3, reviewText: 'It’s okay, but not as expected.' },
    { name: 'Emily Davis', rating: 5, reviewText: 'Absolutely fantastic! Highly recommend to everyone.' },
    { name: 'Michael Brown', rating: 4, reviewText: 'Great product, but shipping was a bit slow.' },
    { name: 'Sophia Wilson', rating: 2, reviewText: 'Not satisfied. The quality didn’t match the price.' },
    { name: 'Daniel Martinez', rating: 4, reviewText: 'Solid performance and great design.' },
    { name: 'Olivia Taylor', rating: 5, reviewText: 'Exceeded my expectations. Will buy again!' },
    { name: 'James Anderson', rating: 3, reviewText: 'Average experience. Could be better with updates.' },
    { name: 'Isabella Thomas', rating: 1, reviewText: 'Terrible product. I want a refund.' },
    { name: 'William Harris', rating: 4, reviewText: 'Good overall, but the instructions were confusing.' },
    { name: 'Ava Lee', rating: 5, reviewText: 'Perfect! Great value for money.' }
  ];

  const [reviews, setReviews] = useState(staticReviews); // Initialize with static reviews
  const [name, setName] = useState('');
  const [rating, setRating] = useState(5);
  const [reviewText, setReviewText] = useState('');

  const handleAddReview = () => {
    setReviews([...reviews, { name, rating, reviewText }]); // Add dynamic review to the list
    setName('');
    setRating(5);
    setReviewText('');
  };

  return (
    <div className="reviews-page">
      <h1>Customer Reviews</h1>

      <form className="review-form">
        <input
          type="text"
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="number"
          min="1"
          max="5"
          placeholder="Rating (1-5)"
          value={rating}
          onChange={(e) => setRating(e.target.value)}
        />
        <textarea
          placeholder="Write your review"
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
        />
        <button type="button" onClick={handleAddReview}>Add Review</button>
      </form>

      <div className="reviews-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <h3>{review.name}</h3>
            <p>Rating: {review.rating} / 5</p>
            <p>{review.reviewText}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
