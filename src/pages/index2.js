import Link from 'next/link'
import Layout from 'components/Layout'

const Home = () => (
  <Layout>
    <section className="m-4 space-x-2">
      <Link href="/workspaces">
        <button className="px-4 py-2 bg-gray-300 rounded-lg" type="button">
          Workspaces
        </button>
      </Link>
    </section>
    <div className="justify-center p-24 bg-white rounded-lg">
      <h1 className="text-lg">Junior Usca dice hola!!</h1>
    </div>
  </Layout>
)

export default Home
