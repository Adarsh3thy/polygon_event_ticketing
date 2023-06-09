/* pages/_app.js */
import '../styles/globals.css'
import Link from 'next/link'
import Head from "next/head"

function MyApp({ Component, pageProps }) {
  return (
    <div className="">
      <Head>
        <title>Ticketing System</title>
      </Head>
      <nav className="border-b p-6 ">
        <p className="text-4xl font-bold text-white">Blockchain Ticketing System</p>
        <div className="flex mt-4">
          <Link href="/">
            <a className="mr-4 text-pink-500">
              Home
            </a>
          </Link>
          <Link href="/create-event">
            <a className="mr-6 text-pink-500">
              Create Event
            </a>
          </Link>
          <Link href="/my-tickets">
            <a className="mr-6 text-pink-500">
              My Tickets
            </a>
          </Link>
          <Link href="/my-events">
            <a className="mr-6 text-pink-500">
              My Events
            </a>
          </Link>
        </div>
      </nav>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp