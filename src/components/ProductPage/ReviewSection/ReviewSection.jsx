// This Component is going to orchestrate sub-components of the customer review section
import React from 'react'
import StarRatings from './StarRatings/StarRatings.jsx'

export default function ReviewSection({revArr}){

    return(
        <>
            <h2>Customer Reviews</h2>
            <section className="Review-Section">
                <StarRatings revArr={revArr} />
                <div className="temp" style={ {width:"65%",height:"250px", border:"1px solid black"} }>
                    Temporary place holder for Review cards
                </div>
            </section>
        </>
    )
}