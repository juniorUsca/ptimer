import Layout from 'components/Layout'

const Home = () => (
  <Layout>
    <div className="justify-center p-24 bg-white rounded-lg">
      <h1 className="text-lg">Junior Usca dice hola!!</h1>
    </div>
    <div className="fixed inset-0 overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        <section className="absolute inset-y-0 right-0 flex max-w-full pl-10">
          <div className="relative w-screen max-w-md">
            <div className="absolute top-0 left-0 flex pt-4 pr-2 -ml-8 sm:-ml-10 sm:pr-4">
              <button aria-label="Close panel" className="text-gray-300 hover:text-white transition ease-in-out duration-150" type="button">
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div className="flex flex-col h-full py-6 overflow-y-scroll bg-white shadow-xl space-y-6">
              <header className="px-4 sm:px-6">
                <h2 className="text-lg font-medium text-gray-900 leading-7">
                  Panel title
                </h2>
              </header>
              <div className="relative flex-1 px-4 sm:px-6">
                <div className="absolute inset-0 px-4 sm:px-6">
                  <div className="h-full border-2 border-gray-200 border-dashed" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </Layout>
)

export default Home
