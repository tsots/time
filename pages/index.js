import Head from 'next/head';

import Layout from '../components/layout/Layout';
import Data from '../data/persons';
import Persons from '../components/Persons';

export default function Home() {
  // console.log(Data[0]);
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Layout />
      <h1>Good Morning World!!</h1>
      <Persons Persons={Data} />
      <footer></footer>
    </div>
  );
}
