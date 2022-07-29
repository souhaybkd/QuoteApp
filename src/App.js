import React from "react";
import { Suspense } from "react";
import { Route , Switch ,Redirect} from "react-router-dom";
import Layout from "./components/layout/Layout";
// import Quotes from "./pages/Quotes";
// import AddQuote from "./pages/AddQuote";
// import QuoteDetail from "./pages/QuoteDetail";
// import NotFound from "./pages/NotFound";
import LoadingSpinner from "./components/UI/LoadingSpinner";

const Quotes = React.lazy(()=> import("./pages/Quotes"))
const AddQuote = React.lazy(()=> import("./pages/AddQuote"))
const QuoteDetail = React.lazy(()=> import("./pages/QuoteDetail"))
const NotFound = React.lazy(()=> import("./pages/NotFound"))

function App() {
  return (
  <>
    <Layout>
      <Switch>
        <Suspense fallback={<div className="centered"><LoadingSpinner/></div>}>
          <Route path='/' exact>
            <Redirect to='/quotes'/>
          </Route>
          <Route path='/quotes' exact>
            <Quotes/>
          </Route>
          <Route path='/quotes/:quoteId'>
            <QuoteDetail/>
          </Route>
          <Route path='/add-quote'>
            <AddQuote/>
          </Route>
          {/* <Route path='*'  >
            <NotFound/>
          </Route> */}
        </Suspense>
      </Switch>
      </Layout>
  </>
  );
}

export default App;
