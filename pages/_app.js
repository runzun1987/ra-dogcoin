import '../styles/globals.css';
import Amplify from 'aws-amplify';
import exports from './../src/aws-exports';

Amplify.configure(exports);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
