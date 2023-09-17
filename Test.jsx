import React from "react";
import YoussoufFetch from "youssouf-fetch";




function HomeTest() {

  const url = 'https://jsonplaceholder.typicode.com/posts'

  const data = YoussoufFetch(url)



  return (
    <div>
      {data.map((title) => (
        <p>{title.title}</p>
      ))}
    </div>
  )
}


export default HomeTest