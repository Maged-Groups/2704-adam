import './App.css'

import TopNavbar from './layouts/TopNavbar';
import Footer from './layouts/Footer';

import { useDispatch } from 'react-redux';
import { rdxLoggedin } from './redux/userReducer';


import Pages from './pages';


const App = () => {

  const dispatch = useDispatch();


  const now = JSON.stringify(new Date());
  localStorage.lastVisit = now;

  // ['focus', 'scroll'].forEach(e => {
  //   window.addEventListener(e, () => {
  //     console.log('Window is focused');
  //   });
  // })

  window.addEventListener('scroll', () => {
    console.log('Window is focused');
  });

  window.addEventListener('focus', () => {
    console.log('Window is focused');
  });

  window.addEventListener('blur', () => {
    console.log('Window lost focus');
  });


  const loggedinUserData = localStorage.user ?? sessionStorage.user;

  if (loggedinUserData) {
    const user = JSON.parse(loggedinUserData);

    dispatch(rdxLoggedin(user));

  }



  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar />

      <main className="flex-grow">
        <main className="flex-grow">

          <Pages />
          
        </main>
      </main>

      <Footer />

    </div>
  );
};

export default App;