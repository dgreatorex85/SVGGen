const { css } = window.emotion;

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
    const svg = document.getElementById('preview-svg').outerHTML;
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${character}-${font}.svg`;
    link.click();
  }

const svg = (
  `<svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
    <circle cx="100" cy="100" r="100" fill="${circleColor.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}" />
    <text x="50%" y="50%" text-anchor="middle" dy=".3em" font-family="${font.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}" font-size="100" fill="${charColor.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}">
      ${character.replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')}
    </text>
  </svg>`
);



  return (
    <div className={Container}>
      <h1>SVG Icon Generator</h1>

      <div className={InputGroup}>
        <label className={Label} htmlFor="character">Character:</label>
        <input type="text" id="character" maxLength="1" value={character} onChange={(e) => setCharacter(e.target.value)} />
      </div>

      <div className={InputGroup}>
        <label className={Label} htmlFor="font">Font:</label>
        <select id="font" value={font} onChange={(e) => setFont(e.target.value)}>
          <option value="Arial">Arial</option>
          <option value="Verdana">Verdana</option>
          <option value="Times New Roman">Times New Roman</option>
          <option value="Courier New">Courier New</option>
        </select>
      </div>

      <div className={InputGroup}>
        <label className={Label} htmlFor="charColor">Character Color:</label>
        <input type="color" id="charColor" value={charColor} onChange={(e) => setCharColor(e.target.value)} />
      </div>

      <div className={InputGroup}>
        <label className={Label} htmlFor="circleColor">Circle Color:</label>
        <input type="color" id="circleColor" value={circleColor} onChange={(e) => setCircleColor(e.target.value)} />
      </div>

      <div className={Preview}>
        <div id="preview-svg" dangerouslySetInnerHTML={{ __html: svg }}></div>
      </div>

      <button onClick={handleDownload}>Save SVG</button>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

