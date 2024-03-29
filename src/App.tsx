
import './App.css'
import { AudioClip } from './types.ts' 
import Drum from './Drum.tsx'





const audioClips : AudioClip[] = [
  {
    keyTrigger : "A",
    url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" ,
    description : "Heater 1"
  }
  ,
  {
    keyTrigger : "Z",
    url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" ,
    description : "Heater 2"
  }
  ,
  {
    keyTrigger : "E",
    url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"  ,
    description : "Heater 3"
  }
  ,
  {
    keyTrigger : "Q",
    url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3"  ,
    description : "Heater 4"
  }
  ,
  {
    keyTrigger : "S",
    url : "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" ,
    description : "Clap"
  }
  ,
  {
    keyTrigger : "D",
    url : "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" ,
    description : "Kick-n'-Hat"
  }
  ,
  {
    keyTrigger : "W",
    url : "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" ,
    description : "Open-HH"
  }
  ,
  {
    keyTrigger : "X",
    url : "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" ,
    description : "Kick"
  }
  ,
  {
    keyTrigger : "C",
    url : "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" ,
    description : "Closed-HH"
  }
]


function App() {
  document.getElementById("drum-machine")?.focus()
  const playAudio = (e : React.KeyboardEvent<HTMLDivElement>) => {
    const clip = audioClips.find(
      (clip) => clip.keyTrigger === e.key.toUpperCase()) 
    if (!clip) return;
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement).play().catch(console.log);
    document.getElementById("display")!.innerText = clip.description
    document.getElementById("drum-" + clip.keyTrigger)?.focus()
    
  }; 
  return (
  
      <div className="container" id="drum-machine" tabIndex={0} onKeyDown={playAudio}>
        <h1>My Drum Machine</h1>
        <div className="whole-drum" >
        {audioClips.map((clip) => (
              <Drum  key = {clip.keyTrigger} audioClip = {clip}></Drum>
            ))}
           </div> 
          <div id="display"></div>
      </div>
      
   
  )
}

export default App
