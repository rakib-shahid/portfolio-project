"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();
    const password = localStorage.getItem("admin-auth");

    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, slug, content, password }),
    });

    if (res.ok) {
      router.push("/admin/dashboard");
    } else {
      alert("Failed to create post!");
    }
  }

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full border p-2"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="Slug (e.g., my-first-post)"
          className="w-full border p-2"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />
        <textarea
          placeholder="Content (Markdown supported)"
          className="w-full border p-2"
          rows={6}
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Publish
        </button>
      </form>
    </div>
  );
}
