import axios from 'axios'
import { useCallback, useEffect, useMemo, useState } from 'react'

function AssignmentButton() {
  const [posts, setPost] = useState([])

  const [comments, setComments] = useState({})

  const [visibleComments, setVisibleComments] = useState({})

  const memoizedPosts = useMemo(() => posts, [posts])

  const fetchComments = useCallback(
    async (postId) => {
      if (!comments[postId]) {
        const res = await axios.get(
          `https://jsonplaceholder.typicode.com/comments?postId=${postId}`,
        )
        setComments((prevComments) => ({
          ...prevComments,
          [postId]: res.data,
        }))
      }
    },
    [comments],
  )

  useEffect(() => {
    async function fetchPosts() {
      const posts = await axios.get(
        'https://jsonplaceholder.typicode.com/posts',
      )
      setPost(posts.data)
    }
    fetchPosts()
  }, [])

  function toggleCommentsVisibility(postId) {
    setVisibleComments((prevState) => ({
      ...prevState,
      [postId]: !prevState[postId],
    }))
  }
  return (
    <>
      <ul>
        {memoizedPosts.map((p) => (
          <li key={p.id}>
            <strong>ID:</strong> {p.id} <br />
            <strong>Title:</strong> {p.title} <br />
            <strong>Body:</strong> {p.body} <br />
            <strong>User ID:</strong> {p.userId}
            <button
              onClick={() => {
                fetchComments(p.id)
                toggleCommentsVisibility(p.id)
              }}
            >
              {visibleComments[p.id] ? 'Hide Comments' : 'Show Comments'}
            </button>
            {visibleComments[p.id] && comments[p.id] && (
              <ul>
                {comments[p.id].map((comment) => (
                  <li key={comment.id}>
                    <strong>{comment.name}</strong> ({comment.email}):
                    <p>{comment.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </>
  )
}

export default AssignmentButton
