import { useState } from 'react';
import './App.css'

function App() {
  
  const [ plusOne, setPlusOne ] = useState<number>(0)
  // const [ trample, setTrample ] = useState<number>(0)
  // const [ flying, setFlying ] = useState<number>(0)
  // const [ vigilance, setVigilance ] = useState<number>(0)
  // const [ deathtouch, setDeathtouch ] = useState<number>(0)
  // const [ menace, setMenace] = useState<number>(0)
  // const [ firststrike, setFirstStrike] = useState<number>(0)
  // const [ hexproof, setHexproof] = useState<number>(0)
  // const [ lifelink, setLifelink] = useState<number>(0)
  // const [ reach, setReach] = useState<number>(0)
  // const [ indestructible, setIndestructible] = useState<number>(0)

  const [ power, setPower ] = useState<number>(1);
  const [ toughness, setToughness ] = useState<number>(1);

  function reset() {
    setPlusOne(0);
  }

  return (
    <main>
      <h1 className="font-extrabold">Skullbriar App</h1>
      <div className="relative bg-[url('./assets/images/skullbriar-clear.png')] h-[680px] w-[480px] rounded-xl text-center">
        <div className="absolute bottom-7 right-20">
          <span className="text-black font-bold text-2xl">{power + plusOne}</span>
        </div>
        <div className="absolute bottom-7 right-8">
          <span className="text-black font-bold text-2xl">{toughness + plusOne}</span>
        </div>
      </div>
      <button onClick={() => {setPlusOne(plusOne+1)}}>+1/+1</button>
      <button onClick={() => reset()}>RESET</button>
    </main>
  )
}

export default App
