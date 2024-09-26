import React from "react";

const Theme = ({ setCurrentTheme }) => {
  const themes = [
    "light",
    "dark",
    "cupcake",
    "bumblebee",
    "emerald",
    "corporate",
    "synthwave",
    "retro",
    "cyberpunk",
    "valentine",
    "halloween",
    "garden",
    "forest",
    "aqua",
    "lofi",
    "pastel",
    "fantasy",
    "wireframe",
    "black",
    "luxury",
    "dracula",
    "cmyk",
    "autumn",
    "business",
    "acid",
    "lemonade",
    "night",
    "coffee",
    "winter",
    "dim",
    "nord",
    "sunset",
  ];

  return (
    <div className="m-auto text-center">
      <select
        className="select select-warning w-full max-w-xs mx-auto"
        defaultValue="pick a pizza"
        onChange={(e) => {
          setCurrentTheme(e.target.value);
        }}
      >
        <option disabled selected value="pick a pizza">
          Pick a pizza
        </option>
        {themes.map((theme) => {
          return (
            <option value={theme} key={theme}>
              {theme}
            </option>
          );
        })}
      </select>
    </div>
  );
};

export default Theme;
