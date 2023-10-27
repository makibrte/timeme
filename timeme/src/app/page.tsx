import Image from 'next/image'
import Link from 'next/link'
import styles from './page.module.css';
import NavBar from './components/NavBar';


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-end justify-between w-full">
      <NavBar />
    </main>
  )
}
