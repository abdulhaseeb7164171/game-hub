import noImage from "../assets/no-image-placeholder.webp";

const getCroppedImageURL = (url: string | null) => {
  if (!url) return noImage;
  return url.replace("/media/", "/media/crop/600/400/");
};

export default getCroppedImageURL;
