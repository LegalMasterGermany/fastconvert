import React from 'react';

function Footer() {
  return (
    <footer className='border-t text-center py-4 w-full mt-5'>
      <p>&copy; {new Date().getFullYear()} Fastconvert</p>
    </footer>
  );
}

export default Footer;
