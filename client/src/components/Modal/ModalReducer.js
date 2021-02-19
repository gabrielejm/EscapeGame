export const modalReducer = (state, action) => {  

 switch (action.type) {
     case 'change':
         return{
             ...state,
            message: action.value
         };
 
     default:
         return state;
 }
}