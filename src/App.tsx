import { useEffect, useState } from 'react';
import { Wheel } from 'react-custom-roulette';
import arrow from './assets/arrow.png';

const App = () => {
  const allowedColors = [
    '#FF5733',
    '#33FF57',
    '#3357FF',
    '#FF33A1',
    '#FF8C33',
    '#33FFF6',
    '#9933FF',
    '#FF33B5',
    '#33FFD1',
    '#FF573D',
    '#FFD633',
    '#75FF33',
    '#FF3333',
    '#3385FF',
    '#FF33C4',
    '#33FF94',
  ];

  const generateColors = (count: number): string[] => {
    const colors = [];
    for (let i = 0; i < count; i++) {
      colors.push(allowedColors[i % allowedColors.length]);
    }
    return colors;
  };

  const data = [
    { option: 'Prize 1' },
    { option: 'Prize 2' },
    { option: 'Prize 3' },
    { option: 'Prize 4' },
  ];

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [randomColors, setRandomColors] = useState<string[]>([]);

  useEffect(() => {
    const generatedColors: string[] = generateColors(data.length);
    setRandomColors(generatedColors);
  }, []);

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    setPrizeNumber(newPrizeNumber);

    setMustSpin(true);
  };

  return (
    <div>
      <Wheel
        mustStartSpinning={mustSpin}
        prizeNumber={prizeNumber}
        data={data}
        backgroundColors={randomColors}
        textColors={['#ffffff']}
        onStopSpinning={() => setMustSpin(false)}
        pointerProps={{
          style: {
            width: '40px',
            height: '40px',
            transform: 'rotate(-90deg) translateX(50%)',
            position: 'absolute',
            right: '-10px',
            top: '50%',
          },
          src: arrow,
        }}
      />
      <button onClick={handleSpinClick}>Spin the wheel</button>
    </div>
  );
};

export default App;
