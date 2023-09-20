import React from "react";
import { Audio } from "react-loader-spinner";

import styles from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={styles.loader}>
      <Audio
        visible={true}
        height="80"
        width="80"
        ariaLabel="Audio-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={["#306cce", "#72a1ed"]}
      />
    </div>
  );
};

export default Loader;
