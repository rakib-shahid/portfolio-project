"use client";
import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";

export default function EditPost() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetch(`/api/posts/${slug}`)
      .then((res) => res.json())
      .then(setPost);
  }, [slug]);

  async function handleUpdate(e) {
    e.preventDefault();
    const password = localStorage.getItem("admin-auth");

    const res = await fetch(`/api/posts/${slug}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: post.title,
        content: post.content,
        password,
      }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("Failed to update post!");
    }
  }

  if (!post) return <p>Loading...</p>;

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Edit Post</h2>
      <form onSubmit={handleUpdate} className="space-y-4">
        <input
          type="text"
          className="w-full border p-2"
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <textarea
          className="w-full border p-2"
          rows={6}
          value={post.content}
          onChange={(e) => setPost({ ...post, content: e.target.value })}
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 hover:cursor-pointer hover:bg-blue-600"
        >
          Update
        </button>
      </form>
    </div>
  );
}
