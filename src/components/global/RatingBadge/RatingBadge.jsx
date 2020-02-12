import React from 'react'

export default function RatingBadge({rating}){
    return(
        <>
            {
                rating == 1
                    ?  <span className="rating-badge">★☆☆☆☆</span>
                : rating == 2
                    ? <span className="rating-badge">★★☆☆☆</span>
                : rating == 3
                    ? <span className="rating-badge">★★★☆☆</span>
                : rating == 4
                    ? <span className="rating-badge">★★★★☆</span>
                : rating == 5
                    ? <span className="rating-badge">★★★★★</span>
                : <p>☆☆☆☆☆</p> 
            }
        </>
    )
}