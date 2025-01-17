import { useEffect } from "react";
import * as C from "./App.styles"; 
import { Character } from "./components/Character";
import { useCharacter } from "./hooks/useCharacter";

const App =()=> {   

  const char = useCharacter();

   useEffect(()=> {

    window.addEventListener("keydown", handlekeydown); 

   }, []) ;  

    const handlekeydown = (e: KeyboardEvent) => {

      switch(e.code) {

        case 'KeyA':
        case 'ArrowLeft':
          char.moveLeft();

        break; 
        case 'KeyW':
        case 'ArrowUp':
          char.moveTop();

        break; 
        case 'KeyD':
        case 'ArrowRight':
          char.moveRight();

        break; 
        case 'KeyS':
        case 'ArrowDown':
          char.moveDown(); 

        break; 

      }
     
   }

   return (
    
    <C.Container>

      <C.Map>

        <Character x={char.x} y={char.y} side={char.side}/> 

      </C.Map>
      
    </C.Container>

   ); 

}


export default App; 