import Link from "next/link";

export default function Home() {
  return <>
  <h1>welcome routing</h1>
  <Link href="/blog">Blog</Link>
  <Link href="/products">Products</Link>
  </>
}