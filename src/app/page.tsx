import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <p>Minjeong Kim / F / South Korea</p>
      <p>Software Engineer living in Ireland</p>
      <Link href="/portfolios">Portfolios</Link>
    </div>
  );
}
