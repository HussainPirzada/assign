fetch('https://jsonplaceholder.typicode.com/albums/1/photos')
                    .then((res) => { return res.json() })
                    .then((data) => {
                     let result = ` `;
                     document.getElementById('total').innerHTML=data.length;
                     data.forEach((product) => {
                      const { albumId, id, title, url, thumbnailUrl } = product

                     result +=
                    `<div class="column">
                        <img src="${thumbnailUrl}">
                        <p>${title}</p>
                    </div>`;

                        document.getElementById('result').innerHTML = result;
                    });
                })