(function fetchNews(source) {
    const url = new URL('https://api.themoviedb.org/3/genre/movie/list');
    url.searchParams.append('api_key', 'da1d7187da57841fb0a2d10ee5c6a9e5');
    url.searchParams.append('language', 'en-US');
    // url.searchParams.append('page', '1');
    return axios.get(url)
        .then(response => console.log(response))

        .catch(err =>
            console.log('Fetch Error :-S', err)
        )
})("the-guardian-au");
(function fetchNews(source) {
    const url = new URL('https://api.themoviedb.org/3/movie/popular');
    url.searchParams.append('api_key', 'da1d7187da57841fb0a2d10ee5c6a9e5');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', '2');
    return axios.get(url)
        .then(response => console.log(JSON.stringify(response.data,null,' ')))

        .catch(err =>
            console.log('Fetch Error :-S', err)
        )
})("the-guardian-au");
(function fetchNews(source) {
    const url = new URL('https://api.themoviedb.org/3/movie/popular');
    url.searchParams.append('api_key', 'da1d7187da57841fb0a2d10ee5c6a9e5');
    url.searchParams.append('language', 'en-US');
    url.searchParams.append('page', '3');
    return axios.get(url)
        .then(response => console.log(JSON.stringify(response.data,null,' ')))

        .catch(err =>
            console.log('Fetch Error :-S', err)
        )
})("the-guardian-au");
