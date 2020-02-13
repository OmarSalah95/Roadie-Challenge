import React, {useState} from 'react'


export default function ReviewModal({submit, exit}){
    const [newReview, updateReview] = useState({
        subject:"",
        poster:"",
        review:"",
        rating: 1,
        created_at: ""
    })

    const handleInput = (event) => updateReview({...newReview, [event.target.name]: event.target.value})

    return(
        <>
        <div className="filter-layer">
        </div>
        <div className="form-wrapper" >
            <p className="exit-btn" onClick={() => exit()}>X</p>
            <form className="review-form" onSubmit={(event)=> submit(event, newReview)} >
            <h1>ADD REVIEW</h1>
                <label>
                    Rating
                    <br/>
                    <select onChange={event =>handleInput(event)}  name="rating" required >
                        {Array(5).fill(1).map((one, i)=> <option value={one+i}>{one+i} Stars</option>)}
                    </select>
                </label>
                <label>
                    Review Title
                    <br/>
                    <input 
                        required
                        name="subject"
                        type="text"
                        onChange={event => handleInput(event)}
                    />
                </label>
                <label>
                    Your Name
                    <br/>
                    <input
                        required 
                        name="poster"
                        type="text"
                        onChange={event => handleInput(event)}
                    />
                </label>
                <label>
                    Write Your Review Below
                    <br/>
                    <textarea
                        required
                        name="review"
                        type="text-field"
                        onChange={event => handleInput(event)}
                    />
                </label>
                <div className="button-container">
                    <button className="cancel-btn" onClick={() => exit()}>Cancel</button>
                    <button className="submit-btn" type="submit" >Submit</button>
                </div>
            </form>
        </div>
        </>
    )
}