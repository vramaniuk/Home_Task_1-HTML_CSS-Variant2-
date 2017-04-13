window.onload = function () {
    (function (source) {

        const url = new URL('https://newsapi.org/v1/articles');

        url.searchParams.append('source', source);
        url.searchParams.append('sortBy', 'top');
        url.searchParams.append('apiKey', '67df228ef66d4d799240542da2a606ce');
        return fetch(url)
            .then(response =>{
                if (!response.ok) {
                    return Promise.reject(new Error(
                        `${response.status} ( ${response.statusText} )`
                    ))
                }
                return response.json()}
            )
            .then((result) => {
                putMyArticle(result);
            })
            .catch(error => alert(`Запрос к серверу не удался.Произошла ошибка: ${error.message}`));
    })("the-guardian-au");


    function putMyArticle(result) {
        const box = document.getElementById("box");
        for (let i = 0; i < 10; i++) {
            let goURL = result.articles[i].url;
            let goImageURL = result.articles[i].urlToImage;
            let date = new Date(result.articles[i].publishedAt).toUTCString();
            let author = result.articles[i].author;
            let title = result.articles[i].title;
            let myArticle = document.createElement("article");
            myArticle.innerHTML = `<a href="${goURL}"> <img src="${goImageURL}" alt="loading..."></a>
<div style="color: grey">${date}</div>
<div>${title}</div>
<div style="color: grey"><span>Author(s):</span> ${author}</div>
<a href=${goURL}>To see more</a>`;
            box.appendChild(myArticle);
        }
    }


};




