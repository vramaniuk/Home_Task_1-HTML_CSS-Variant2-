window.onload =
    (function fetchNews(source) {

        const url = new URL('https://newsapi.org/v1/articles');
        url.searchParams.append('source', source);
        url.searchParams.append('sortBy', 'top');
        url.searchParams.append('apiKey', '67df228ef66d4d799240542da2a606ce');
        const box = document.getElementById("box");
        let promise = fetch(url);
        return promise
            .then(response => {
                    if (!response.ok) {
                        return Promise.reject(new Error(
                            `${response.status} ( ${response.statusText} )`
                        ))
                    }
                    return response.json();
                }
            )
            .then(result => {
                putMyArticle(result);
            })
            .catch(error => alert(`Запрос к серверу не удался.Произошла ошибка: ${error.message}`));

        function Article(result, i) {
            this.goURL = result.articles[i].url;
            this.goImageURL = result.articles[i].urlToImage;
            this.date = new Date(result.articles[i].publishedAt).toUTCString();
            this.author = result.articles[i].author;
            this.title = result.articles[i].title;
            this.createOneArticle = function () {
                let myArticle = document.createElement("article");
                myArticle.innerHTML = `
<a href="${this.goURL}"> <img src="${this.goImageURL}" alt="loading..."></a>
<div style="color: grey">${this.date}</div>
<div>${this.title}</div>
<div style="color: grey"><span>Author(s):</span> ${this.author}</div>
<a href=${this.goURL}>To see more</a>`;
                return myArticle;
            }
        }

        function putMyArticle(result) {
            let oneFullSide = document.createDocumentFragment();
            for (let i = 0; i < result.articles.length; i++) {
                let instanceOfArticle = new Article(result,i);
                oneFullSide.appendChild(instanceOfArticle.createOneArticle());
            }
            box.appendChild(oneFullSide);
        }
    })("the-guardian-au");






