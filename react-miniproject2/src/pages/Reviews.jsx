import React, { useState } from 'react';
import Header from '../components/Header';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    const [newReview, setNewReview] = useState('');

    const handleAddReview = () => {
        if (newReview.trim()) {
            setReviews([...reviews, newReview]);
            setNewReview('');
        }
    };

    return (
        <>
            <Header />
            <main>
                <h2>Company and Product Reviews</h2>
                <textarea
                    value={newReview}
                    onChange={(e) => setNewReview(e.target.value)}
                    placeholder="Write your review here"
                ></textarea>
                <button onClick={handleAddReview}>Submit</button>
                <h3>Reviews</h3>
                {reviews.length > 0 ? (
                    <ul>
                        {reviews.map((review, index) => (
                            <li key={index}>{review}</li>
                        ))}
                    </ul>
                ) : (
                    <p>No reviews yet. Be the first to review!</p>
                )}
            </main>
        </>
    );
};

export default Reviews;
