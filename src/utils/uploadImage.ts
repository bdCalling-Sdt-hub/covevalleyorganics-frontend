const getImageURL = async (image: File) => {
      try {
            const formData = new FormData();
            formData.append('file', image);
            formData.append('upload_preset', 'baby-food');

            const response = await fetch(`https://api.cloudinary.com/v1_1/ddhhyc6mr/image/upload`, {
                  method: 'POST',
                  body: formData,
            });

            if (!response.ok) {
                  throw new Error('Image upload failed.');
            }

            const data = await response.json();
            return data.secure_url;
      } catch (error) {
            console.error(error);
      }
};

export default getImageURL;
