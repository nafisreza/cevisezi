 const extractFileId = (imageUrl) => {
    const urlParts = imageUrl.split('/');
    const fileIdIndex = urlParts.findIndex(part => part === 'files') + 1;
    return urlParts[fileIdIndex];
  };

  export default extractFileId