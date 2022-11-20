import { Avatar, Divider, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getUser } from './api/users';
import Layout from './Layout'

const User = () => {
    let { name } = useParams();
    const [user, setUser] = useState();
    const [goToBack, ] = useState(true);

  const getUserApi = async () => {
    const user = await getUser(name);
    setUser(user);
  }

  useEffect(() => {
    getUserApi();
  }, [])

  return (
    <Layout goToBack={goToBack}>
      {user && (
        <div style={{ margin: "5px", display: 'flex' }}>
          <Avatar style={{marginTop: '8px', marginRight:'5px'}} alt="Remy Sharp" src={user.avatar_url} />

            <div style={{display:'flex', flexDirection:'column'}}>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.name}
          </Typography>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {user.location}
          </Typography>
            </div>
            <Divider />
        </div>
      )}
    </Layout>
  );
}

export default User