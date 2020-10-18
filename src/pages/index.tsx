import { NextPage } from 'next'
import { useQuery, gql } from '@apollo/client'

const IndexPage: NextPage = () => {
  const USERS = gql`
    query {
      users {
        id
        name
        age
      }
    }
  `

  const { loading, error, data } = useQuery(USERS)

  if (loading) return <p>loading...</p>
  if (error) return <p>error...</p>
  console.log(data)

  return <h2>IndexPage</h2>
}

export default IndexPage
