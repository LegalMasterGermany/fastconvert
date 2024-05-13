import React, { useState, useEffect } from 'react';
import { Select, SelectItem } from "@nextui-org/react";
import { datatypes_image } from "../lib/datatypes";

function UploadFile() {
  const [dragging, setDragging] = useState(false);
  const [files, setFiles] = useState<File[]>([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      const mobileWidth = 768; 
      setIsMobile(window.innerWidth < mobileWidth);
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);

    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const addFileToFilesArray = (file: File) => {
    setFiles(prevFiles => [...prevFiles, file]);
  }

  const removeFileFromArray = (index: number) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  }

  const handleDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(true);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragging(false);
    const droppedFiles = Array.from(e.dataTransfer.files);
    droppedFiles.forEach(file => addFileToFilesArray(file));
    console.log(files);
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles) {
      const filesArray = Array.from(selectedFiles);
      filesArray.forEach(file => addFileToFilesArray(file));
      console.log(files);
    }
  };

  return (
    <>
      <div className={`w-3/4 mt-1 mb-1 border border-white rounded ${isMobile ? 'flex flex-col items-center' : ''}`}>
        {
          files.map((file, index) => (
            <div className={`bg-gray-100 rounded ${isMobile ? 'w-full' : 'h-20'} flex items-center mt-2 border shadow`} key={index}>
              <img src="/images/file.png" width={50} height={50} alt='File' />
              <strong className={`mt-1 ml-3 ${isMobile ? 'w-full' : 'w-auto overflow-hidden'}`} style={{ maxWidth: 'calc(100% - 100px)' }}>{file.name}</strong>
              {!isMobile && <h4 className='ml-36'>to</h4>}
              <div className={`${isMobile ? 'w-full mt-2' : 'ml-10 w-36'}`}>
                <Select
                  label="Conversion Type"
                  placeholder="Select a conversion type"
                  className=""
                >
                  {datatypes_image.map((type) => (
                    <SelectItem key={type.value} value={type.value}>
                      {type.label}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              {!isMobile && <h1 className='ml-32'>{(file.size / (1024 * 1024)).toFixed(2)} Mb</h1>}
              <button className={`${isMobile ? 'w-full mt-2' : 'border rounded-lg px-4 py-2 ml-20'}`}>Convert</button>
              <button className="ml-2 text-red-600 hover:text-red-800" onClick={() => removeFileFromArray(index)}>x</button>
            </div>
          ))
        }
      </div>
      <div
        className={`flex items-center justify-center w-3/4 ${dragging ? 'border-blue-500' : 'border-gray-900'}`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
      >
        <label
          className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-bray-800 dark:bg-gray-200 hover:bg-gray-100 dark:border-gray-300 dark:hover:border-gray-500 dark:hover:bg-gray-200"
          htmlFor="dropzone-file"
        >
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
              <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
            </svg>
            <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
            <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
          </div>
          <input id="dropzone-file" type="file" className="hidden" multiple onChange={handleFileInputChange} />
        </label>
      </div>
    </>
  );
}

export default UploadFile;
