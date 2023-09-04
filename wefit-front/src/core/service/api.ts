import axios from "axios"

export const apiGetProducts = async ()=>{
  try{
    const {data} = await axios.get('http://localhost:5173/src/data/db.json')

    return {
      data: data.products,
      success: true
    }

  }catch(err){
    console.error(err)
    return {success: false, data: null}
  }
}