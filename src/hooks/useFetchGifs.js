import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = ( category ) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const getImages = async() => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []); // cuando se envia este parametro [ ] de esta forma, se le esta diciendo a react que el efecto se dispara unna sola vez, y es la primera vez cuando el componente se renderiza

  return {
    images,
    isLoading,
  };
};
