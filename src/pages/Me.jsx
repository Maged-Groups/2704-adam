import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux"


export default function Me() {
  const [user, setUser] = useState(null);

  const { accessToken } = useSelector(store => store.userReducer.user);

  console.log('accessToken', accessToken);



  const get_my_info = () => {
    fetch('https://dummyjson.com/auth/me', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Content-Type': 'application/json',
      },

    })
      .then(res => res.json())
      .then(data => setUser(data));
  }

  useEffect(() => {
    if (accessToken) {
      get_my_info();
    }
  }, [accessToken]);

  if (!user) return (
    <div>
      Loading...
    </div>)

  return (
    <div>
      <img src={user.image} alt='' />
      <h1>Welcome {user.firstName} {user.lastName}</h1>
      <h2>Your email is {user.email}</h2> 
    </div>
  )
}
