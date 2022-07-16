import React, { useState } from 'react'
import {FaQuoteLeft,FaAngleRight,FaAngleLeft} from 'react-icons/fa'
import person from "./reviews-person"

function Review() {

const [index,setIndex] = useState(0)
const {name,image,job,desc} = person[index]


const checkNumber = (number) =>{

  if (number > person.length - 1) {
    return 0
  }

  if (number < 0) {
    return person.length - 1
  }

  return number

}

const btnNext = () =>{
  setIndex((index)=>{
    let newIndex = index + 1
    return checkNumber(newIndex)
  })
}


const btnPrev = () =>{
  setIndex((index)=>{
    let newIndex = index - 1
    return checkNumber(newIndex)
  })
}


  return (

    <article>
      <div className="quote">
        <FaQuoteLeft />
      </div>
      <div className="box-img">
        <img src={image} alt={name}  />
      </div>
      <div className="info-review">
        <div className="info-person">
          <h2>{name}</h2>
          <p className='job'>{job}</p>
        </div>
        <div className="desc">
          <p>{desc}</p>
        </div>
      </div>
      <div className="button-review">
        <button className='btn-left' onClick={btnPrev}>
          <FaAngleLeft />
        </button>
        <button className='btn-right' onClick={btnNext} >
          <FaAngleRight />
        </button>
      </div>
    </article>

  )
}

export default Review
