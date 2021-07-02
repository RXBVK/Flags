import React from "react";

export default function ChooseRegions() {
  return (
    <div>
      <h1>Select regions you want to practice</h1>
      <form>
        <checkbox>Europe</checkbox>
        <checkbox>Americas</checkbox>
        <checkbox>Asia</checkbox>
        <checkbox>Australia</checkbox>
        <checkbox>Oceania</checkbox>
        <checkbox>Africa</checkbox>
      </form>
    </div>
  );
}
