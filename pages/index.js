import perspective from '@finos/perspective';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {

  const worker = perspective.worker();
  const table = worker.table({A: [1, 2, 3]});
  const view = table.view({sort: [["A", "desc"]]});
  view.to_json().then(json => {
    console.log(json);
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Let's try printing <a href="https://perspective.finos.org/">Perspective</a> in the console.log.
        </p>
      </main>
    </div>
  )
}
