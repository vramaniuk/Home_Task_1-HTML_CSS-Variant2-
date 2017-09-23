(function fetchNews(source) {
    const url = new URL('https://api.themoviedb.org/3/search/movie');
    url.searchParams.append('api_key', 'da1d7187da57841fb0a2d10ee5c6a9e5');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('query', 'terminator');
    url.searchParams.append('page', '1');
    return fetch(url)
        .then(
            response =>
                response.json(),
        )
        .then((result) => console.log(JSON.stringify(result, null, ' ')))
        .catch(err =>
            console.log('Fetch Error :-s', err.message),
        )
})("the-guardian-au");


// const url =  new URL('https://api.themoviedb.org/3/movie/popular');
// url.searchParams.append('api_key', 'da1d7187da57841fb0a2d10ee5c6a9e5');
// url.searchParams.append('language', 'en-US');
// url.searchParams.append('page', '1');


// const url = new URL('https://newsapi.org/v1/articles');
// url.searchParams.append('source', source);
// url.searchParams.append('sortBy', 'top');
// url.searchParams.append('apiKey', '67df228ef66d4d799240542da2a606ce');
