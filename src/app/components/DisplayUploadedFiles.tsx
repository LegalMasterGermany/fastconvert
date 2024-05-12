import React from 'react';

function DisplayUploadedFiles({ file } : any) {
  return (
    <div className='w-2/4 boder h-6 bg-green-500'>
      {file && (
        <>
          <p>Dateiname: {file.name}</p>
          <p>Dateigröße: {file.size} Bytes</p>
          <p>Dateityp: {file.type}</p>
        </>
      )}
    </div>
  );
}

export default DisplayUploadedFiles;
