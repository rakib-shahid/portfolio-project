"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const password = localStorage.getItem("admin-auth");
    if (!password) {
      router.push("/admin");
    } else {
      fetch("/api/posts")
        .then((res) => res.json())
        .then(setPosts);
    }
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Admin Dashboard</h2>
      <button
        onClick={() => router.push("/admin/new")}
        className="bg-green-500 text-white px-4 py-2 mb-4 hover:cursor-pointer hover:bg-green-600"
      >
        Create New Post
      </button>
      <ul>
        {posts.map((post) => (
          <li key={post.id} className="border p-2 flex justify-between">
            <span>{post.title}</span>
            <div>
              <button
                onClick={() => router.push(`/admin/edit/${post.slug}`)}
                className="bg-blue-500 text-white px-3 py-1 mr-2 hover:cursor-pointer hover:bg-blue-600"
              >
                Edit
              </button>
              <button
                onClick={() => deletePost(post.slug)}
                className="bg-red-500 text-white px-3 py-1 hover:cursor-pointer hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

async function deletePost(slug) {
  const password = localStorage.getItem("admin-auth");
  const res = await fetch(`/api/posts/${slug}`, {
    method: "DELETE",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ password }),
  });
  if (res.ok) {
    window.location.reload();
  } else {
    alert("Failed to delete post!");
  }
}
