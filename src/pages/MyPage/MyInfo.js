import { useState,useEffect } from 'react';
import OffcanvasExample from '../../component/bar/bar';
import './myinfo.scss';
import axios from 'axios';
import MyCard from '../../component/mycard/mycard';

function MyInfo() {
    const [ user, setUser ] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3005/user')
            .then(response => {
                setUser(response.data);
                console.log(user);
            });
    }, []);

  return (
    <>
      <div id='searchbar'>
            <OffcanvasExample />
      </div>
      <div className='info_card'>
        {user.map((user) => (
            <MyCard user={user}/>
        ))}
      </div>
      
    </>
    
  );
}

export default MyInfo;