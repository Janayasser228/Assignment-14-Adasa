import { Link } from 'react-router-dom'

// view = "grid" أو "list" بيغير الـ class بس
export default function PostCard({ post, view = 'grid' }) {
  return (
    <article className={`card ${view}`}>
      <div className="thumb">
        <img
          src={post.image || post.thumbnail || ''}
          alt={post.title}
          onError={(e) => { e.currentTarget.style.display = 'none' }}
        />
        {post.category && <span className="badge">{post.category}</span>}
      </div>
      <div className="card-body">
        <h3>{post.title}</h3>
        <p className="excerpt">{post.excerpt || post.description || ''}</p>
        <div className="meta">
  <span>{post.author?.name || 'عدسة'}</span>
  <span>·</span>
  <span>{post.date || ''}</span>
</div>
        <Link className="read-more" to={`/blog/${post.id}`}>اقرأ المزيد ←</Link>
      </div>
    </article>
  )
}
