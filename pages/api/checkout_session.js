import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed')

  const { id, price } = req.body

  const origin = req.headers.origin || 'http://localhost:3000'

  const session = await stripe.checkout.sessions.create({
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: id
        },
        unit_amount: price * 100,
      },
      quantity: 1
    }],
    mode: 'payment',
    success_url: `${origin}/thank-you?item=${id}`,
    cancel_url: `${origin}/`,
  })

  res.status(200).json({ sessionId: session.id })
}
