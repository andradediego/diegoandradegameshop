function onGetDate() {		
	var dateTimeNow = new Date();		
	var date = (dateTimeNow.getMonth() + 1) + '/' + dateTimeNow.getDate() + '/' + dateTimeNow.getFullYear();
  var time = dateTimeNow.getHours() + ":" + dateTimeNow.getMinutes();
  var dateTime = date + " - " + time;
  txtTime.innerHTML = dateTime;
}



function populatePrototype (destination, item, protype) {
	let elementBase = protype.innerHTML;
	var objKeys = Object.keys(item);	
	for (let i = 0; i < objKeys.length; i++) {			
		elementBase = elementBase.split('[' + objKeys[i] + ']').join(item[objKeys[i]]);
	}	
	destination.innerHTML += elementBase;
}

function populateCurrency () {
	inputCurrency.innerHTML = '';
	for (let index = 0; index < currencies.length; index++) {
		populatePrototype(inputCurrency, currencies[index], protoItemCurrency);
	}
}


// get the prototype and add tab to page
function addTabToPage() {
	for (let index = 0; index < categories.length; index++) {
		populatePrototype(mainNavTabs, categories[index], protoItemLinkTab);	
	}
}



// populate the items
function populateItems(category, currencySelected) {	
	mainItems.innerHTML = '';
	
	if (!currencySelected) {
		currencySelected = currencies[0].value
	}

	let currencyValue = 1;
	if (currencySelected != 'CAD') {
		axios.get('https://api.exchangeratesapi.io/latest?base=CAD')
		.then(function (response) {
			currencyValue = parseFloat(response.data.rates[currencySelected]);			
			populateItemsWithCurrencySelected(category, currencyValue, currencySelected);
		})
		.catch(function (error) {
			// handle error
			console.log(error);
		});		
	} else {
		populateItemsWithCurrencySelected(category, currencyValue, currencySelected);
	}
}

function populateItemsWithCurrencySelected(category, currencyValue, currencySelected) {
	var categoryId = getCategoryId(categories, category);
		for (let index = 0; index < storeItems.length; index++) {
			if (!category || (category && categoryId == storeItems[index].category)) {
				addElementToPage(storeItems[index], currencyValue, currencySelected);
			}
		}

		var divsContainer = document.querySelectorAll('#container-itens div.col');
		setTimeout(function () {
			for (let index = 0; index < divsContainer.length; index++) {			
				divsContainer[index].classList.add('show');			
			}
		}, 100);
}

// add items do page
function addElementToPage (storeItems, currencyValue, currencySelected) {
	if (!currencySelected) {
		currencySelected == 'CAD';
	}

	let elementBase = protoItem.innerHTML;		
	var storeItem = storeItems;		
	currencyValue = parseFloat(currencyValue);

	var objKeys = Object.keys(storeItems);

	for (let i = 0; i < objKeys.length; i++) {
		if(objKeys[i] == 'price') {
			elementBase = elementBase.split('[' + objKeys[i] + ']').join(currencySelected + '$' + (currencyValue * storeItem[objKeys[i]]).toFixed(2));
		} else {
			elementBase = elementBase.split('[' + objKeys[i] + ']').join(storeItem[objKeys[i]]);		
		}
	}
	mainItems.innerHTML += elementBase;
}

function onAddReview() {	
	var id = parseInt( this.getAttribute("data-item-id") );
	var review = reviewProduct.value;
	let item = null;
	
	for (let index = 0; index < storeItems.length; index++) {
		if (storeItems[index].id == id) {
			item = storeItems[index];
			item.reviews.push(review);
			break;
		}
	}

	if (item) {
		addReview(item);
		reviewProduct.value = '';
	} else {
		alert('An error occour please try again later!');
	}
}


function addReview (item) {
	previousReviews.innerHTML = '';
	for (let index = 0; index < item.reviews.length; index++) {			
		var element = protoItemReviews.firstElementChild;
		element.innerHTML = item.reviews[index];
		previousReviews.innerHTML += element.outerHTML;			
	}
}

// tab filtered itens
function displayItensByFilter(element, category) {	
	for (let index = 0; index < tabElement.length; index++) {
		tabElement[index].classList.remove("active");		
	}	
	element.parentElement.classList.add("active");
	populateItems(category, null);
}

function switchBetweenContainers(numberContainer) {	
	hideElement(containerItemDetails);	
	inputItemIdValidation.value = '';
	inputItemQuantityValidation.value = '';

	switch (numberContainer) {
		case 1:
			btnHome.parentElement.classList.add('active');
			btnCart.parentElement.classList.remove('active');
			btnValidation.parentElement.classList.remove('active');

			showElement(containerItens);
			showElement(containerCurrency);
			hideElement(containerCart);
			hideElement(containerValidation);			
			break;
		case 2:
			btnCart.parentElement.classList.add('active');
			btnHome.parentElement.classList.remove('active');
			btnValidation.parentElement.classList.remove('active');

			showElement(containerCart);
			showElement(containerCurrency);
			hideElement(containerItens);
			hideElement(containerValidation);
			break;
		case 3:
			btnValidation.parentElement.classList.add('active');
			btnHome.parentElement.classList.remove('active');
			btnCart.parentElement.classList.remove('active');

			showElement(containerValidation);
			hideElement(containerCart);
			hideElement(containerItens);
			hideElement(containerCurrency);
			break;
	}
}


// button to change to home
btnHome.addEventListener('click', function(event) {
	switchBetweenContainers(1);
	event.preventDefault();
});

linkHomePage.addEventListener('click', function(event) {
	switchBetweenContainers(1);
	event.preventDefault();
});

// button to change to home
logoText.addEventListener('click', function(event) {
	switchBetweenContainers(1);
	event.preventDefault();
});

// button to change to cart
btnCart.addEventListener('click', function(event) {
	switchBetweenContainers(2);	
	populateCart();	
	event.preventDefault();
});

// button validation
btnValidation.addEventListener('click', function(event) {
	switchBetweenContainers(3);
	event.preventDefault();
});

// change the currency
inputCurrency.addEventListener('change', function(event) {
	var categoryActive = document.querySelector('li.tab-element.active');
	var category = categoryActive.getAttribute("data-name-tab");	
	populateItems(category, this.value);
	populateCart();	

	event.preventDefault();
});


//load event
document.addEventListener('DOMContentLoaded', function(event) {				
	populateCurrency();
	populateItems(null, null);
	addTabToPage();

	setInterval(onGetDate, 1000);

	//cart.js
	checkTotalQuantityCart();	
});

for (let index = 0; index < btnAddReview.length; index++) {
	btnAddReview[index].addEventListener('click', onAddReview);
}