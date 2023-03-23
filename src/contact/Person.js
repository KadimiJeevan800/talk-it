import React,{useEffect,useState} from 'react'
import './cstyle.scss';
import styled from "styled-components";
import axios from 'axios';
// Styled component named StyledButton
const StyledButton = styled.button`
  background-color: black;
  font-size: 20px;
  color: white;
  cursor:pointer;
  &:hover 
  {
    background-color: white;
    color:black
  }
`;

const blueStyledButton =styled(StyledButton)`
background-color: blue;
&:hover
{
  color:blue;
}
`;
const StyledDiv= styled.div`

background-color : grey;
padding:10px;
color:white;
`;

// const 
export default function Person() {
    const [user, setUser] = useState([]);
    const [EditUsers,setEditUsers]=useState([{}]);
    const [CurrentEditUser,setCurrentEditUser]=useState('');
    const [selectedUser,setSelectedUser]=useState([]);
    // console.log(selectedUser);
  const UPdate=(event)=>
  {
    event.preventDefault();
    console.log(EditUsers[0].address);
    var name=document.getElementById('eusername').value;
    var team=document.getElementById('eteamname').value;
    var user={
      name:name,
      team:team
    }
    axios.put(`http://localhost:3001/edit/user/`+EditUsers[0].ID, { user })
    .then(res => {
      console.log(res);
      // console.log(res.data);
      setCurrentEditUser(name);
    })
    document.getElementById('form-element-div').style.display="block";
    document.getElementById('form-edit').style.display="none";
    setTimeout(DisplayNone,2000);
  }
  
  const DisplayNone= ()=>
  {
    document.getElementById('form-element-div').style.display="none";
  }
  const editUser=(id)=>
  {
    console.log("Editing User : "+ id);
    // window.scrollTo(1, 0)
    fetch("http://localhost:3001/user/"+id)
    .then((response) => response.json())
    .then((data) => {setEditUsers(data);});
    var ele=document.getElementById('form-edit');
    ele.style.display="block";
 
  //  document.getElementById('eusername').value=selectedUser[0].name;
  //  ele.scrollIntoView();
  window.scrollTo(0,100);
   
  }

  const delUser =(id) =>
  {
    console.log("user : "+id);
    fetch("http://localhost:3001/rm/"+id,{
      method:"delete",
    })

    // getUser();
  }
   const sortUser=()=>
   {
    fetch("http://localhost:3001/sort")
    .then((response) => response.json())
     .then((data) => setUser(data));
   } 

  const getUser=()=>
  {
    var id=document.getElementById('uid').value;
    // console.log(id);
    if(id==='')
    {
      fetch("http://localhost:3001/users")
         .then((response) => response.json())
          .then((data) => { setUser(data)});
          return
    }
    fetch("http://localhost:3001/user/"+id)
         .then((response) => response.json())
          .then((data) => {setSelectedUser(data)});
          
  }  
  const fetchData = () => {
    return fetch("http://localhost:3001/users")
          .then((response) => response.json())
          .then((data) => setUser(data))
          .catch(err=>{console.log("Error : "+err)});
  }

  useEffect(() => {
    fetchData();
  },[user,CurrentEditUser,EditUsers])

  // console.log(user);

  document.getElementById('cards')
  return (
    <div style={{textAlign:"center",alignItems:"center"}}>
     
     <div style={{margin:"15px 0px"}}>

          <StyledDiv>
            <label> USER ID : </label>
            <input type="number" id='uid'  onChange={getUser} style={{padding:"5px"}} placeholder=' ID ' />

            <button onClick={getUser} className="button" style={{marginLeft:"10px"}}><span className="material-symbols-outlined" style={{fontSize:"17px"}}>search</span> </button>
          </StyledDiv>
        </div>

        <div style={{display:"flex",margin:"20px 0px",justifyContent:"center"}}>
        <div className='anime'> 
          
        </div>
        <div className='anime'> 
  
        </div>
      </div>
     
      
       

        <div>
          {
          selectedUser.length===0 ? 
          <div>
              "No Data Found "
          </div>
          : selectedUser.map((su)=>
          (
            <div>
              <p> Search Item</p>
              <p>{su.ID}</p>
              <p>{su.name}</p>
              <p>{su.address}</p>
            </div>
          ))}
        </div>

        <div style={{display:"flex",justifyContent:"center",margin:"20px 0px"}}>
          <div className='anime'> 

          </div>
          <div className='anime'> 
  
          </div>
        </div>
        <div className='SuccessBox' style={{display:"none",background:"green",color:"white",padding:"15px",textTransform:"captalize"}} id='form-element-div' >
            Changes made Successfully...
        </div>

        <div className='Edit-table-form' id="form-edit">
        
            Editor
            <span style={{cursor:"pointer",position:"absolute",top:"2px",right:"5px"}} class="material-symbols-outlined hov" onClick={()=>{document.getElementById('form-edit').style.display="none"}}>
              close
            </span>
            <div>
              <form onSubmit={UPdate} >
                <div >
                  <label >Name : </label>
                  <input type='text' id="eusername" defaultValue={EditUsers[0].name}  placeholder='Enter the name ' />
                </div>
                <div>
                  <label>Team : </label>
                  <input type="text" id="eteamname" defaultValue={EditUsers[0].address} placeholder='Enter the Team Name' />
                </div>
                {/* <button   id="change-btn-edit" onClick={()=>{UPdate(EditUsers[0].id)}} value="Change " >Change</button>  */}
                <input id="change-btn-edit" value="Change" type='submit'/>
                {/* <input type="reset" /> */}
              </form>
            </div>
        </div>

      <table id='customers'>
        <thead>
          <tr>
            <th style={{textAlign:"center"}}>ID</th>
            <th style={{textAlign:"center"}}>Name
             {/* <StyledButton><span className="material-symbols-outlined "  onClick={sortUser}>sort</span></StyledButton>   */}
             </th>
            <th style={{textAlign:"center"}}>Team </th>
            <th style={{textAlign:"center"}}>Actions </th>
          </tr>
        
      </thead>
      <tbody>
      {user.length!==0 ? user.map((u)=>   
       (
          <tr className='data'>
            <td>{u.ID}</td>
            <td>{u.name}</td>
            <td>{u.address}</td>
            <td style={{display:"flex",justifyContent:"space-evenly"}}>
              <button  id="delete-btn-table" className="material-symbols-outlined " onClick={()=>{delUser(u.ID)}}>delete</button>
              <button  id="edit-btn-table" className="material-symbols-outlined"  onClick={()=>{editUser(u.ID)}} >edit</button>
            </td>
          </tr>
        )) : 
        <tr>
          
          <td colSpan="5">"No Data"</td>
              
        </tr>
        }
      </tbody>
      </table>

        {/* <blueStyledButton>H</blueStyledButton> */}
      
            
      {/* <div className='anime'> 
        
      </div>
      <div className='anime'> 
        
      </div> */}
     
    </div>
  )
}
