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
  cardTag.classList.add("card")

  const headElement = document.createElement("div")
  headElement.classList.add = ("headline")
  headElement.textContent = headline
  cardTag.appendChild(headElement)

  const authorElement = document.createElement("div")
  authorElement.classList.add("author")
  cardTag.appendChild(authorElement)

  const imgCont = document.createElement("div")
  imgCont.classList.add("img-container")
  authorElement.appendChild(imgCont)

  const imgSource = document.createElement("img")
  imgSource.src = authorPhoto
  imgCont.appendChild(imgSource)

  const authorSpan = document.createElement("span")
  authorSpan.textContent = `By ${authorName}`
  authorElement.appendChild(authorSpan)

  cardTag.addEventListener("click", () => {
    console.log(headElement.textContent)

  })
  console.log(headElement)
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
