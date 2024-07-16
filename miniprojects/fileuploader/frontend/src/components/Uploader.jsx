// FileUploader.jsx

import React, { useState } from 'react';
import axios from 'axios';

const Uploader = () => {
  const [formData, setFormData] = useState({
    file: null,
    audio: null,
    video: null,
    image: null,
  });
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];
    const fileType = file.type;

    // Basic file type validation
    const allowedTypes = {
      file: ['application/pdf', 'application/msword', 'text/plain'], // Add other document types as needed
      audio: ['audio/*'],
      video: ['video/*'],
      image: ['image/*'],
    };

    if (!allowedTypes[name].some((type) => fileType.startsWith(type.split('/')[0]))) {
      setError(`Please upload a valid ${name} file`);
      return;
    }

    setError('');
    setFormData({ ...formData, [name]: file });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('');
    setError('');

    const formDataToSend = new FormData();
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        formDataToSend.append(key, formData[key]);
      }
    });

    try {
      const response = await axios.post('http://localhost:4545/upload', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading files', error);
      setError('Error uploading files. Please try again later.');
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-4 bg-gray-100 border border-gray-300 rounded-lg shadow-md">
      <h2 className="text-2xl underline text-center mb-4">File Uploader</h2>
      <form onSubmit={handleSubmit}>
        <label className="block mb-4">
          <span className="text-gray-700">File:</span>
          <input
            type="file"
            name="file"
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Audio:</span>
          <input
            type="file"
            name="audio"
            accept="audio/*"
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Video:</span>
          <input
            type="file"
            name="video"
            accept="video/*"
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <label className="block mb-4">
          <span className="text-gray-700">Image:</span>
          <input
            type="file"
            name="image"
            accept="image/*"
            onChange={handleChange}
            className="form-input mt-1 block w-full"
          />
        </label>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Upload
        </button>
      </form>
      {message && <p className="mt-4 text-center text-green-500">{message}</p>}
      {error && <p className="mt-4 text-center text-red-500">{error}</p>}
    </div>
  );
};

export default Uploader;
