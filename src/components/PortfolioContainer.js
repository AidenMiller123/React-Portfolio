import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Footer from './Footer'
import Portfolio from './pages/Portfolio';
import AboutMe from './pages/AboutMe';
import Resume from './pages/Resume';
import Contact from './pages/Contact';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = () => {
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* // TODO: Add a comment describing what we are passing as props */}
      <div className=''>
      <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
      </div>
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <div className=''>
        <Footer />
      </div>
    </div>
  );
}
