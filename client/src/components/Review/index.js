import React, { useState } from 'react';
/*
ReviewForm: Allows users to add reviews for artists or venues
*/
const ReviewForm = ({ addReview }) => {
  const [reviewType, setReviewType] = useState('artist');
  const [selectedName, setSelectedName] = useState('');
  const [reviewText, setReviewText] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to the backend
      const response = await fetch('http://localhost:5000/add-review', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          reviewType,
          name: selectedName,
          review: reviewText,
        }),
      });

      if (response.ok) {
        // If the response is successful, update the UI or do other tasks
        const result = await response.json();
        console.log(result);
      } else {
        // Handle error cases
        console.error('Error adding review');
      }
    } catch (error) {
      console.error('Error:', error);
    }

    setSelectedName('');
    setReviewText('');
  };

  return (
    <div className='PageContainer'>
      <form onSubmit={handleSubmit}>
        <h2>Add Review</h2>
        <div>
          <label>Select Review Type:</label>
          <select
            value={reviewType}
            onChange={(e) => setReviewType(e.target.value)}
          >
            <option value="artist">Artist</option>
            <option value="venue">Venue</option>
          </select>
        </div>
        <div>
          <label>Select {reviewType === 'artist' ? 'Artist' : 'Venue'}:</label>
          <input
            type="text"
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Add Review:</label>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            rows={6}
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>
    </div>
  );
};

export default ReviewForm;
