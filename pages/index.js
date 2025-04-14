import Head from 'next/head'
import ContentItem from '../components/ContentItem'

const content = [
  {
    id: 'product_1',
    title: 'MILFY fun with @milfIris',
    category: 'MILF BIMBO',
    price: 10,
    image: '/public/thumbnails/IRIS7-thumb.jpg'
  },
  {
    id: 'product_2',
    title: 'Lizzy leaves you dizzy',
    category: 'TSBabe',
    price: 8,
    image: '/public/thumbnails/lizzy-thumb.jpg'
  }
]

export default function Home() {
  return (
    <div>
      <Head>
        <title>My Digital Store</title>
      </Head>
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6">Digital Products</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {content.map(item => (
            <ContentItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </div>
  )
}
