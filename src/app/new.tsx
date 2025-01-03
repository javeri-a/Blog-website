'use client';

import { useState, useEffect } from 'react';

export default function CommentSection() {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [commentset, setComments] = useState<{ name: string; comment: string }[]>([]);

  useEffect(() => {
    const commentStorage = localStorage.getItem('comments');
    if (commentStorage) {
      setComments(JSON.parse(commentStorage));
    }
  }, []);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleCommentChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };

  const handleAddComment = () => {
    if (name.trim() && comment.trim()) {
      const updatedComments = [...commentset, { name, comment }];
      setComments(updatedComments);
      setName('');
      setComment('');
      localStorage.setItem('comments', JSON.stringify(updatedComments));
    }
  };

  const handleDeleteComment = (index: number) => {
    const updatedComments = commentset.filter((_, i) => i !== index);
    setComments(updatedComments);
    localStorage.setItem('comments', JSON.stringify(updatedComments));
  };

  return (
    <div className="flex justify-center items-center min-h-auto bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="p-6 w-full max-w-2xl bg-white shadow-md rounded-lg">
        <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Comments Section</h2>

        <div className="space-y-4">
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            placeholder="Enter your name"
            className="p-3 w-full border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7dd163]"
          />

          <input
            type="text"
            value={comment}
            onChange={handleCommentChange}
            placeholder="Write a comment..."
            className="p-3 w-full border border-gray-300 rounded-lg shadow-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#7dd163]"
          />

          <button
            onClick={handleAddComment}
            className="w-full px-4 py-3 bg-[#7dd163] text-white rounded-lg shadow hover:bg-[#113f03] focus:ring-2 focus:ring-offset-2 focus:ring-[#7dd163]"
          >
            Add Comment
          </button>
        </div>

        <div className="mt-8">
          {commentset.length > 0 ? (
            <ul className="space-y-4">
              {commentset.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-start bg-gray-100 p-4 rounded-lg shadow hover:shadow-md transition-shadow"
                >
                  <div className="text-gray-700">
                    <p className="font-medium">{item.name}</p>
                    <p className="text-gray-600">{item.comment}</p>
                  </div>
                  <button
                    onClick={() => handleDeleteComment(index)}
                    className="text-red-500 hover:text-red-700 font-medium"
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-gray-500 mt-4">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
}
