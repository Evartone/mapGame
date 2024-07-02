import * as C  from "./styles";

import { sidesofCharacter } from "../../types/sidesofCharacter"; 

type Props = {

    x:number; 
    y:number; 
    side: sidesofCharacter; 
}
 
export const Character =({x, y, side}: Props) => {

    const size = 30; // full size of the character
    const sides = {

        down: 0, 
        left: -30, 
        right: -60, 
        up: -90
    }

    return (

        <C.Container 
          
          size={size}
          left = {x * size} // horizontal position 
          Top = {y * size}
          sidePos={sides[side] ?? 0 } > 
         
        </C.Container>
    );
}