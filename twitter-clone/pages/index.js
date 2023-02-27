import Head from 'next/head'
import { Inter } from '@next/font/google'
import Sidebar from '@/components/Sidebar'
import Feed from '@/components/Feed'
import Widgets from '@/components/Widgets'
import CommentsModal from '@/components/CommentsModal'

const inter = Inter({ subsets: ['latin'] })

export default function Home({ newsResults, randomUsersResults }) {
  return (
    <>
      <Head>
        <title>Twitter Clone</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='flex min-h-screen mx-auto'>
        {/* Sidebar */}
        <Sidebar />

        {/* Feed */}

        <Feed />

        {/* Widgets */}

        <Widgets
          newsResults={newsResults.articles}
          randomUsersResults={randomUsersResults.results}
        />

        {/* Modal */}
        <CommentsModal />
      </main>
    </>
  )
}

// https://saurav.tech/NewsAPI/top-headlines/category/business/us.json

export async function getServerSideProps() {
  const newsResults = await fetch(
    'https://saurav.tech/NewsAPI/top-headlines/category/business/us.json'
  ).then((res) => res.json())

  // Who to follow section

  const randomUsersResults = await fetch(
    'https://randomuser.me/api/?results=30'
  ).then((res) => res.json())

  return {
    props: {
      newsResults,
      randomUsersResults,
    },
  }
}
