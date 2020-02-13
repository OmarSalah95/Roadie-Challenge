import React from 'react'
import RatingBadge from '../../../global/RatingBadge/RatingBadge';

export default function ReviewCard({review}){
    return( 
        <div className="review-card">
            <div className="summary">
                <div className="summary-content-wrapper">
                    <h3>{review.subject}</h3>
                    <p className="poster-data">by {review.poster} on {review.created_at}</p>
                </div>
                <RatingBadge rating={review.rating}/>
            </div>
            <p>{review.review}</p>
        </div> 
    )
}