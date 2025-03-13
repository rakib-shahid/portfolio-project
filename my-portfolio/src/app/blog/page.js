import Link from "next/link";
import { headers } from "next/headers";

async function getPosts() {
  const host = headers().get("host");
  const protocol = host?.includes("localhost") ? "http" : "https";
  const res = await fetch(`${protocol}://${host}/api/posts`);
  return res.json();
}
export default async function BlogPage() {
  const posts = await getPosts();
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Blog</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.slug}`} className="text-blue-500">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
