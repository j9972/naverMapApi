import { useEffect } from "react";
import React from "react";

function NaverMap() {
  const { naver } = window;

  const mapOptions = {
    center: new naver.maps.LatLng(33.386625156730965, 126.52905333401526),
    zoom: 11,
  };

  useEffect(() => {
    const map = new naver.maps.Map("map", mapOptions);
  }, []);

  return (
    <div>
      <div id="map" style={{ width: "1000px", height: "600px" }}></div>
    </div>
  );
}

export default NaverMap;
