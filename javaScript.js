let fetchApi = "https://fakestoreapi.com/products";

let getData = async () => {
    let listData = document.querySelector("#myUL");
    try {
    let getData = await fetch(fetchApi);
    let myData = await getData.json();
    listData.innerHTML = ""; // Clear existing list items before adding new ones
        myData.forEach(singleProduct => {
            let title = `<li><a href="">${singleProduct.title}</a></li>`;
            listData.innerHTML += title; 
        });
    } catch (error) {
        console.error("Failed to fetch data:", error);
        listData.innerHTML = `<li>Error loading products. Please try again later.</li>`;
    }
    }

function myFunction() {
    let input, filter, ul, li, a, i, txtValue;
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase().trim(); // Trim whitespace from both ends of the input
    ul = document.getElementById("myUL");
    li = ul.getElementsByTagName("li");
    //getData();

    for (i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        txtValue = a.textContent || a.innerText;
        
        if (filter === "") {
            a.style.display = "none"; // Hide all items if the input is empty
        } else if (txtValue.toUpperCase().startsWith(filter)) {
            
            a.style.display = "block"; // Show matching items
            a.style.animation= "fadeIn 5s";
            
        } else {
            a.style.display = "none"; // Hide non-matching items
        }
    }
}


document.addEventListener("DOMContentLoaded", function () {
    getData(); // Load the data when the DOM content is loaded
});
