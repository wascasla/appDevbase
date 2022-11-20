import axios from 'axios';

export async function getUsers() {
    
      const response = await axios.get('https://api.github.com/users?per_page=5');
      return response.data;
    
  }

export async function getUser(name) {
    
    const response = await axios.get(`https://api.github.com/users/${name}`);
    console.log("first", response.data)
    return response.data;
  
}