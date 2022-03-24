import React from "react";
import { useGlobalContext } from "../context";
export default function FilterRegionList() {
  const { active, selectRegion } = useGlobalContext();
  return (
    <div className={active ? "region-list active" : "region-list"}>
      <p onClick={selectRegion}>Africa</p>
      <p onClick={selectRegion}>Antarctic Ocean</p>
      <p onClick={selectRegion}>Europe</p>
      <p onClick={selectRegion}>Americas</p>
      <p onClick={selectRegion}>Asia</p>
    </div>
  );
}
