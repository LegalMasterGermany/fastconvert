import React from 'react';

function Footer() {
  return (
    <footer className='border-t text-center py-4 absolute bottom-0 w-full'>
      <p>&copy; {new Date().getFullYear()} Fastconvert</p>
    </footer>
  );
}

export default Footer;
