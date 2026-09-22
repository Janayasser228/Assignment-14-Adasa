export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <p>عدسة — مدونة عربية عن التصوير الفوتوغرافي.</p>
        <p className="muted">جميع الحقوق محفوظة &copy; {new Date().getFullYear()}</p>
      </div>
    </footer>
  )
}
