import React from 'react'
import { useParams , Route , Link , useRouteMatch} from 'react-router-dom'
import Comments from '../components/comments/Comments'
import HighlightedQuote from '../components/quotes/HighlightedQuote'
import useHttp from '../hooks/use-http'
import { getSingleQuote } from '../lib/api'
import { useEffect } from 'react'
import LoadingSpinner from '../components/UI/LoadingSpinner'

// import NoQuotesFound fr


const DUMMY_QUOTES = [
    {id:'q1', author:'Max',text:'Learning React is fun'},
    {id:'q2', author:'Max',text:'Learning programming is fun'}
]

function QuoteDetail() {

    const params = useParams()
    const match = useRouteMatch()
    const {quoteId} = params
    const {sendRequest , status , data: loadedQuote , error} = useHttp(getSingleQuote , true)
    useEffect(()=>{
        sendRequest(quoteId)

    },[sendRequest,quoteId])

    if(status === 'pending'){
        return(
            <div className='centered'>
                <LoadingSpinner/>
            </div>
        )

    }
    if(error){
        return(
            <p className='centered'>{error}</p>
        )
    }
   
    console.log(loadedQuote.text);

    if(!loadedQuote.text){
        return(
            <p className='centered'> no quote found</p>
        )
    }
    

  return (
    <React.Fragment>
       <HighlightedQuote text= {loadedQuote.text} author= {loadedQuote.author}/>
       <Route path={match.path} exact>
        <div className={`centered`}>
            <Link className='btn--flat' to={`${match.url}/comments`}>Load comments</Link>
        </div>
       </Route>

       <Route path={`${match.path}/comments`}>
            <Comments/>
       </Route>

    </React.Fragment>
  )
}

export default QuoteDetail