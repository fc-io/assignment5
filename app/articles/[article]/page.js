import fetchQL from "./fetchQL";
import Link from 'next/link'

async function getData(article) {
  const res = await fetchQL(article)
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error('Failed to fetch data');
  }

  return res.json();
}

export default async function Article({ params }) {
  const data = await getData(params.article)

  console.log(data?.data?.characters?.items[0].name)
  const nextPage = Number(params?.article) + 1

  return <div>
    <h1>Article – {params.article}</h1>
    <Link href={`/articles/${nextPage}`}>Next Page</Link>
    {data?.data?.characters?.items.map(({_id, name}) => {
      return <div key={_id}>
        <h1>{name}</h1>
      </div>
    })}
  </div>
}
