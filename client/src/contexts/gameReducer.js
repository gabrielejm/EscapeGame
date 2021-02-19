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
        case 'puzzleFour':
            return{
                ...state,
                puzzleFour: true
            };
        default:
            break;
    }
}