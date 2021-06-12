import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Drawer from '../containers/Drawer';
import Container from '../base/Container';
import Title from '../base/Title';
import LibraryContainer from '../containers/LibraryContainer';
import sendRequest from '../actions/sendRequest';
import BotApiKeyModal from '../containers/Modals/BotApiKeyModal';
import { isUserAuthorized } from '../http/authorization';

function Dashboard() {
  return (
    <>
      <BotApiKeyModal />
      <Head>
        <title>TelegramBotBuilder dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Title type="h4">Dashboard</Title>
      </Header>
      <Drawer />
      <Container>
        <LibraryContainer />
      </Container>
    </>
  );
}

// export async function getStaticProps(context) {
//   const res = await fetch('http://localhost:8080/api/');
//   const data = await res.json();

//   console.log(data);

//   if (!data) {
//     return {
//       notFound: true,
//     };
//   }

//   return {
//     props: { data },
//   };
// }

export async function getStaticProps(context) {
  const isAuthorized = true;

  const res = await isUserAuthorized({ isAuthorized });

  console.log(res);

  if (!res.data.ok) {
    return {
      redirect: {
        destination: '/authorization',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default Dashboard;
