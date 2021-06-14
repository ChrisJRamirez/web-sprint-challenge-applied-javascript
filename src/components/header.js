// TASK 1
// ---------------------
// Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
//  <div class="header">
//    <span class="date">{ date }</span>
//    <h1>{ title }</h1>
//    <span class="temp">{ temp }</span>
//  </div>
//

const Header = (title, date, temp) => {
  const headerTag = document.createElement("div")
  const titleTag = document.createElement("h1")
  const dateTag = document.createElement("span")
  const tempTag = document.createElement("span")

  headerTag.classList.add("header")
  dateTag.classList.add("date")
  tempTag.classList.add("temp")
  dateTag.textContent = date
  titleTag.textContent = title
  tempTag.textContent = temp

  headerTag.appendChild(dateTag)
  headerTag.appendChild(titleTag)
  headerTag.appendChild(tempTag)

  return headerTag
}




const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  const header = Header("This Just In", "June 13, 2021", "Lambda is hard")
  // It should append the header to the element in the DOM that matches the given selector.

  const domSelector = document.querySelector(selector)
  domSelector.appendChild(header)

}

export { Header, headerAppender }
