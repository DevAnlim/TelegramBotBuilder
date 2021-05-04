import { PropTypes } from 'prop-types';
import { resetServerContext } from 'react-beautiful-dnd';
import wrapper from '../redux/store';
import Layout from '../components/Layout';
import '../styles/globals.css';

function App({ Component, ...pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

resetServerContext();

export default wrapper.withRedux(App);
