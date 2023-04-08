import axios from "axios";

const Card = (article) => {
  const carddiv = document.createElement('div');
  const headlinediv = document.createElement('div');
  const authordiv = document.createElement('div');
  const imgdiv = document.createElement('div');
  const imgAuthor = document.createElement('img');
  const spanBy = document.createElement('span');

  carddiv.classList.add('card');
  headlinediv.classList.add('headline');
  authordiv.classList.add('author');
  imgdiv.classList.add('img-container');

  carddiv.appendChild(headlinediv);
  carddiv.appendChild(authordiv);
  authordiv.appendChild(imgdiv);
  imgdiv.appendChild(imgAuthor);
  authordiv.appendChild(spanBy);

  headlinediv.textContent = article.headline;
  imgAuthor.src = article.authorPhoto;
  spanBy.textContent = `By ${article.authorName}`;
  
  return carddiv;

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
}
console.log('task 5', Card({headline:'web', authorPhoto:'photo', authorName:'name'}))

const cardAppender = (selector) => {
  
  axios.get('http://localhost:5001/api/articles')
  .then(res => {
    console.log('task 6', res.data)
    const data = res.data.articles;
    for(let key in data){
      data[key].forEach(article => {
        let cardElement = document.querySelector(selector)
        cardElement.appendChild(Card(article))
      })
      

    }

    })
    
  .catch(err => {
    console.error(err);
  })


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
