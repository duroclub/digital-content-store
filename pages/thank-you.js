import { useRouter } from 'next/router'

const downloadLinks = {
  product_1: 'https://drive.google.com/file/d/11M1U6N30YBuMgcDfnvqTRNyGjmW6sZCe/view?usp=share_link',
  product_2: 'https://drive.google.com/file/d/1U8QoFDkvfnglWKZv91ZH0Eo_tncEjR21/view?usp=share_link'
}

export default function ThankYou() {
  const router = useRouter()
  const { item } = router.query

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Thanks for your purchase!</h1>
      {item && (
        <p>
          <a
            href={downloadLinks[item]}
            className="text-blue-600 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click here to download your file
          </a>
        </p>
      )}
    </div>
  )
}
