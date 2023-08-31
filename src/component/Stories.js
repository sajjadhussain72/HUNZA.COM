import React from 'react'

 const Stories = () => {
    let API ='http://hn.algolia.com/api/v1/items/:id';

    const fecthApiData= async(url)=>{
      try{
        const res = await fetch (url)
        const data =await res.json()
        console.log(data)
      }catch (error){
        console.log(error)
      }
    };

    useEffect(()=>{
     fecthApiData(API)
    },[])
  return (
    <>
    <h1>The tech</h1>
    </>
  )
}
export default Stories