import React from 'react';
import Header from './Header'
import Footer from './Footer';

// const Layout = ({ children }) => {
const Layout = () => {
    return (
        <div>
            <Header />
            {/* <main className='p-3 bg-white'>{children}</main> */}
            <Footer />
        </div>
    );
};

export default Layout;
