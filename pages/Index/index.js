import { connect } from 'react-redux';
import { compose } from 'redux';
import { setFirstStatePiece } from '../../store';
import HomePage from './IndexPage/index';
import { withRedux } from './../../lib/redux';
/** This decorator is left in place, as it will be necessary to implement WooCommerce settings */
const mapStateToProps = state => {
	return {};
};
const mapDispatchToProps = {
	setFirstStatePiece
};

const withConnect = connect(mapStateToProps, mapDispatchToProps);
const enhance = compose(withRedux, withConnect);
const Home = enhance(HomePage);

export default Home;
