"use client";

import { BounceLoader } from "react-spinners";

const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      Loading...
      <BounceLoader color="#f472b6" />
    </div>
  );
};

export default Loading;
