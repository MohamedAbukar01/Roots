import Link from "next/link"

export default function Button({ comment, href, style }) {
  return (
    <button className={`${style}`} >
      <Link href={href ? href : ''}>{comment}</Link>
    </button>
  )
}
