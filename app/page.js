import Link from "next/link";
import Classes from './page.module.css'
export default function Home() {
  return (
    <>
      <header className={Classes.header}>
        <div className={Classes.slideshow} >

        </div>
        <div>
          <div className={Classes.hero}>
            <h1>Next level food hai </h1>
            <p>Taste & share food from all over world</p>
          </div>
          <div className={Classes.cta}>
            <Link href='/community'> join the community</Link>
            <Link href='/meals'> Explore Meals</Link>
          </div>
        </div>
      </header>
      <main></main>
    </>
  );
}
