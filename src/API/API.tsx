import axios from 'axios'

export async function GetData(data) {
  const response = axios(`http://localhost:3000/${data}`)
  return response
}
