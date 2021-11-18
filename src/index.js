console.log('%c HI', 'color: firebrick')

document.addEventListener("DOMContentLoaded", () => {
  fetchImages()
  fetchBreeds()
  colorBreeds()
  filterBreeds()
})
//const ul = document.querySelector("#dog-breeds")
let dogBreeds;
function fetchImages() {
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
    .then(res => res.json())
    // .then((images) => {
    //   for(const image of images.message) {
    //     const img = document.createElement("img")
    //     img.setAttribute("src", image)
    //     document.querySelector("#dog-image-container").appendChild(img)
    //   }
    // })
    .then(images => {
      images.message.forEach(image => {
        const img = document.createElement("img")
        img.setAttribute("src", image)
        document.querySelector("#dog-image-container").appendChild(img)
      })
    })
}
function fetchBreeds() {
  const breedUrl = 'https://dog.ceo/api/breeds/list/all'
  fetch(breedUrl)
    .then(res => res.json())
    // .then(dogs => {
    //   const dogsObj = dogs.message
    //   const dogBreeds = Object.keys(dogsObj)
    //   console.log(dogBreeds)
    //   for(const dog of dogBreeds) {
    //     const ul = document.querySelector("ul")
    //     const li = document.createElement("li")
    //     li.appendChild(dog)
    //     ul.appendChild(li)
    //   }
    // })
    .then(dogs => {
      const dogsObj = dogs.message
      dogBreeds = Object.keys(dogsObj)
      const ul = document.querySelector("#dog-breeds")
      dogBreeds.forEach(breed => {
        const li = document.createElement("li")
        li.append(breed)
        ul.appendChild(li)
      })
    })
}
function colorBreeds() {
  const ul = document.querySelector("#dog-breeds")
    ul.addEventListener("click", (event) => {
      event.target.style.color = "#dac508"
    })
}
function filterBreeds() {
  const dropdown = document.querySelector("#breed-dropdown")
  dropdown.addEventListener("change", event => {
    const letter = event.target.value
    const filteredBreeds = dogBreeds.filter(breed => breed.startsWith(letter))
    const ul = document.querySelector("#dog-breeds")
    const lis = document.querySelectorAll("li")
    lis.forEach(li => li.remove())
    filteredBreeds.forEach(filtered => {
      const li = document.createElement("li")
      li.append(filtered)
      ul.appendChild(li)
    })
  })
}