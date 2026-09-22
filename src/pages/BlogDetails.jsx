import { useParams, Link } from 'react-router-dom'
import usePosts from '../usePosts.js'

export default function BlogDetails() {
  const { id } = useParams()
  const { posts, loading } = usePosts()

  const post = posts.find((p) => String(p.id) === String(id))

  if (loading) return <p className="container section muted">جاري التحميل…</p>

  if (!post) {
    return (
      <section className="container section center">
        <h2>المقال غير موجود</h2>
        <Link className="btn" to="/blog">الرجوع للمدونة</Link>
      </section>
    )
  }

  return (
    <article className="container section post">
      <Link className="back" to="/blog">→ الرجوع للمدونة</Link>
      {post.category && <span className="badge solid">{post.category}</span>}
      <h1>{post.title}</h1>
      <div className="meta">
        <span>{post.author || 'عدسة'}</span><span>·</span><span>{post.date || ''}</span>
      </div>
      <div className="thumb big">
        <img src={post.image || post.thumbnail || ''} alt={post.title}
             onError={(e) => { e.currentTarget.style.display = 'none' }} />
      </div>
      <div className="content">
        <p>{post.content || post.body || post.excerpt || post.description}</p>
      </div>
    </article>
  )
}
