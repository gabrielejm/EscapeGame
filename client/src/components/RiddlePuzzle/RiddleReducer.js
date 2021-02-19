export const riddleReducer = (state, action) => {
    const {letterOne, letterTwo, letterThree, letterFour, letterFive } = state
    const letters = ['a', 'b', 'c', 'd', 'e']
    let letter

    switch (action) {
        case 'letterOne':
            console.log('button clicked')
            letters.map((lett,i) => {
               if( lett === letterOne) {
                   if (lett === 'e'){
                        letter = 'a'
                   } else {
                       letter = letters[i+1]
                       console.log(letter)
                   }
                }  
            })
            return{
                ...state,
                letterOne: letter
            };
        
        case 'letterTwo':
            console.log('button clicked')
            letters.map((lett,i) => {
               if( lett === letterTwo) {
                   if (lett === 'e'){
                        letter = 'a'
                   } else {
                       letter = letters[i+1]
                       console.log(letter)
                   }
                }  
            })
            return{
                ...state,
                letterTwo: letter
            };

        case 'letterThree':
            console.log('button clicked')
            letters.map((lett,i) => {
               if( lett === letterThree) {
                   if (lett === 'e'){
                        letter = 'a'
                   } else {
                       letter = letters[i+1]
                       console.log(letter)
                   }
                }  
            })
            return{
                ...state,
                letterThree: letter
            };
        case 'letterFour':
            console.log('button clicked')
            letters.map((lett,i) => {
               if( lett === letterFour) {
                   if (lett === 'e'){
                        letter = 'a'
                   } else {
                       letter = letters[i+1]
                       console.log(letter)
                   }
                }  
            })
            return{
                ...state,
                letterFour: letter
            };    
        
        case 'letterFive':
            console.log('button clicked')
            letters.map((lett,i) => {
               if( lett === letterFive) {
                   if (lett === 'e'){
                        letter = 'a'
                   } else {
                       letter = letters[i+1]
                       console.log(letter)
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
