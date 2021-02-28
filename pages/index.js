import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className={styles.imageContainer}>
        <Image
          className={styles.HomeImg}
          src='/profile.jpg'
          width={323}
          height={414}
        />
      </div>
    </div>
  )
}
