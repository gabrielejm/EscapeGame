export const modalReducer = (state, action) => {
 //Deconstructs messages from state
 const {primary, secondary} = state  
 //Used to change messages in Modal
 let message

 switch (action) {
     case 'hello':
         return{
             primary
         };
 
     default:
         return state;
 }
}