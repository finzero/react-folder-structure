import { useEffect } from "react";

/* eslint react/prop-types: 0 */
const Banner = ({ banners }) => {

  useEffect(() => {
    // log banners data
    console.log(banners)
  }, [])

  return (
    <div>Ini komponen Banner</div>
  );
};

export default Banner;