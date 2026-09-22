import { useEffect, useState } from 'react'

// One small hook that loads posts.json from the public folder.
// It works whether the file is a plain array [...] or an object { "posts": [...] }.
export default function usePosts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    fetch('./posts.json')
      .then((res) => {
        if (!res.ok) throw new Error('Could not load posts.json')
        return res.json()
      })
      .then((data) => {
        const list = Array.isArray(data) ? data : data.posts || data.data || []
        setPosts(list)
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false))
  }, [])

  return { posts, loading, error }
}
