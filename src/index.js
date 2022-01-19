const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
fetch(imgUrl)
    .then(resp => resp.json())
    .then(data => {
        const dogImageContainer = document.querySelector("#dog-image-container")
        data.message.forEach(dog => {
            const img = document.createElement("img")
            img.src = dog
            dogImageContainer.appendChild(img)
        })
    })

const breedUrl = 'https://dog.ceo/api/breeds/list/all'
fetch(breedUrl)
    .then(resp => resp.json())
    .then(data => {
        const dogBreeds = document.querySelector("#dog-breeds")
        for (const i in data.message) {
            const subBreeds = data.message[i]
            const ul = document.createElement("ul")
            const li = document.createElement("li")
            li.textContent = i
            li.classList.add(i[0])
            dogBreeds.appendChild(li)
            li.addEventListener("click", e => {
                e.target.style.color = "red"
            })
            li.appendChild(ul)
            
            subBreeds.forEach(item => {
                const anotherLi = document.createElement("li")
                anotherLi.textContent = item
                ul.appendChild(anotherLi)
            })
        }
    })

function filterDogBreeds() {
    const breedDropdown = document.querySelector("#breed-dropdown")
    breedDropdown.addEventListener("change", e => {
        const allBreeds = document.querySelectorAll("li")
        const selectedBreed = document.querySelectorAll(`li.${e.target.value}`)
        switch (e.target.value) {
            case "a":
                allBreeds.forEach(item => item.hidden = true)
                selectedBreed.forEach(item => item.hidden = false)
                break;
            case "b":
                allBreeds.forEach(item => item.hidden = true)
                selectedBreed.forEach(item => item.hidden = false)
                break;
            case "c":
                allBreeds.forEach(item => item.hidden = true)
                selectedBreed.forEach(item => item.hidden = false)
                break;
            case "d":
                allBreeds.forEach(item => item.hidden = true)
                selectedBreed.forEach(item => item.hidden = false)
                break;
            case "reset":
                allBreeds.forEach(item => item.hidden = false)
                break;
        }
    })
}

filterDogBreeds()