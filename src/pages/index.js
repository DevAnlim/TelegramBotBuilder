import React from 'react';
import Head from 'next/head';
import Header from '../components/Header';
import Drawer from '../containers/Drawer';
import Title from '../base/Title';

export default function Dashboard() {
  return (
    <>
      <Head>
        <title>TelegramBotBuilder dashboard</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header>
        <Title type="h4">Dashboard</Title>
      </Header>
      <Drawer />
    </>
  );
}
