import React, { useEffect, useState } from "react";



function YoussoufFetch (url) {

  const [data, setData] = useState([])

  useEffect(() => {
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      setData(data)
    })
  }, [])

  return data
}

export default YoussoufFetch
