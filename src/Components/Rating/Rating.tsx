import { useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { AiFillStar } from 'react-icons/ai'
const Rating = () => {
  const [rating, setRating] = useState(-1)
  const array = [0, 1, 2, 3, 4]
  return (
    <>
      <div className="flex items-center gap-1">
        <label>Rating:</label>
        {array.map(item => {
          if (item <= rating) {
            return <AiFillStar key={item} onClick={() => setRating(item)} />
          } else {
            return <AiOutlineStar key={item} onClick={() => setRating(item)} />
          }
        })}
      </div>
    </>
  )
}

export default Rating
