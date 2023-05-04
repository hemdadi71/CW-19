import { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
const FixedRating = ({ rating }) => {
  const array = [0, 1, 2, 3, 4]
  return (
    <>
      <div className="flex items-center">
        {array.map(item => {
          if (item <= rating) {
            return <AiFillStar key={item} />
          } else {
            return <AiOutlineStar key={item} />
          }
        })}
      </div>
    </>
  )
}

export default FixedRating
