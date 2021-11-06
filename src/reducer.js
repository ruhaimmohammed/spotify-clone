export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    token: "BQAuH3ly2xfM8QbS1_-nYblXcC840Re8fcXO0HvsHJc8MDCnQMJOCAn_63ZqmB4KA2ZXhnEoCJFPULdSz9ae0Ab6-JtRhpKmJ7e3UQY4yA6SiJEyDcpZT2Eme74ktNmSt74TLt1nCbwuK6ncJfEXzBbKOHWzGQPKNzVI72NTbw0rx3Nn"
};

const reducer = (state, action) => {
console.log(action);

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };

        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token
            }
            default:
                return state;
    }
}

export default reducer;