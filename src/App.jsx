// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import { useEffect } from 'react';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  useEffect(() => {
    document.title = 'Portfolio';
  }, []);

  return (
    <>
      <Nav />
      <Outlet />
    </>
  );
}

export default App;
