import React from 'react'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import QuoteForm from '../components/quotes/QuoteForm'
import useHttp from '../hooks/use-http'
import { addQuote } from '../lib/api'


function AddQuote() {

    const {sendRequest , status} = useHttp(addQuote)
    const history = useHistory()

    useEffect(()=>{
        if(status === 'completed'){
            history.push('/quotes')
        }
    },[status , history])
    const  addQuoteHandler = (quoteData)=>{

        sendRequest(quoteData)
        console.log(quoteData)

    }

  return (
    <>
        <QuoteForm isLoading={status === 'pending'} onAddQuote = {addQuoteHandler} />
    </>
  )
}

export default AddQuote