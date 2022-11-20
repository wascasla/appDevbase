import logo from './logo.svg';
import './App.css';
import Layout from './Layout';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { getUsers } from './api/users';
import { Link, Navigate, redirect } from 'react-router-dom';

function App() {

  const [listUsers, setListUsers] = useState([]);
  const [goToBack, setGoToBack] = useState(false);

  const getUsersList = async () => {
    const users = await getUsers();
    setListUsers(users);
  }

  useEffect(() => {
    getUsersList();
  }, [])
    
  return (
    <Layout goToBack={goToBack} setGoToBack={setGoToBack}>
      <Typography variant="h2" component="div" sx={{ flexGrow: 1 }}>
            Top 5 GitHub Users
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Tap the username to see more information
          </Typography>
          <Box style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap'}}>
          {listUsers.length !== 0 ?
           listUsers.map((user) => 

           <Link style={{ margin: '2px',padding:'3px' ,backgroundColor: 'blue', borderRadius:'5px', color:'white'}} to={`user/${user.login}`}>
            {user.login}
          </Link>
           )
           :
           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            There are not users
          </Typography>
          }
          </Box>
    </Layout>
  );
}

export default App;
