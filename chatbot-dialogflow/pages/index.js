import Head from 'next/head'
import styles from '../styles/Home.module.css'
import KommunicateChat from './chat'

import Kommunicate from '@kommunicate/kommunicate-chatbot-plugin';

//Kommunicate.init("59efaeae43ebc6ee3803dc79f4e22c6d" , {"popupWidget":"true","automaticChatOpenOnNavigation":true})

export default function Home() {
  return (
    <div className={styles.container}> Hello
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nextjs app with chatbot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

     <KommunicateChat></KommunicateChat>

    </div>
  )
}
