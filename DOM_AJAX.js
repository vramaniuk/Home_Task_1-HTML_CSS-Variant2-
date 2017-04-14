window.onload =
    (function fetchNews(source) {

        const url = new URL('https://newsapi.org/v1/articles');
        url.searchParams.append('source', source);
        url.searchParams.append('sortBy', 'top');
        url.searchParams.append('apiKey', '67df228ef66d4d799240542da2a606ce');
        let promise = fetch(url);
        return promise
            .then(response => {
                    if (!response.ok) {
                        return Promise.reject(new Error(
                            `${response.status} ( ${response.statusText} )`
                        ))
                    }
                    return response.json()
                }
            )
            .then(result => {
                putMyArticle(result);
            })
            .catch(error => alert(`Запрос к серверу не удался.Произошла ошибка: ${error.message}`));

        function putMyArticle(result) {
            let arrayOfArticles=result.articles;
            const box = document.getElementById("box");
            for (let i = 0; i < arrayOfArticles.length; i++) {
                let goURL = arrayOfArticles[i].url;
                let goImageURL = arrayOfArticles[i].urlToImage;
                let date = new Date(arrayOfArticles[i].publishedAt).toUTCString();
                let author = arrayOfArticles[i].author;
                let title = arrayOfArticles[i].title;
                let myArticle = document.createElement("article");
                myArticle.innerHTML = `
<a href="${goURL}"> <img src="${goImageURL}" alt="loading..."></a>
<div style="color: grey">${date}</div>
<div>${title}</div>
<div style="color: grey"><span>Author(s):</span> ${author}</div>
<a href=${goURL}>To see more</a>`;
                box.appendChild(myArticle);
            }
        }
    })("the-guardian-au");






