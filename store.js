import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import config from './next.config';

const initialState = {
	firstStatePiece: 0
};

export const FIRST_ACTION = 'FIRST_ACTION';

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FIRST_ACTION:
			return {
				...state,
				firstStatePiece: action.firstStatePiece
			};
		default:
			return state;
	}
};

const actionSetFirstStatePiece = ({ firstStatePiece }) => ({
	type: FIRST_ACTION,
	firstStatePiece
});

let composeEnhancers;
const { DEV } = config.default.env;

if (DEV) {
	composeEnhancers = middleware => composeWithDevTools(middleware);
} else {
	composeEnhancers = middleware => middleware;
}

export const setFirstStatePiece = ({ firstStatePiece }) => dispatch =>
	dispatch(actionSetFirstStatePiece({ firstStatePiece }));

export const initializeStore = (preloadedState = initialState) => {
	return createStore(
		reducer,
		preloadedState,
		composeEnhancers(applyMiddleware(thunk))
	);
};
