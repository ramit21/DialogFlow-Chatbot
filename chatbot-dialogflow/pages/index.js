import Head from 'next/head'
import styles from '../styles/Home.module.css'
import KommunicateChat from './chat'
import DialogFlowChat from './dialogflowchat'

export default function Home() {
  return (
    <div className={styles.container}> Hello
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Nextjs app with chatbot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <DialogFlowChat></DialogFlowChat>
      
    </div>
  )
  //<KommunicateChat></KommunicateChat>
  //<DialogFlowChat></DialogFlowChat>
}
