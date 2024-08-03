import { useEffect, useState } from "react"
import axiosRequest from "./utils/axiosRequest"

const App = () => {
  let [data, setData] = useState([])
  async function  getTodos() {
    try{
      let { data } = await axiosRequest.get('/ToDo/get-to-dos')
      setData(data?.data)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    getTodos()
  }, [])
  return (
    <div>
      {data?.map((el) => {
        return <div key={el.id}>
          <p>{el.name}</p>
        </div>
      })}
    </div>
  )
}

export default App