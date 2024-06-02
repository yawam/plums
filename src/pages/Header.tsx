import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex items-center bg-fuchsia-900 inset-y-0 space-x-10 p-2 mb-4">
      <div>
        <Image
          className="flex-none rounded-full "
          src="/plum_image.png"
          width={100}
          height={100}
          alt="PLUMS"
        />
      </div>
      <h1 className="text-4xl text-white font-extrabold">PLUMS</h1>
    </header>
  );
};

export default Header;
