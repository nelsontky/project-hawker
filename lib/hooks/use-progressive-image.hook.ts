import React from "react";

interface UseProgressiveImageOptions {
  compressedSrc: string;
  src: string;
}

export function useProgressiveImage({
  compressedSrc,
  src,
}: UseProgressiveImageOptions) {
  const [result, setResult] = React.useState({
    blur: true,
    src: compressedSrc,
  });

  React.useEffect(() => {
    const image = new Image();
    image.src = src;
    image.onload = () => {
      setTimeout(() => {
        setResult({
          blur: false,
          src,
        });
      }, 1000);
    };
  }, []);

  // return { src: compressedSrc, blur: true };
  return result;
}
