import React from 'react'
import axios from 'axios'

const URL = 'https://jsonplaceholder.typicode.com/posts/1/comments'

const ChallengeB = () => {
    const [data, setData] = React.useState([])

    React.useEffect(() => {
        const fetchData = async() => {
            const { data } = await axios.get(URL)
            setData(data)
        }
        fetchData()
    }, [])

  return (
    <>
        <ul>
            {data.map(item => (
                <React.Fragment key={item.id}>
                    <li>Id: {item.id}</li>
                    <li>Name: {item.name}</li>
                    <li>Email: {item.email}</li>
                </React.Fragment>
            ))}
        </ul>
    </>
  )
}

export default ChallengeB