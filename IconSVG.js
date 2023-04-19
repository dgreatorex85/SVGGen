function IconSVG({ id, character, font, charColor, circleColor }) {
  return (
    <svg id={id} width="200" height="200" xmlns="http://www.w3.org/2000/svg">
      <circle cx="100" cy="100" r="100" fill={circleColor} />
      <text
        x="50%"
        y="50%"
        text-anchor="middle"
        dy=".3em"
        font-family={font}
        font-size="100"
        fill={charColor}
      >
        {character}
      </text>
    </svg>
  );
}

export default IconSVG;
