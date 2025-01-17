import axios from "axios";
// import { response } from "express";

const Tabs = (topics) => {
  const topicsDiv = document.createElement('div');
  topicsDiv.classList.add('topics');
 
  topics.forEach( (element) => {
  const tabDiv = document.createElement('div');
  tabDiv.classList.add('tab')
  tabDiv.textContent = element;
  topicsDiv.appendChild(tabDiv);
  console.log('element', element);
  })

  return topicsDiv;

// for(let i = 0; i < topics.length; i++){
//   const tabDiv = Tabs(topics[i]);
//   topicsDiv.appendChild(tabDiv);
// }

// })

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
}
console.log('task 3', Tabs(['javascript', 'bootstrap', 'technology']));

const tabsAppender = (selector) => {
  const createTabs = document.querySelector(selector)

  axios.get('http://localhost:5001/api/topics')
  .then(res => {
  console.log('task 4', res.data);
  // res.data.topics.forEach((element)=>{
    createTabs.appendChild(Tabs(res.data.topics))
  // })
    
  })
  .catch(err => {
    console.error(err);
  })
  .finally(() => console.log('OMG DONE!'))


  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
}

export { Tabs, tabsAppender }
