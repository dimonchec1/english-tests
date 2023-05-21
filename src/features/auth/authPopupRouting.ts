import { NextRouter } from "next/router"

const redirectOpenAuthPopup = (router: NextRouter) => {
    router.push({
        pathname: router.pathname,
        query: {...router.query, auth: 'signin'},
    })
}

const redirectCloseAuthPopup = (router: NextRouter) => {
    const {query} = router
    const {...newQuery} = query
    delete newQuery.auth
    router.push({
        pathname: router.pathname,
        query: newQuery
    })
}

export {
    redirectOpenAuthPopup,
    redirectCloseAuthPopup
}