import React, {useState} from 'react'


export default function ReviewModal({submit, exit}){
    const [newReview, updateReview] = useState({
        subject:"",
        poster:"",
        review:"",
        rating: 0,
        created_at: ""
    })

    const handleInput = (event) => updateReview({...newReview, [event.target.name]: event.target.value})

    console.log(newReview)
    return(
        <>
        <div className="filter-layer">
        </div>
        <div className="form-wrapper" >
            <h1>ADD REVIEW</h1>
            <form className="review-form" onSubmit={(newRev)=> submit(newRev)}>
                <label>
                    Rating
                    <select>
                        {Array(5).fill(1).map((one, i)=> <option value={one+1}>{one+i} Stars</option>)}
                    </select>
                </label>
                <label>
                    Review Title
                    <input 
                        name="subject"
                        type="text"
                        onChange={event => handleInput(event)}
                    />
                </label>
                <label>
                    Your Name
                    <input 
                        name="poster"
                        type="text"
                        onChange={event => handleInput(event)}
                    />
                </label>
                <label>
                    Write Your Review Below
                    <textarea 
                        name="review"
                        type="text-field"
                        onChange={event => handleInput(event)}
                    />
                </label>
            </form>
        </div>
        </>
    )
}