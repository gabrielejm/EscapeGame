export const gameReducer = (state, action) => {

    switch (action) {
        case 'puzzleOne':
            console.log("finished the 1st puzzle")
            return{
                ...state,
                puzzleOne: true
            };
        case 'puzzleTwo':
            return{
                ...state,
                puzzleTwo: true
            };
        case 'puzzleThree':
            return{
                ...state,
                puzzleThree: true
            };
        case 'swordGrabbed':
            return{
                ...state,
                swordGrabbed: true
            };
        case 'swordPlaced':
            return{
                ...state,
                swordPlaced: true
            };
        // case 'hide':
        //     let hide = document.getElementsByClassName('clickable')
        //     for ( let i = 0; i < hide.length; i++){
        //         hide[i].style.visibility = 'hidden'
        //       }
        //     break;
        default:
            break;
    }
}