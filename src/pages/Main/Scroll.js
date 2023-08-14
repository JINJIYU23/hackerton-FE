import { useState } from 'react';
import './Scroll.scss'

export default function App() {
  const [scrollTop, setScrollTop] = useState(0);

  const handleScroll = (event) => {
    setScrollTop(event.currentTarget.scrollTop);
  };

  return (
    <div>
      Scroll top: <b>{scrollTop}</b>
      <img
        alt='rogoScroll'
        scr='/images/logo192.png'
        className='rogoScroll'
        style={{ transform: `rotate(${scrollTop * 0.2}deg)`}}
      />
        onScroll={handleScroll}
    </div>
  );
}