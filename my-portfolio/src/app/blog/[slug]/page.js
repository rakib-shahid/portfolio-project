import BlogPost from "@/components/BlogPost";

async function getPost(slug) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/posts/${slug}`
  );
  if (!res.ok) return null;
  return res.json();
}

export default async function BlogPostPage({ params }) {
  const post = await getPost(params.slug);
  if (!post) {
    return <div className="text-center text-red-500">Post not found</div>;
  }

  return <BlogPost post={post} />;
}
