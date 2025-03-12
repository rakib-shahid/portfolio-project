import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function BlogPost({ post }) {
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">
        Published on {new Date(post.createdAt).toLocaleDateString()}
      </p>

      <div className="prose prose-lg mt-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {post.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
