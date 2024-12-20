import React, { useState, useEffect } from 'react';
import '../css/QRPage.css';

const QRPage = () => {
  const [qrSrc, setQrSrc] = useState('');
  const [error, setError] = useState('');
  const data = 'https://github.com/YogesWaran108/tution-app'; // Replace with the data you want to generate a QR code for

  useEffect(() => {
    const url = `http://127.0.0.1:5000/generate_qr?data=${encodeURIComponent(data)}`;
    console.log('Fetching QR code from URL:', url); // Debugging log
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.blob();
      })
      .then(blob => {
        const qrUrl = URL.createObjectURL(blob);
        console.log('QR code fetched successfully:', qrUrl); // Debugging log
        setQrSrc(qrUrl);
      })
      .catch(error => {
        console.error('Error fetching QR code:', error);
        setError('Failed to load QR code');
      });
  }, []);

  return (
    <div className="container">
      <h1 className="sticky-top">QR Code</h1>
      <div className="content">
        <p>Scan the QR code below to access our services:</p>
        {error && <p className="error">{error}</p>}
        {qrSrc && <img src={qrSrc} alt="QR Code" className="qr-code" />}
        <p>
          <a href={data} target="_blank" rel="noopener noreferrer">
            Click here to visit the link
          </a>
        </p>
      </div>
    </div>
  );
};

export default QRPage;
