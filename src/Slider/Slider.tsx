import clsx from 'clsx';
import React, { createContext, DetailedHTMLProps, HTMLAttributes, useState } from 'react';
import styles from './Slider.module.scss';

export type Image = {
  url?: string;
  caption?: string;
};

type SliderProps = {
  images: Image[];
} & Partial<{
  autoPlay: boolean;
  autoPlayTime: number;
}> & DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;

export const SliderContext = createContext({});

const Slider = ({
  images,
  className,
  autoPlay = false,
  autoPlayTime = 5000,
}: SliderProps): JSX.Element => {
  const [slide, setSlide] = useState(0);
  const [touchPosition, setTouchPosition] = useState<number | null>(null);

  return (
    <div
      className={clsx(styles.slider, className)}>

    </div>
  );
};

export default Slider;
