import { Runtime } from "./src/index.ts";


const T = Runtime.Tuple([                           // const T = {
Runtime.Const('X'),                               //   type: 'Tuple',
Runtime.Const('Y'),                               //   parsers: [
Runtime.Const('Z'),                               //     { type: 'Const', value: 'X' },
])                                                  //     { type: 'Const', value: 'Y' },
													  //     { type: 'Const', value: 'Z' },
													  //   ]
													  // }
  
  
const R = Runtime.Parse(T, 'X Y Z W')               // const R = [['X', 'Y', 'Z'], ' W']
console.log(R)
