export const riddleReducer = (state, action) => {
    // Destructures values from state
    const {letterOne, letterTwo, letterThree, letterFour, letterFive } = state
    // Defines the letters used in the answer
    const letters = ['a', 'b', 'c', 'd', 'e']
    let letter

    //Toggles the Letter shown 
    switch (action) {
        case 'letterOne':
            // Checks current letter and switches it to next in letters array
            letters.map((lett,i) => {
               if( lett === letterOne) {
                   //if at the end of the array, switches to the front
                   if (lett === 'e'){
                        letter = letters[0]
                   } else {
                       letter = letters[i+1]
                   }
                }  
            })
            return{
                ...state,
                letterOne: letter
            };
        
        case 'letterTwo':
            // Checks current letter and switches it to next in letters array
            letters.map((lett,i) => {
               if( lett === letterTwo) {
                   //if at the end of the array, switches to the front
                   if (lett === 'e'){
                        letter = letters[0]
                   } else {
                       letter = letters[i+1]
                   }
                }  
            })
            return{
                ...state,
                letterTwo: letter
            };

        case 'letterThree':
            // Checks current letter and switches it to next in letters array
            letters.map((lett,i) => {
               if( lett === letterThree) {
                   //if at the end of the array, switches to the front
                   if (lett === 'e'){
                        letter = letters[0]
                   } else {
                       letter = letters[i+1]
                   }
                }  
            })
            return{
                ...state,
                letterThree: letter
            };
        case 'letterFour':
            // Checks current letter and switches it to next in letters array
            letters.map((lett,i) => {
               if( lett === letterFour) {
                   //if at the end of the array, switches to the front
                   if (lett === 'e'){
                        letter = letters[0]
                   } else {
                       letter = letters[i+1]
                   }
                }  
            })
            return{
                ...state,
                letterFour: letter
            };    
        
        case 'letterFive':
            // Checks current letter and switches it to next in letters array
            letters.map((lett,i) => {
               if( lett === letterFive) {
                   //if at the end of the array, switches to the front
                   if (lett === 'e'){
                        letter = letters[0]
                   } else {
                       letter = letters[i+1]
                   }
                }  
            })
            return{
                ...state,
                letterFive: letter
            };
        default:
            return state;
    }
}
