import React from 'react'
import './cstyle.scss';
export default function Person() {
  //   const [user, setUser] = useState([]);

  // const fetchData = () => {
  //   return fetch("http://localhost:3003/users")
  //         .then((response) => response.json())
  //         .then((data) => setUser(data));
  // }

  // useEffect(() => {
  //   fetchData();
  // },[])

  // console.log(user);
  var flag=0;
  function add()
  {
    if(flag===0)
    {
      document.getElementById('1').style.display="block";
      document.getElementById('2').style.display="none";
      flag=1;
    }
    else
    {
      document.getElementById('1').style.display="none";
      document.getElementById('2').style.display="block";
      flag=0;
    }
  }
  document.getElementById('cards')
  return (
    <div style={{textAlign:"center",alignItems:"center"}}>
      Person Works...!
      <div style={{display:"flex"}}>
        <div className='anime'> 
          
        </div>
        <div className='anime'> 
  
        </div>
      </div>
      <div style={{display:"flex"}}>
        <div className='anime'> 

        </div>
        <div className='anime'> 
  
        </div>
      </div>
      
    <button onClick={add}>click</button>
      <div >
          <div id='1'>
1234567890
          </div>
          <div id='2'> 
asdfghjklqwertyuiopzxcvbnm
          </div>
      </div>
      {/* <div className='anime'> 
        
      </div>
      <div className='anime'> 
        
      </div> */}
     
    </div>
  )
}
