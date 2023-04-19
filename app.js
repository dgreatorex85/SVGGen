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

import IconSVG from './IconSVG';

function App() {
  const [character, setCharacter] = React.useState('A');
  const [font, setFont] = React.useState('Arial');
  const [charColor, setCharColor] = React.useState('#FFFFFF');
  const [circleColor, setCircleColor] = React.useState('#000000');

  function handleDownload() {
    // ...
  }

  return (
    <div className={Container}>
      <h1>SVG Icon Generator</h1>
      {/* ... */}
      <div className={Preview}>
        <IconSVG
          character={character}
          font={font}
          charColor={charColor}
          circleColor={circleColor}
        />
      </div>
      {/* ... */}
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
