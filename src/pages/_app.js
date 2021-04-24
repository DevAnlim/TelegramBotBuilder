import '../styles/globals.css';
import { PropTypes } from 'prop-types';
import Layout from '../components/Layout';
import { resetServerContext } from 'react-beautiful-dnd';

function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default App;

App.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.instanceOf(Object).isRequired,
};

resetServerContext();
