import React, { useState, useEffect } from 'react'
import ProductCard from '../../components/ProductPage/ProductCard'
import ReviewSection from '../../components/ProductPage/ReviewSection/ReviewSection'
import ReviewModal from '../../components/ProductPage/ReviewModal/ReviewModal'

export default function ProductPage() {
    const [state, setState] = useState({reviews:[], modal_active: false})

    // Use Effect will simulate my Server request to recieve the needed data and set it to state
    const date = new Date()
    let formatted = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()}`
    useEffect(() =>{
        setState(
            {
            ...state,
            title: "ROADIE COMMUNICATOR - INCLUDES INSTALLATION SOFTWARE",
            seller: "Roadie", 
            desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Nibh sed pulvinar proin gravida. Pharetra et ultrices neque ornare aenean. Nisl purus in mollis nunc sed. Massa sapien faucibus et molestie ac feugiat sed. Ornare quam viverra orci sagittis eu volutpat odio facilisis mauris. Nam at lectus urna duis convallis convallis tellus. Etiam tempor orci eu lobortis elementum nibh tellus. Pellentesque id nibh tortor id aliquet lectus proin. Diam vel quam elementum pulvinar etiam non. Ultrices tincidunt arcu non sodales neque sodales ut etiam sit. Netus et malesuada fames ac turpis egestas.",
            img: require("../../assets/Software-Box-Mock-Up.jpg"),
            reviews: [
                {
                    subject: "Roadie",
                    poster:  "Kayla Duperreault",
                    rating: 5,
                    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    created_at: formatted,
                },{
                    subject: "IS",
                    poster:  "Wade Williams",
                    rating: 5,
                    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    created_at: formatted,
                },{
                    subject: "Awe-",
                    poster:  "Megan Brewster",
                    rating: 4,
                    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    created_at: formatted,
                },{
                    subject: "Some",
                    poster: "Reid Workman" ,
                    rating: 4,
                    review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
                    created_at: formatted,
                }
            ]
            } 
    )
    }, [])
    console.log(state.modal_active)

const toggleModal = () => setState({...state, modal_active: !state.modal_active})
const submitReview = (event,newReview) => {
    event.preventDefault()
    setState({...state, reviews:[{...newReview,rating:parseInt(newReview.rating), created_at: formatted}, ...state.reviews], modal_active: false})
    }

console.log(state)
    return (
        <>
            {state.modal_active
                ? <ReviewModal submit={submitReview} exit={toggleModal}/>
                : null
            }
            <ProductCard title={state.title} seller={state.seller} desc={state.desc} productImg={state.img} addReview={toggleModal}/>
            <ReviewSection revArr={state.reviews} />
        </>
    );
}