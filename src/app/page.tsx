import CatCard from '@/components/cards/cat/CatCard';
import Link from 'next/link';
export default function Home() {
  const ICatCard = {
    tag: 'Felines',
    title: `What's new in Cats`,
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perferendis molestiae non nemo doloribus. Doloremque, nihil! At ea atque quidem!',
    author: 'Alex',
    time: '2h ago',
  };
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Link href={'/'}>home</Link>
      <CatCard {...ICatCard} />
    </main>
  );
}
