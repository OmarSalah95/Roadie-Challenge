// This Component is going to orchestrate sub-components of the customer review section
import React from 'react'
import StarRatings from './StarRatingSection/StarRatings.jsx'
import ReviewCard from './ReviewCard/ReviewCard.jsx'

export default function ReviewSection({revArr}){

    return(
        <>
            <h2>Customer Reviews</h2>
            <section className="Review-Section">
                <StarRatings revArr={revArr} />
                <div className="review-list-container">
                    {revArr.map(review => <ReviewCard review = {review}/>)}
                </div>
            </section>
        </>
    )
}