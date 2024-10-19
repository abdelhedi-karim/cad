import React from 'react';
import { QRCodeSVG } from 'qrcode.react'; // Import the QRCodeSVG component

const QRCodeGenerator = () => {
  const url = "https://www.facebook.com/karim.abdelhedy";

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Scan the QR Code</h1>
      <QRCodeSVG value={url} size={200} /> {/* Use QRCodeSVG */}
      <p>Scan the QR code to visit the link</p>
    </div>
  );
}

export default QRCodeGenerator;
