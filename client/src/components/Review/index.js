import React, { useEffect, useState } from 'react';
import axios from 'axios';
import  './style.css';

/*
ReviewForm: Allows users to add reviews for artists or venues
*/
const ReviewForm = ({ addReview }) => {
  const [reviewType, setReviewType] = useState('artist');
  const [selectedName, setSelectedName] = useState('');
  const [reviewText, setReviewText] = useState('');
  const [names, setNames] = useState([]);
  const [existingReviews, setExistingReviews] = useState([]);
  const [showAddReviewForm, setShowAddReviewForm] = useState(false);

  const fetchExistingReviews = async (name) => {
    if (!selectedName) {
      setExistingReviews([]); // Clear existing reviews if no name is selected
      return;
    }
    try {
      const response = await axios.get(`http://localhost:5000/${reviewType}/reviews/${name}`);
      if (response.status === 200) {
        setExistingReviews(response.data); // Update state with existing reviews
      } else {
        console.error('Failed to fetch existing reviews');
      }
    } catch (error) {
      console.error('Error fetching existing reviews:', error);
    }
  };

  const handleAddReviewClick = () => {
    setShowAddReviewForm(true); // Show the review input form
  };

  const handleCancelClick = () => {
    setShowAddReviewForm(false); // Hide the review input form
    setReviewText(''); // Clear the review text
  };

  const handleSubmitReview = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`http://localhost:5000/${reviewType}/reviews/${selectedName}`, {
        review: reviewText,
      });

      if (response.status === 200) {
        // Update existing reviews after successful submission
        setExistingReviews([...existingReviews, reviewText]);
        setReviewText(''); // Clear review text after submission
        setShowAddReviewForm(false); // Hide the add review form
      } else {
        console.error('Failed to add review');
      }
    } catch (error) {
      console.error('Error adding review:', error);
    }
  };
  
  const handleReviewTypeChange = (type) => {
    setReviewType(type);
    console.log("The review type is "+type); // Check the data received
    setSelectedName(''); // Reset selected name when review type changes
    setExistingReviews([]); // Clear existing reviews 
  };

  useEffect(() => {
    // Fetch artist or venue names based on reviewType
    const fetchNames = async () => {
      axios.get(`http://localhost:5000/${reviewType}/all`)
      .then(response => {
        //console.log("fetchNames "+response.data); 
        setNames(response.data); // Update state with the fetched data
      })
      .catch(error => {
        console.error('There was a problem with the axios get request:', error);
      });
    };

    fetchNames();
  }, [reviewType]);

  useEffect(() => {
    if (selectedName) {
      fetchExistingReviews(selectedName);
    }
  }, [selectedName]);

  return (
    <div className='PageContainer'>
        <h2>Review</h2>

        {/* Select Review Type */}
        <div>
          <label>Select Review Type:</label>
          <select
            value={reviewType}
            onChange={(e) => handleReviewTypeChange(e.target.value)}
          >
            <option value="artist">Artist</option>
            <option value="venue">Venue</option>
          </select>
        </div>

        {/* Select Artist or Venue */}
        <div>
          <label>Select {reviewType === 'artist' ? 'Artist' : 'Venue'}:</label>
          <select
            value={selectedName}
            onChange={(e) => setSelectedName(e.target.value)}
            required
          >
            <option value="">Select {reviewType === 'artist' ? 'Artist' : 'Venue'}</option>
            {names && names.map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
          </select>
        </div>

        {/* Display existing reviews */}
        <div>
          <h3>Reviews for {selectedName}</h3>
          <ul>
            {existingReviews && existingReviews.map((review, index) => (
              <li key={index}>{review}</li>
            ))}
          </ul>
        </div>

        {/* Add Review Button */}
      {!showAddReviewForm && (
        <div className="addReviewButton">
          <button onClick={() => setShowAddReviewForm(true)}>Add Review</button>
        </div>
      )}

      {/* Add Review Form */}
      {showAddReviewForm && (
        <div className="addReviewForm">
          <form onSubmit={handleSubmitReview}>
          <textarea
              className="textAreaReview" // Add the class to style the textarea
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
              rows={6}
              required
            />
            <div className="buttonGroup">
              <button type="submit">Submit Review</button>
              <button onClick={() => handleCancelClick()}>Cancel</button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReviewForm;
