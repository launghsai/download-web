import { useRef } from 'react';

function DownloadImage({ imageUrl, imageName }) {
  const downloadLinkRef = useRef(null);

  const handleDownload = async () => {
    try {
      const response = await fetch(imageUrl);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      downloadLinkRef.current.href = url;
      downloadLinkRef.current.download = imageName;
      downloadLinkRef.current.click();
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading image:', error);
    }
  };

  return (
    <div>
      <img src={imageUrl} alt={imageName} width={200} height={200} />
      <button onClick={handleDownload}>Download</button>
      <a ref={downloadLinkRef} style={{ display: 'none' }}></a>
    </div>
  );
}

export default DownloadImage;