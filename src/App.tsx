import React, { useState } from 'react';

// Graph Components
import BarGraph from './components/BarGraph'
import ScatterPlot from './components/ScatterPlot'

// Global Styles
import './index.css'

// Graph Data
import { data } from './data/Wine-Data'

function App() {
  const [theme, setTheme] = useState('dark')
  return (
    <>
      <div className={theme === 'light' ? 'lightContainer' : 'darkContainer'}>
        <div style={{padding: '1rem'}}>
          <button onClick={() => {
            setTheme(theme === 'light' ? 'dark' : 'light')
          }}>Toggle Theme</button>
        </div>
        <div className='graphContainer'>
          <div style={{ marginBottom: '50px' }}>
            <h4 style={{ marginBottom: '50px' }}>Color Intensities v/s Hues</h4>
            <ScatterPlot data={data} />
          </div>
          <div>
            <h4 style={{ marginBottom: '50px' }}>Alcohol Class v/s Avg. Malic Acid</h4>
            <BarGraph data={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
