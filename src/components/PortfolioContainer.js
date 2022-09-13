import React, { useState } from 'react';
// import NavTabs from './NavTabs';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import BasicExample from './BasicExample';


export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');

  // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Menu') {
      return <Menu />;
    }
    if (currentPage === 'Blog') {
      return <Blog />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
    <div>
      {/* We are passing the currentPage from state and the function to update it */}
     
      {/* Here we are calling the renderPage method which will return a component  */}
      
      </div>
      <div>
      <BasicExample currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </div>
      </div>
  );
}
