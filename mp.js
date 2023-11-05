// const apiKey = "5IZ6Bn7RiiK0SChx3sZ1ksuHTtf0EUDddA6kxhzuHVtjiVAA5ae1IlbP";

let valueInput = "random"; 
const perPage = 15;
let currentPage = 1;



function fetchImages(link)
{
    fetch(link,
    {
        headers: 
        {
            Authorization: "5IZ6Bn7RiiK0SChx3sZ1ksuHTtf0EUDddA6kxhzuHVtjiVAA5ae1IlbP"
        }
    })
.then(resp => {
     return resp.json()
   })
.then(data => {
    console.log(data)
    loadimg(data.photos)
    loadimg(data.photos)
    loadimg(data.photos)
    loadimg(data.photos)
    loadimg(data.photos)
    loadimg(data.photos)
   })
}




function loadimg(images) {
 let imageSelecter = document.querySelector("#im1")
 imageSelecter.setAttribute("src",images[0].src.original)

 imageSelecter = document.querySelector("#im2")
 imageSelecter.setAttribute("src",images[1].src.original)
 
 imageSelecter = document.querySelector("#im3")
 imageSelecter.setAttribute("src",images[2].src.original)
 
 imageSelecter = document.querySelector("#im4")
 imageSelecter.setAttribute("src",images[3].src.original)
 
 imageSelecter = document.querySelector("#im5")
 imageSelecter.setAttribute("src",images[4].src.original)
 
 imageSelecter = document.querySelector("#im6")
 imageSelecter.setAttribute("src",images[5].src.original)
 
 imageSelecter = document.querySelector("#im7")
 imageSelecter.setAttribute("src",images[6].src.original)
 
 imageSelecter = document.querySelector("#im8")
 imageSelecter.setAttribute("src",images[7].src.original)

 imageSelecter = document.querySelector("#im9")
 imageSelecter.setAttribute("src",images[8].src.original)
 
 imageSelecter = document.querySelector("#im10")
 imageSelecter.setAttribute("src",images[9].src.original)
 
 imageSelecter = document.querySelector("#im11")
 imageSelecter.setAttribute("src",images[10].src.original)
 
 imageSelecter = document.querySelector("#im12")
 imageSelecter.setAttribute("src",images[11].src.original)
 
 imageSelecter = document.querySelector("#im13")
 imageSelecter.setAttribute("src",images[12].src.original)
 
 imageSelecter = document.querySelector("#im14")
 imageSelecter.setAttribute("src",images[13].src.original)
 
 imageSelecter = document.querySelector("#im15")
 imageSelecter.setAttribute("src",images[14].src.original)
}


fetchImages('https://api.pexels.com/v1/curated?page=1&per_page=15');


function search() {
    valueInput = document.querySelector("#searchInput").value
    valueInput = valueInput.toLowerCase();    
    console.log(valueInput)
    apiUrl = `https://api.pexels.com/v1/search?query=${valueInput}&page=1&per_page=15`;
    fetchImages(apiUrl)

}

function filterButton(filter){
    currentPage = 1
    valueInput = filter
    console.log(valueInput)
    apiUrl = `https://api.pexels.com/v1/search?query=${valueInput}&page=1&per_page=15`;
    fetchImages(apiUrl)
}



function previousFunc() {
    if (currentPage<2) {     
        alert("No Previous Page");   
    }
    else{
        currentPage--;
        let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=15`;
        apiUrl = valueInput ? `https://api.pexels.com/v1/search?query=${valueInput}&page=${currentPage}&per_page=15` : apiUrl;
        fetchImages(apiUrl);
    }
}

function nextFunc() {
    currentPage++;
    let apiUrl = `https://api.pexels.com/v1/curated?page=${currentPage}&per_page=15`;
    apiUrl = valueInput ? `https://api.pexels.com/v1/search?query=${valueInput}&page=${currentPage}&per_page=15` : apiUrl;
    fetchImages(apiUrl);
}