import React, { useState } from 'react';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Rating } from "@mui/material";



export default function Review() {
  const [reviews, setReviews] = useState([]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [value, setValue] = useState(0);


  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0) {
      alert("Please provide a rating");
      return;
    }
    const newReview = {
      name,
      email,
      rating,
      comment
    };
    setReviews([...reviews, newReview]);
    setName('');
    setEmail('');
    setRating(0);
    setComment('');
    setValue(0)
  };
  

  return (
    <div>
      <section id="testimonials">
        <div className="testimonial-heading m-1">
          <h6 >Reviews</h6>
        </div>
        <div className="testimonial-box-container">
          {reviews.map((review, index) => (
            <div className="testimonial-box border-bottom border-2" key={index}>
              <div className="box-top">
                <div className="profile">
                  <div className="profile-img">
                    <img src="https://cdn3.iconfinder.com/data/icons/avatars-15/64/_Ninja-2-512.png" alt="avatar" />
                  </div>
                  <div className="name-user">
                    <strong>{review.name}</strong>
                    <span>{review.email}</span>
                    <div className="client-comment mt-2">
                      <p>" {review.comment} "</p>
                    </div>
                  </div>
                </div>
                <div className="reviews">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <FontAwesomeIcon
                  key={index}
                  icon={faStar}
                 
                />
                  ))}
                </div>
              </div>
            </div>
          ))}

         
            <form onSubmit={handleSubmit} className=' container align-items-start ms-1'>
            <div className="form-group row" >
               
                  <span className=' mb-2 p-0 '  htmlFor="rating">Your Rating: 
                  <Rating
                  name="simple-controlled"
                  size="small"
                  className=' align-items-start m-2 '
                  style={{ color: "gold" }}
                  value={value}
                  onChange={(star, newValue) => {
                    setValue(newValue);
                    setRating(newValue)
                    
                  }}  
                />
                  </span>
                  
              
                
              </div>
              <div className="form-group row mb-2">
                
                <textarea id="comment"  className='border border-2 rounded-0 col p-3 ' placeholder='Your Review' value={comment} onChange={(e) => setComment(e.target.value)} required></textarea>
              </div>
              <div className='form-group row mb-2 gap-2'>
       
                
                <input type="text"  className='col border border-2 p-2 ' id="name" placeholder='Full Name' value={name} onChange={(e) => setName(e.target.value)} required />
                
             
               
                <input type="email" id="email" className='col border border-2 p-2 ' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
         
              </div>
              <div className="mb-3 form-check container ps-3">
                <input type="checkbox" className="form-check-input rounded-0 check" id="Check1"/>
                <label className="form-check-label text-muted" for="Check1">Save my name, email and website in this browser for the next time I comment. </label>
              </div>
              <button type="submit" className='btn btn-dark border rounded-0 row'>Submit Review</button>
            </form>
          </div>
        
      </section>
    </div>
  );
}
