function onGetDate() {		
	var dateTimeNow = new Date();		
	var date = (dateTimeNow.getMonth() + 1) + '/' + dateTimeNow.getDate() + '/' + dateTimeNow.getFullYear();
  var time = dateTimeNow.getHours() + ":" + dateTimeNow.getMinutes();
  var dateTime = date + " - " + time;
  txtTime.innerHTML = dateTime;
}

function getItemById(id) {
	var item = null;
	
	for (let index = 0; index < storeItems.length; index++) {
		if (storeItems[index].id == id) {
			item = storeItems[index];
		}
	}

	return item;
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
function populateItems(category, currencyValue) {	
	mainItems.innerHTML = '';
	
	if(!currencyValue) {
		currencyValue = 1;
	}

	var categoryId = getCategoryId(categories, category);
	for (let index = 0; index < storeItems.length; index++) {
		if (!category || (category && categoryId == storeItems[index].category)) {
			addElementToPage(storeItems[index], currencyValue);
		}
	}
}

// add items do page
function addElementToPage (storeItems, currencyValue) {
	let elementBase = protoItem.innerHTML;		
	var storeItem = storeItems;		
	currencyValue = parseFloat(currencyValue);
	
	var objKeys = Object.keys(storeItems);

	for (let i = 0; i < objKeys.length; i++) {
		if(objKeys[i] == 'price') {
			elementBase = elementBase.split('[' + objKeys[i] + ']').join('$' + (currencyValue * storeItem[objKeys[i]]).toFixed(2));
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

// back to main page
function onBackFromDetails () {
	containerItens.classList.remove('hide-element');
	containerCart.classList.add('hide-element');
	containerItemDetails.classList.add('hide-element');	
}


// to details page
function onDetailsItems (id) {	
	containerItens.classList.add('hide-element');
	containerCart.classList.add('hide-element');
	containerItemDetails.classList.remove('hide-element');

	id = parseInt(id);
	
	var item = getItemById(id);

	if (item) {
		itemImage.src = item.image;
		itemName.innerHTML = item.name;
		itemPrice.innerHTML = '$' + item.price.toFixed(2);
		itemId.innerHTML = item.id;
		itemQuantityInStock.innerHTML = 'Available: ' + item.quantityInStock;
		itemMaxPerCostumer.innerHTML = 'Max per costumer: ' + item.maxPerCostumer;
		itemCostShipping.innerHTML = 'Cost of shipping: ' + item.costShipping;
		itemDescription.innerHTML = 'Description: ' +  item.description;
		

		for (let index = 0; index < btnAddReview.length; index++) {			
			btnAddReview[index].setAttribute("data-item-id", item.id);
		}
		
		addReview(item);
		
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
	populateItems(category);
}


// button to change to home
btnHome.addEventListener('click', function(event) {
	btnHome.parentElement.classList.add('active');
	btnCart.parentElement.classList.remove('active');
	containerCart.classList.add("hide-element");
	containerItens.classList.remove("hide-element");	
	event.preventDefault();
});

// button to change to home
logoText.addEventListener('click', function(event) {
	btnHome.parentElement.classList.add('active');
	btnCart.parentElement.classList.remove('active');
	containerCart.classList.add("hide-element");
	containerItens.classList.remove("hide-element");	
	event.preventDefault();
});


// button to change to cart
btnCart.addEventListener('click', function(event) {
	btnCart.parentElement.classList.add('active');
	btnHome.parentElement.classList.remove('active');
	containerItens.classList.add("hide-element");
	containerCart.classList.remove("hide-element");		
	
	populateCart();
	
	event.preventDefault();
});

// change the currency
inputCurrency.addEventListener('change', function(event) {
	populateItems(null, this.value);
	populateCart();
	event.preventDefault();
});


//load event
document.addEventListener('DOMContentLoaded', function(event) {				
	populateCurrency();
	populateItems(null);
	addTabToPage();

	setInterval(onGetDate, 1000);

	//cart.js
	checkTotalQuantityCart();
});

for (let index = 0; index < btnAddReview.length; index++) {
	btnAddReview[index].addEventListener('click', onAddReview);
}