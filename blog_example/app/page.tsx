import { Suspense } from 'react'
import styles from './page.module.css'
import PostsPage from './posts/page'
import Loading from '@/utils/loading'

export default function Home() {
  return (
    <main className={styles.main}>
     <Suspense fallback={<Loading/>}>
      <PostsPage/>
     </Suspense>
    </main>
  )
}
