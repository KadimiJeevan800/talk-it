import React,{useState,useEffect} from 'react'

export default function Person() {
    const [user, setUser] = useState([]);

  const fetchData = () => {
    return fetch("http://localhost:3003/users")
          .then((response) => response.json())
          .then((data) => setUser(data));
  }

  useEffect(() => {
    fetchData();
  },[])
  console.log(user);
  return (
    <div>
      Person Works...!
     
    </div>
  )
}
