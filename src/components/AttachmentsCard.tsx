"use client";

interface AttachmentCardProps {
  attachment_id: string;
  fileUrl: string;
  description: string;
}

const AttachmentCard = ({ attachment_id, fileUrl, description }: AttachmentCardProps) => {
  // Function to determine the file type based on the file extension
  const getFileType = (url: string) => {
    const extension = url.split('.').pop()?.toLowerCase();
    switch (extension) {
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'image';
      case 'mp4':
      case 'mov':
        return 'video';
      case 'mp3':
      case 'wav':
        return 'audio';
      case 'pdf':
        return 'pdf';
      case 'txt':
      case 'html':
        return 'text';
      default:
        return 'unknown';
    }
  };

  const fileType = getFileType(fileUrl);

  const handleClick = () => {
    // Open the file URL in a new tab
    window.open(fileUrl, '_blank');
  };

  const renderFilePreview = () => {
    switch (fileType) {
      case 'image':
        return <img src={fileUrl} alt={description} className="max-w-full h-auto" />;
      case 'video':
        return <video src={fileUrl} controls className="max-w-full h-auto" />;
      case 'audio':
        return <audio src={fileUrl} controls />;
      case 'pdf':
        return (
          <embed
            src={fileUrl}
            type="application/pdf"
            width="100%"
            height="400px"
          />
        );
      case 'text':
        return (
          <iframe
            src={fileUrl}
            className="w-full h-96"
            title={description}
          />
        );
      default:
        return <p>File preview is not available</p>;
    }
  };

  return (
    <div
      className="rounded-2xl bg-fuchsia-900 text-white h-[250px] shadow-xl p-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex-1">
        {/* {renderFilePreview()} */}
      </div>
      <h3 className="text-lg font-bold mt-2">{description}</h3>
      {/* <p className="text-sm truncate">{fileUrl}</p> */}
    </div>
  );
};

export default AttachmentCard;
