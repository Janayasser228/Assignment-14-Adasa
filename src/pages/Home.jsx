import { Link } from 'react-router-dom'
import usePosts from '../usePosts.js'
import PostCard from '../components/PostCard.jsx'

export default function Home() {
  const { posts, loading } = usePosts()
  const featured = posts.slice(0, 3)

  return (
    <>
      <section className="hero">
        <div className="container">
          <span className="kicker">مدونة تصوير فوتوغرافي</span>
          <h1>كل صورة حكاية<br /> تستحق أن تُروى</h1>
          <p>نصائح، مراجعات معدات، وقصص من مصورين حول العالم.</p>
          <Link className="btn" to="/blog">تصفّح المدونة</Link>
        </div>
      </section>

      <section className="container section">
        <h2 className="section-title">أحدث المقالات</h2>
        {loading ? (
          <p className="muted">جاري التحميل…</p>
        ) : (
          <div className="grid">
            {featured.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        )}
      </section>
    </>
  )
}
