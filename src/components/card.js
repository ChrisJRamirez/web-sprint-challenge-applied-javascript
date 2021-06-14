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

const Card = (article) => {
  const { headline, authorPhoto, authorName } = article

  const cardTag = document.createElement("div")
  const headEle = document.createElement("div")
  const authorEle = document.createElement("div")
  const imgCont = document.createElement("div")
  const authorImage = document.createElement("img")
  const authorSpan = document.createElement("span")

  cardTag.appendChild(headEle)
  cardTag.appendChild(authorEle)
  authorEle.appendChild(imgCont)
  authorEle.appendChild(authorSpan)
  imgCont.appendChild(authorImage)

  cardTag.classList.add("card")
  headEle.classList.add("headline")
  imgCont.classList.add("img-container")
  authorEle.classList.add("author")

  headEle.textContent = headline
  authorImage.src = authorPhoto
  authorSpan.textContent = `By ${authorName}`


  cardTag.addEventListener("click", () => {
    console.log(headEle.textContent)

  })

  return cardTag
}

// TASK 6
// ---------------------
// Implement this function that takes a css selector as its only argument.
// It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
// However, the articles do not come organized in a single, neat array. Inspect the response closely!
// Create a card from each and every article object in the response, using the Card component.
// Append each card to the element in the DOM that matches the selector passed to the function.
//

const cardAppender = (selector) => {

}

export { Card, cardAppender }
