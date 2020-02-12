import React from 'react';
import RatingBadge from '../../../global/RatingBadge/RatingBadge';

export default function StarRating({revArr}){
    let total = 0
    if (revArr.length){
        total = revArr.reduce((total, {rating})=> rating + total, 0)
    }
     let avgRating = Math.round(total/revArr.length)
    
    return(
        <div className="star-ratings">
            <p><RatingBadge rating={avgRating} /> {avgRating} out of 5</p>
            <p >{revArr.length} Reviews</p>
        </div>
    )
}