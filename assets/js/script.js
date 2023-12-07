const search = document.querySelector('#search');
const results = document.querySelector('#results');
const ul = document.querySelector('ul');


const test = async(query) => {
    const response = await fetch(`./api/?q=${query}`);
    const json = await response.json();
    const data = JSON.stringify(json)
    const final = JSON.parse(data)
    for(let entry of final){
        console.log(entry)
        const li = document.createElement('li');
        li.innerHTML += `<article><div class="info">
            <h2>${entry.title}</h2> <h4>${entry.cast}</h4>
        </div><div class="cover"><img src="assets/img/posters/${entry.id_movie}.jpg" /></div></article>`
        ul.append(li)
    }
    }

addEventListener("input",(e) => {
    while(ul.firstChild){
        ul.removeChild(ul.firstChild)
    }
    /* results.textContent += e.target.value */
    test(e.target.value)
    
})

/* const test = async(query) => {
    const response = await fetch(`http://localhost/netflux/search.php?q=${query}`);
    const json = response.json();
    for (let entry in json){
        const li = document.createElement('li');
        li.textContent = entry.title
        ul.append(li)
    }
    console.dir(json)
    } */