


'use client';

import { useState, useEffect } from 'react';

interface Comment {
  id: number;
  name: string;
  content: string;
  userId: string;
}

export default function BlogPage() {
  const [comments, setComments] = useState<Comment[]>([]);
  const [userId] = useState('user123'); 

  useEffect(() => {
    const savedComments = localStorage.getItem('comments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('comments', JSON.stringify(comments));
  }, [comments]);

  const handleAddComment = (name: string, comment: string, userId: string) => {
    const newComment = {
      id: Date.now(),
      name,
      content: comment,
      userId,
    };

    setComments([newComment, ...comments]);
  };

  const handleDeleteComment = (id: number, userId: string) => {
    setComments(comments.filter((comment) => comment.id !== id || comment.userId !== userId));
  };

  return (
    <div className="blog-page px-4 sm:px-6 lg:px-60 py-10">
      <CommentForm onSubmit={handleAddComment} userId={userId} />

      <div className="comments-section space-y-6 mt-6">
        {comments.map((comment) => (
          <div key={comment.id} className="comment p-4 border rounded-lg shadow-lg">
            <div className="comment-header flex justify-between items-center mb-2">
              <strong className="text-lg">{comment.name}</strong>
              <button
                onClick={() => handleDeleteComment(comment.id, userId)}
                className="text-red-500 hover:text-red-700"
                disabled={comment.userId !== userId} 
              >
                Delete
              </button>
            </div>
            <p className="text-gray-700">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

const CommentForm = ({
  onSubmit,
  userId,
}: {
  onSubmit: (name: string, comment: string, userId: string) => void;
  userId: string;
}) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && comment.trim()) {
      onSubmit(name, comment, userId);
      setName('');
      setComment('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 space-y-4 max-w-2xl mx-auto">
      <div>
        <label
          htmlFor="name"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Name
        </label>
        <input
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Your name"
          required
          className="input w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <div>
        <label
          htmlFor="comment"
          className="block text-sm font-medium text-gray-700 mb-1"
        >
          Comment
        </label>
        <textarea
          id="comment"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Write a comment..."
          required
          className="textarea w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <button
        type="submit"
        className="btn px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Post Comment
      </button>
    </form>
  );
};
