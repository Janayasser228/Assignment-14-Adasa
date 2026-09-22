import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container section center notfound">
      <h1>404</h1>
      <h2>الصورة طلعت خارج التركيز</h2>
      <p className="muted">الصفحة اللي بتدوّر عليها مش موجودة.</p>
      <Link className="btn" to="/">الرجوع للرئيسية</Link>
    </section>
  )
}
