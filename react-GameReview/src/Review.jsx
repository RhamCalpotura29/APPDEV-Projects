import React, { useState } from 'react';

export default function Reviews() {
  const [reviews, setReviews] = useState([]);
  const [reviewText, setReviewText] = useState("");
  const [gameTitle, setGameTitle] = useState("");

  const handleAddReview = () => {
    if (gameTitle && reviewText) {
      const newReview = {
        title: gameTitle,
        text: reviewText,
        date: new Date().toLocaleDateString(),
      };
      setReviews([...reviews, newReview]);
      setGameTitle("");
      setReviewText("");
    }
  };

  return (
    <div className="review-container">
      <h2>Game Reviews</h2>
      <div className="form-group">
        <label>Game Title:</label>
        <input
          type="text"
          value={gameTitle}
          onChange={(e) => setGameTitle(e.target.value)}
          placeholder="Enter game title"
        />
      </div>
      <div className="form-group">
        <label>Review:</label>
        <textarea
          value={reviewText}
          onChange={(e) => setReviewText(e.target.value)}
          placeholder="Write your review"
        />
      </div>
      <button type="button" onClick={handleAddReview}>Add Review</button>

      <div className="review-list">
        <h3>All Reviews</h3>
        {reviews.map((review, index) => (
          <div key={index} className="review-item">
            <h4>{review.title}</h4>
            <p>{review.text}</p>
            <span>{review.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
