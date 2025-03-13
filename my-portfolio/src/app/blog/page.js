import Link from "next/link";

async function getPosts() {
  const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}` // On Vercel
    : "http://localhost:3000"; // On Localhost

  const res = await fetch(`${baseUrl}/api/posts`);

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.statusText}`);
  }

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
