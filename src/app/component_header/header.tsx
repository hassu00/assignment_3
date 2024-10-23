import Link from 'next/link';

export default function Header() {
  return (
    <div>
      <ul style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '3rem', backgroundColor: 'white', color: 'red', width: '100%' }}>
        <li>
          <h1 style={{ color: 'white', backgroundColor: 'red', padding: '0.5rem 1rem', fontWeight: 'bold', border: '2px solid white', borderRadius: '0.4rem' }}>
            Elegance Wear
          </h1>
        </li>
        <li>
          <form id="searchForm">
            <input
             
                id="searchInput"
                type="text"
                placeholder="search"
                style={{ padding: '0.5rem', border: '1px solid gray', borderRadius: '0.3rem' }}>
                </input>
          </form>
        </li>
        <li style={{ padding: '0 1rem' }}>
          <Link href="/about">About</Link>
        </li>
        <li style={{ padding: '0 1rem' }}>
          <Link href="/contact">Contact</Link>
        </li>
        <li style={{ padding: '0 1rem' }}>
          <Link href="/random">Random</Link>
        </li>
        <li style={{ padding: '0 1rem' }}>
          <button style={{ fontFamily: 'serif', borderRadius: '0.25rem', backgroundColor: 'red', padding: '0.5rem', color: 'white', transition: 'border-radius 0.3s', width: '4rem', height: '2.25rem' }}>
            <Link href="/login">Login</Link>
          </button>
        </li>
      </ul>
    </div>
  );
}
