import { Suspense } from 'react'
import styles from './page.module.css'
import PostsPage from './posts/page'
import Loading from '@/utils/loading'
import { Heading } from '@chakra-ui/react'

export default function Home() {
  return (
    <main className={styles.main}>
     <Suspense fallback={<Loading/>}>
     <Heading m={2} p={2}>All Post from DummyJson Data</Heading>
      <PostsPage/>
     </Suspense>
    </main>
  )
}
