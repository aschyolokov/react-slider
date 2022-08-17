import { useEffect, useState } from 'react';
import { getImagesApi } from './api';
import styles from "./App.module.scss";
import Slider, { Image } from './Slider/Slider';

function App() {
  const [images, setImages] = useState<Image[]>([]);

  useEffect(() => {
    getImagesApi(10)
      .then(result => setImages(result));
  }, []);

  return (
    <div
      className={styles.app}>

      <h1
        className={styles.title}>
        Slider
      </h1>

      <Slider
        className={styles.slider}
        images={images}
      />
    </div>
  );
}

export default App;
