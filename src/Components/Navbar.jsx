import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='border-b-2 my-5 py-4 text-center space-x-3 border-red-700'>
            <Link href={'/'}>Home</Link>
            <Link href={'/public'}>Public</Link>
            <Link href={'/private'}>Private</Link>
            <Link href={'/admin'}>Admin</Link>
        </div>
    );
};

export default Navbar;