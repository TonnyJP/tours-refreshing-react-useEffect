import React from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'

function App() {
  const [ data, setData ] = React.useState([])
  const [ isError, setIsError ] = React.useState(false)
  const [ isFetching, setIsFetching ] = React.useState(false)

  const fetchData = async(url) => {
    try {
      setIsFetching(true)
      const resp = await fetch(url)
      if(resp.ok){
        const data = await resp.json();
        setData(data);
        setIsFetching(false)
        setIsError(false)
        return
      }
      setIsError(true)
      setIsFetching(false)

    } catch (error) {
      console.log(error)
    }
  }

  const deleteTour = (id) => {
    const newTours = data.filter((tour) => tour.id !== id)
    setData(newTours)
  }
  React.useEffect(() => {
    fetchData(url)
  },[])
  if(isFetching){
    return(<main>
      <Loading />
    </main>)
  }

  if(isError){
    return(<main>
      <h2>Sorry, something went wrong...</h2>
    </main>)
  }
  if(data.length === 0){
    return(
    <main>
      <div className='title'>
      <h2>No tours left </h2>
      <button onClick= {() =>fetchData(url)} className="btn">refresch</button>
      </div>
    </main>)
  }
  return (
    <main>
       < Tours data= {data} deleteTour={deleteTour} />
    </main>
  )
}

export default App
