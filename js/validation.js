function changeTextGoBackPageDetails(text) {
	for (let index = 0; index < txtOriginText.length; index++) {
		txtOriginText[index].innerHTML = text;		
	}
}

function resetInputFieldsValidation() {
	inputItemIdValidation.value = '';
	inputItemQuantityValidation.value = '';
}


function resetValidation() {
	inputItemIdValidation.parentElement.parentElement.classList.remove('has-error', 'has-success', 'has-warning');
	erroMessageIdValidation.classList.add('hide-element');
	erroMessageIdValidation.innerHTML = '';

	inputItemQuantityValidation.parentElement.parentElement.classList.remove('has-error', 'has-success', 'has-warning');
	erroMessageQuantityValidation.classList.add('hide-element');
	erroMessageQuantityValidation.innerHTML = '';
}


function checkIdValid() {
	var id = parseInt(inputItemIdValidation.value);

	if(!id) {
		inputItemIdValidation.parentElement.parentElement.classList.add('has-error');
		erroMessageIdValidation.classList.remove('hide-element');
		erroMessageIdValidation.innerHTML = 'Please enter a valid id!';

		setTimeout(resetValidation, 3000);

		return null;
	}
	return id;
}

function setInputItemQualityValidationError(error, htmlClass) {
	inputItemQuantityValidation.parentElement.parentElement.classList.add(htmlClass);
	erroMessageQuantityValidation.classList.remove('hide-element');
	erroMessageQuantityValidation.innerHTML = error;
}

function checkQuantityValid() {
	var quantity = parseInt(inputItemQuantityValidation.value);

	if(!quantity) {
		setInputItemQualityValidationError('Please enter a valid quantity!', 'has-error');
		setTimeout(resetValidation, 3000);
		return null;
	}

	return quantity;
}


function onDetailsItems (id, page) {
	
	containerCurrency.classList.remove('hide-element');
	containerItens.classList.add('hide-element');
	containerCart.classList.add('hide-element');
	containerValidation.classList.add('hide-element');
	containerItemDetails.classList.remove('hide-element');

	id = parseInt(id);
	
	var item = getItemById(id);

	if (page != 'main') {
		changeTextGoBackPageDetails('Back to Validation');
	} else {
		changeTextGoBackPageDetails('Back to Items');
	}

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
		
		resetInputFieldsValidation();
		addReview(item);
	} else {
		alert('An error occour please try again later!');
	}
}

// back to main page
function onBackFromDetails () {	
	containerCart.classList.add('hide-element');
	containerItemDetails.classList.add('hide-element');	

	if (btnValidation.parentElement.classList.contains('active')) {
		containerItens.classList.add('hide-element');
		containerValidation.classList.remove('hide-element');
		containerCurrency.classList.add('hide-element');
	} else {
		containerValidation.classList.add('hide-element');
		containerItens.classList.remove('hide-element');
		containerCurrency.classList.remove('hide-element');
	}
}

btnDetailsItemValidation.addEventListener('click', function(event) {	
	const id = checkIdValid();
	if (id) {
		onDetailsItems(id, 'details');
	}	
});

btnAddItemValidation.addEventListener('click', function(event) {	
	const id = checkIdValid();
	const quantity = checkQuantityValid();
	if (id && quantity) {
		addRemoveItemFromCart(id, quantity);
	}	
});

btnRemoveItemValidation.addEventListener('click', function(event) {	
	const id = checkIdValid();
	const quantity = checkQuantityValid();
	if (id && quantity) {
		addRemoveItemFromCart(id, -quantity);
	}	
});

function addRemoveItemFromCart (id, quantity) {
	//setInputItemQualityValidationError(error, htmlClass) 
	var item = getItemById(id);
	var itemFromCart = getItemFromCartById(id);
	
	if (quantity > 0) {
		if (!itemFromCart && quantity <= item.maxPerCostumer) {
			cartItems.push(new CartItem(item.id, item.price, quantity, item.costShipping));

			setInputItemQualityValidationError('Item of id: ' + item.id + 'has been added with success to cart!', 'has-success');
		} else if (itemFromCart && (itemFromCart.quantity + quantity) <= item.maxPerCostumer) {
			itemFromCart.quantity += quantity;
			setInputItemQualityValidationError('Item of id: ' + item.id + 'has been added with success to cart!', 'has-success');
		} else {
			setInputItemQualityValidationError('Sorry our store has a limit of ' + item.maxPerCostumer + ' per customer!', 'has-error');
		}
	} else {		
		if (itemFromCart) {
			if ((itemFromCart.quantity + quantity) > 0) {
				itemFromCart.quantity += quantity;
				setInputItemQualityValidationError( (+quantity) + ' units of item id: ' + item.id + 'have been removed with success from cart!', 'has-success');
			} else {
				const index = getIndexItemFromCartById(id);
				cartItems.splice(index, 1);
				setInputItemQualityValidationError('Item of id: ' + item.id + 'has been removed with success from cart!', 'has-success');
			}
		} else {
			setInputItemQualityValidationError('There is no item of id: '+ item.id + 'in the cart', 'has-warning');
		}
	}	
	checkTotalQuantityCart();
	setTimeout(resetValidation, 3000);
}