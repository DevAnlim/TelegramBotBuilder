import Head from 'next/head';
import Drawer from '../containers/Drawer';
import ConstructorContainer from '../containers/ConstructorContainer';

export default function Constructor() {
  return (
    <>
      <Head>
        <title>TelegramBotBuilder constructor</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Drawer />
      <ConstructorContainer />
    </>
  );
}
