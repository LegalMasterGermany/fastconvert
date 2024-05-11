import React from 'react';

function APIBanner() {
  return (
    <div className='border-b border-t w-3/4 shadow-lg mt-10 h-36 text-center'>
      <strong className='mt-2 block'>API</strong>
      <div className='flex justify-center gap-4 mt-4'>
        <button className='border rounded-lg px-4 py-2'>Documentation</button>
        <button className='border rounded-lg px-4 py-2'>Example</button>
        <button className='border rounded-lg px-4 py-2'>Get an API Key</button>
      </div>
    </div>
  );
}

export default APIBanner;
