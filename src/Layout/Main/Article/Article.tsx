import { GetData } from '@/API/API'
import Cart from '@/Components/Cart/Cart'
import { useEffect, useState } from 'react'

const Article = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    GetData('products').then(res => setData(res.data))
  }, [])
  console.log(data)
  return (
    <>
      <div className="flex flex-wrap gap-x-7 gap-y-2 w-fit h-fit mt-7">
        {data.map(item => {
          return <Cart key={item.id} item={item} />
        })}
      </div>
    </>
  )
}

export default Article
