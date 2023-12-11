import { useState } from 'react'
import discordLogo from './assets/discord-logo-white.png'
import discordBackground from './assets/discord-background.png'
import menuIcon from './assets/menu-icon.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div className='header'>
        <img src={discordLogo} alt="discord Logo" className="logo" />
        <img src={menuIcon} alt="menu icon" className="hamburger" />
      </div>
      <h1>IMAGINE A SPACE...</h1>
    </div>

  );

}

export default App
