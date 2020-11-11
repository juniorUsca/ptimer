import Header from './Header'

const Layout = ({ className, children }) => (
  <>
    <Header />
    <main className={className}>
      {children}
    </main>
  </>
)

export default Layout
