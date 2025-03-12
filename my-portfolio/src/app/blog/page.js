import Link from "next/link";

async function getPosts() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
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
