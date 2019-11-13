import React, { useEffect } from 'react';
// import { withRedux } from '../../../lib/redux';
import { setFirstStatePiece } from '../../../store';
// import { FIRST_ACTION } from './../store';
const Home = ({ setFirstStatePiece }) => {
	useEffect(() => {
		const firstStatePiece = 'value overridden during Page render';
		setFirstStatePiece({ firstStatePiece });
	}, []);
	return <h1>Connectico</h1>;
};

Home.getInitialProps = props => {
	const { reduxStore } = props;
	const { dispatch } = reduxStore;
	const firstStatePiece = 'value overridden during SSR';

	dispatch(setFirstStatePiece({ firstStatePiece }));
	const updatedReduxStore = reduxStore.getState();

	return { updatedReduxStore };
};

export default Home;
