"use client";

import { StorageImage } from "@aws-amplify/ui-react-storage";
import "@aws-amplify/ui-react/styles.css";

interface ImageComponentProps {
  path: string;
  altText: string;
}

const ImageComponent = ({ path, altText }: ImageComponentProps) => {
    return (
      <StorageImage
        path={path}
        alt={altText}
        className="h-full w-full object-cover"
      />
    );
  };
  

export default ImageComponent;
