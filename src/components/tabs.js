// TASK 3
// ---------------------
// Implement this function which takes an array of strings ("topics") as its only argument.
// As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
// then the function returns the markup below.
// The tags used, the hierarchy of elements and their attributes must match the provided markup!
// The text inside elements will be set using their `textContent` property (NOT `innerText`).
//
// <div class="topics">
//   <div class="tab">javascript</div>
//   <div class="tab">bootstrap</div>
//   <div class="tab">technology</div>
// </div>
//

import axios from "axios"

const Tabs = (topics) => {
  const topicsTag = document.createElement("div")
  // const jsTag = document.createElement("div")
  // const bootTag = document.createElement("div")
  // const techTag = document.createElement("div")

  // topicsTag.appendChild(jsTag)
  // topicsTag.appendChild(bootTag)
  // topicsTag.appendChild(techTag)

  topicsTag.classList.add("topics")
  // jsTag.classList.add("tab")
  // bootTag.classList.add("tab")
  // techTag.classList.add("tab")

  // jsTag.textContent = topics[0]
  // bootTag.textContent = topics[1]
  // techTag.textContent = topics[2]

  topics.forEach(data => {
    const newElement = document.createElement("div")
    newElement.classList.add("tab")
    newElement.textContent = data
    topicsTag.appendChild(newElement)
  })

  return topicsTag
}


// TASK 4
// ---------------------
// Implement this function which takes a css selector as its only argument.
// It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
// Find the array of topics inside the response, and create the tabs using the Tabs component.
// Append the tabs to the element in the DOM that matches the selector passed to the function.

const tabsAppender = (selector) => {
  const tabSelector = document.querySelector(selector)

  axios.get(`https://lambda-times-api.herokuapp.com/topics`)
    .then(req => {
      const tabNew = Tabs(req.data.topics)
      tabSelector.appendChild(tabNew)
    })
    .catch(err => console.log(err))
}


export { Tabs, tabsAppender }
