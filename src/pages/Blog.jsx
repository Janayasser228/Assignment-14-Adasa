import { useState, useMemo } from 'react'
import usePosts from '../usePosts.js'
import PostCard from '../components/PostCard.jsx'
import Pagination from '../components/Pagination.jsx'

const PER_PAGE = 6

export default function Blog() {
  const { posts, loading, error } = usePosts()

  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('الكل')
  const [view, setView] = useState('grid')
  const [page, setPage] = useState(1)

  const categories = useMemo(() => {
    const all = posts.map((p) => p.category).filter(Boolean)
    return ['الكل', ...new Set(all)]
  }, [posts])

  const filtered = useMemo(() => {
    const text = search.trim().toLowerCase()
    return posts.filter((p) => {
      const matchCategory = category === 'الكل' || p.category === category
      const matchSearch =
        text === '' ||
        (p.title || '').toLowerCase().includes(text) ||
        (p.excerpt || p.description || '').toLowerCase().includes(text)
      return matchCategory && matchSearch
    })
  }, [posts, search, category])

  const totalPages = Math.ceil(filtered.length / PER_PAGE)
  const currentPage = Math.min(page, totalPages || 1)
  const visible = filtered.slice((currentPage - 1) * PER_PAGE, currentPage * PER_PAGE)

  return (
    <section className="container section">
      <h1 className="section-title">المدونة</h1>

      <div className="toolbar">
        <div className="search">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="7" /><path d="m20 20-3.5-3.5" />
          </svg>
          <input
            type="text"
            placeholder="ابحث عن مقال…"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1) }}
          />
        </div>

        <div className="view-toggle">
          <button className={view === 'grid' ? 'active' : ''} onClick={() => setView('grid')} title="عرض شبكي">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <rect x="3" y="3" width="8" height="8" rx="1" /><rect x="13" y="3" width="8" height="8" rx="1" />
              <rect x="3" y="13" width="8" height="8" rx="1" /><rect x="13" y="13" width="8" height="8" rx="1" />
            </svg>
          </button>
          <button className={view === 'list' ? 'active' : ''} onClick={() => setView('list')} title="عرض قائمة">
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
              <rect x="3" y="4" width="18" height="4" rx="1" />
              <rect x="3" y="10" width="18" height="4" rx="1" />
              <rect x="3" y="16" width="18" height="4" rx="1" />
            </svg>
          </button>
        </div>
      </div>

      {/* فلترة بالتصنيف بأزرار (مش navs ولا tabs) */}
      <div className="chips">
        {categories.map((c) => (
          <button
            key={c}
            className={`chip ${category === c ? 'active' : ''}`}
            onClick={() => { setCategory(c); setPage(1) }}
          >
            {c}
          </button>
        ))}
      </div>

      {loading && <p className="muted">جاري التحميل…</p>}
      {error && <p className="muted">{error}</p>}

      {!loading && visible.length === 0 && (
        <p className="empty">لا يوجد مقال يطابق بحثك.</p>
      )}

      <div className={view === 'grid' ? 'grid' : 'list-view'}>
        {visible.map((post) => (
          <PostCard key={post.id} post={post} view={view} />
        ))}
      </div>

      <Pagination current={currentPage} total={totalPages} onChange={setPage} />
    </section>
  )
}
