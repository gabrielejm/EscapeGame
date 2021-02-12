export const puzzleReducer = (state, action) => {
    //Deconstructs buttons from state
    const {button1, button2, button3, button4, button5} = state
    //Used to change color of buttons
    let color

    //Toggles the color of the buttons
    switch (action) {
        case 'button1':
            //Checks Color
            button1 === 'green' ? color = 'red' : color = 'green'
            //Changes Button in State
            return {
                ...state,
                button1: color
            }
        case 'button2':
            //Checks Color
            button2 === 'green' ? color = 'red' : color = 'green'
            //Changes Button in State
            return {
                ...state,
                button2: color
            }
        case 'button3':
            //Checks Color
            button3 === 'green' ? color = 'red' : color = 'green'
            //Changes Button in State
            return {
                ...state,
                button3: color
            }
        case 'button4':
            //Checks Color
            button4 === 'green' ? color = 'red' : color = 'green'
            //Changes Button in State
            return {
                ...state,
                button4: color
            }
        case 'button5':
            //Checks Color
            button5 === 'green' ? color = 'red' : color = 'green'
            //Changes Button in State
            return {
                ...state,
                button5: color
            }
        default:
            return state
    }
};