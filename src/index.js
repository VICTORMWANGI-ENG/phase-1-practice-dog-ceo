console.log('%c HI', 'color: firebrick')
const breedUrl = "https://dog.ceo/api/breeds/list/all"
 const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
function select(selector) {
  return document.querySelector(selector)
  
}
let imageBox = select('#dog-image-container')


document.addEventListener('DOMContentLoaded', () => {
 fetch(breedUrl)
  .then(res => res.json())
   .then(data => {
     const breeds = Object.keys(data.message)
		breedDisplayer(breeds);
   } )
  fetch(imgUrl)
    .then(res => res.json())
  .then(images=>imageDisplayer(images.message))
})
;
function imageDisplayer(images) {
  images.forEach(imgUrl => {
    const images = document.createElement('img')
    images.src = imgUrl
    append(imageBox,images)
  })
}
function breedDisplayer(breeds) {
  let breedName = select("#dog-breeds");
  breedName.textContent = breeds
  console.log(breeds)
}  

function append(parent, child) {
  return parent.appendChild(child)
}