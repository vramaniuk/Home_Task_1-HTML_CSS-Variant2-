window.onload =
    (function fetchNews(source) {
        const jsonPromise = new Promise(function (resolve, reject) {
            const url = new URL('https://newsapi.org/v1/articles');
            url.searchParams.append('source', source);
            url.searchParams.append('sortBy', 'top');
            url.searchParams.append('apiKey', '67df228ef66d4d799240542da2a606ce');
            fetch(url)
                .then(response => {
                    if (!response.ok)
                        throw new Error(`${response.status} ( ${response.statusText} )`);

                    resolve(response.json())
                })
                .catch(reject => alert(`Запрос к серверу не удался.Произошла ошибка: ${reject.message}`));
        });
        jsonPromise.then(result => {
            putMyArticle(result)
        });
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
            const box = document.getElementById("box");
            let oneFullSide = document.createDocumentFragment();
            for (let i = 0; i < result.articles.length; i++) {
                let instanceOfArticle = new Article(result, i);
                oneFullSide.appendChild(instanceOfArticle.createOneArticle());
            }
            box.appendChild(oneFullSide);
        }
    })("the-guardian-au");






