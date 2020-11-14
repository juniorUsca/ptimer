import { useQuery, gql } from '@apollo/client'
import { initializeApollo } from 'utils/graphql'
import { useState, useReducer } from 'react'

import useWorkspace from 'containers/Workspace/useWorkspace'

import Layout from 'components/Layout'
import Table from 'components/Table'
import LateralPanel from 'components/Panel/LateralPanel'
import NewWorkspace from 'containers/Workspace/NewWorkspace'

const GET_WORKSPACES = gql`
  query getWorkspaces {
    security_workspace {
      id
      name
      picture
    }
  }
`
const table_columns = [
  {
    name: 'name',
    title: 'Nombre',
  },
  {
    name: 'picture',
    title: 'Imagen',
    type: 'image',
    round: false,
    alt: 'name',
  },
]

const Workspaces = () => {
  const {
    data, error, loading,
  } = useQuery(
    GET_WORKSPACES,
  )

  if (loading) return (<>cargando</>)
  if (error) return (<>error</>)

  const [showPanel, setShowPanel] = useState(false)
  const [workspace, dispatch] = useWorkspace()
  const handleRowClick = id => {
    console.log(id)
    setShowPanel(true)
    console.log(data.security_workspace.find(e => e.id === id))
    dispatch({ type: 'update', payload: data.security_workspace.find(e => e.id === id) })
  }
  const closePane = () => {
    setShowPanel(false)
    dispatch({ type: 'reset' })
  }

  console.log('render', workspace)

  return (
    <Layout>
      <section className="p-4 bg-gray-200">
        <div className="flex justify-between my-4">
          <h1 className="text-2xl font-light">Espacios de Trabajo</h1>
          <button className="px-3 py-2 text-white bg-yellow-600 rounded" type="button" onClick={() => setShowPanel(true)}>Nuevo</button>
        </div>
        <Table
          data={data.security_workspace}
          columns={table_columns}
          handleClick={handleRowClick}
        />
      </section>
      {showPanel && (
        <LateralPanel handleClose={closePane}>
          <NewWorkspace {...workspace} dispatch={dispatch} />
        </LateralPanel>
      )}
    </Layout>
  )
}

export async function getStaticProps () {
  const apolloClient = initializeApollo()
  await apolloClient.query({
    query: GET_WORKSPACES,
  })

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
    revalidate: 20,
  }
}

export default Workspaces
