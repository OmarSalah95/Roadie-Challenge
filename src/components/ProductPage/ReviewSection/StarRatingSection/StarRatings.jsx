import React from 'react';
import RatingBadge from '../../../global/RatingBadge/RatingBadge';

export default function StarRating({revArr}){
    let total = 0
    if (revArr.length){
        total = revArr.reduce((total, {rating})=> rating + total, 0)
    }
    let avgRating = Math.round(total/revArr.length)

    const getOccurancePercentage = (target) =>{
        const count = revArr.reduce((counter, {rating}) => rating === target ? counter+1 : counter,0)
        return String((count/revArr.length)*100)
    } 
        
    return(
        <div className="star-ratings">
            <p><RatingBadge rating={avgRating} /> {avgRating} out of 5</p>
            <p >{revArr.length} Reviews</p>
            {Array(5).fill(5).map((five, i)=>{
                return(
                <div className="rating-bar">
                    <span className="filter-link">{five-i} Star</span>
                    <div className="percentage-box">
                        <div className="percentage-fill" style={{width: getOccurancePercentage(five-i)+"%", height:"99%"}}></div>
                    </div>
                </div>
                )
                
            })
            }
        </div>
    )
}