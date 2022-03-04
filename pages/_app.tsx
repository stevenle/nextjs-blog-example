import '../sass/global.sass';
import type {AppProps} from 'next/app';
import {GridOverlay} from '../components/GridOverlay';

function MyApp({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <GridOverlay />
    </>
  );
}

export default MyApp;
