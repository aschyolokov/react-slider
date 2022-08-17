import { Image } from './Slider/Slider';

type Data = {
  description: string;
  image?: {
    url: string;
  }
}[];

export const getImagesApi = async (length = 10): Promise<Image[]> => {
  const response = await fetch('https://api.thecatapi.com/v1/breeds');
  const data = await response.json() as Data;

  return data
    .map(({ description, image }) => ({
      url: image?.url,
      title: description,
    }))
    .slice(0, length);
};
