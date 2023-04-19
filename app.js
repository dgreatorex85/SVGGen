import { css } from 'https://unpkg.com/@emotion/css@11.1.3/dist/umd/index.js';
import React from 'https://cdnjs.cloudflare.com/ajax/libs/react/17.0.2/umd/react.production.min.js';
import ReactDOM from 'https://cdnjs.cloudflare.com/ajax/libs/react-dom/17.0.2/umd/react-dom.production.min.js';
import IconSVG from './IconSVG.js';

const Container = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const InputGroup = css`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
`;

const Label = css`
  margin-right: 0.5rem;
`;

const Preview = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 200px;
  height: 200px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;

function App() {
  const [character, setCharacter] = React.useState('A');
  const [font, setFont] = React.useState('Arial');
  const [charColor, setCharColor] = React.useState('#FFFFFF');
  const [circleColor, setCircleColor] = React.useState('#000000');

  function handleDownload() {
    const svgElement = document.getElementById('icon-svg');
    const svgString = new XMLSerializer().serializeToString(svgElement);
    const blob = new Blob([svgString], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character}-${font}.svg`;
    link.click();
  }

  return (
    <div className={Container}>
      <h1>SVG Icon Generator</h1>
      {/* ... */}
      <div className={Preview}>
        <IconSVG
          id="icon-svg"
          character={character}
          font={font}
          charColor={charColor}
          circleColor={circleColor}
        />
      </div>
      {/* ... */}
      <button onClick={handleDownload}>Save SVG</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
