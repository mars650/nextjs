import React, { useEffect } from "react";
import { preLoaderAnim } from "../animations";

const PreLoader = () => {
  useEffect(() => {
    preLoaderAnim();
  }, []);
  return (
    <div className="preloader bg-black flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <div className="texts-container">
        <span>Developer,</span>
        <span>Curator,</span>
        <span>Vibes.</span>
      </div>
    </div>
  );
};

export default PreLoader;
