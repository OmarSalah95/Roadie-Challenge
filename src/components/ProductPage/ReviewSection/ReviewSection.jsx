// This Component is going to orchestrate sub-components of the customer review section
import React from 'react'
import StarRatings from './StarRatingSection/StarRatings.jsx'
import ReviewCard from './ReviewCard/ReviewCard.jsx'

export default function ReviewSection({revArr, filterReviews, filteredReviews}){

    return(
        <>
            <h2>Customer Reviews</h2>
            <section className="Review-Section">
                <StarRatings revArr={revArr} filterReviews={filterReviews}/>
                <div className="review-list-container">
                    {
                        filteredReviews.length >0
                            ? filteredReviews.map((review,i) => <ReviewCard key={i} review = {review}/>)
                            : revArr.map((review,i) => <ReviewCard key = {i}review = {review}/>)
                    }
                </div>
            </section>
        </>
    )
}