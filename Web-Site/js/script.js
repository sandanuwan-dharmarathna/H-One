let url = "https://northwind.now.sh/api/categories"

let allCategories = document.getElementById("allCategories")
let Categorydescription = document.getElementById("categoryDescription")



//GET Categories List
fetch(url)
	.then(response => response.json())
	.then(data => {
		console.log(data);

		data.map(p => {
			console.log(p.name);


			let listOfCategories = document.createElement("h6");
			listOfCategories.setAttribute('href', p.name,);
			listOfCategories.innerHTML = p.name;

			let listOfdescription = document.createElement("h6");
			listOfdescription.setAttribute('href', p.description);
			listOfdescription.innerHTML = p.description;

			allCategories.appendChild(listOfCategories);
			Categorydescription.appendChild(listOfdescription);
        })
	})

var form = document.getElementById('form')
form.addEventListener('submit', function (e) {
	// Auto submision of the form 
	e.preventDefault()

	var name = document.getElementById('name').value
	var description = document.getElementById('description').value

	// Fetch POST request 
	fetch(url, {
		method: 'POST',
		body: JSON.stringify({
			name: name,
			description: description
		}),
		headers: {
			"Content-Type": "application/json; charset=UTF-8"
        }
	})
		.then(function (response) {
			return response.json()
		})
		.then(function (data) {
			console.log(data)
		})
})

