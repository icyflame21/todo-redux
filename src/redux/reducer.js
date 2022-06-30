import {
    ADD_NEW_ITEM,DELETE_ITEM
} from './actions';

const initialState = {
    todoItem: []
};

export const reducer = (store = initialState, action) => {
    switch(action.type) {
        case ADD_NEW_ITEM:
            return {
                ...store,
                todoItem: [...store.todos, action.payload]
            };
        // case DELETE_ITEM:
        //     return {
        //         ...store, 
        //         todoItem: 
        //     }
        default:
            return store;
    }
}