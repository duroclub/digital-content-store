import { loadStripe } from '@stripe/stripe-js'

const stripePromise = loadStripe('pk_live_51NaTmBEGwsYWanuICpIazRdpl7AL4WuRl1ktTEsCQAk556bmaQdi15vVJ0g8dZbHIs7EahqPR6pUaYjfjGDXSNlX00FdIfFvQU')

export default function ContentItem({ item }) {
  const handleBuy = async () => {
    const res = await fetch('/api/checkout_session', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(item)
    })
    const { sessionId } = await res.json()
    const stripe = await stripePromise
    stripe.redirectToCheckout({ sessionId })
  }

  return (
    <div className="border p-4 rounded shadow">
      <img src={item.image} alt={item.title} className="w-full h-40 object-cover mb-4" />
      <h2 className="text-xl font-semibold">{item.title}</h2>
      <p className="text-gray-600">{item.category}</p>
      <p className="text-lg font-bold mt-2">${item.price}</p>
      <button
        onClick={handleBuy}
        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Buy Now
      </button>
    </div>
  )
}
