import { AudioClip } from "./types"

interface DrumProps {
  audioClip : AudioClip
}


const Drum = ({audioClip} : DrumProps) => {
  const playSound = (clip : AudioClip) => {
    (document.getElementById(clip.keyTrigger) as HTMLAudioElement).play().catch(console.log);
    document.getElementById("display")!.innerText = clip.description
   
  }; 
  return (
    
      <button className="drum-pad" id={`drum-${audioClip.keyTrigger}`} autoFocus={audioClip.keyTrigger === 'S'} onClick={() => playSound(audioClip)}>
      <audio id={audioClip.keyTrigger} src={audioClip.url} className="clip"></audio>
      {audioClip.keyTrigger}
      </button>
     
   
  )
}

export default Drum
