function getItemFromCartById (id) {
	var item = null;
	for (let index = 0; index < cartItems.length; index++) {
		if (cartItems[index].id == id) {
			item = cartItems[index]
			return item;		
		}
	}
	return item;
}

function addItemToCartItem(id, quantity) {
	var item = getItemById(id);
	if (!quantity) {
		quantity = 1;
	}

	if (item) {
		if (quantity <= item.maxPerCostumer) {
			cartItems.push(new CartItem(item.id, item.price, quantity, item.costShipping));
		} else {
			alert('Sorry our store has a limit of ' + item.maxPerCostumer + ' per customer!');
		}
	} else {
		alert('An error occour please try again later!');
	}
}

function getElementByDataItemId(id, element) {
	for (let index = 0; index < element.length; index++) {
		var idRow = parseInt( element[index].getAttribute("data-item-id") );
		if(idRow == id) {
			return element[index];			
		}
	}
}

function removeCartItem(id) {
	if (id) {
		var element = getElementByDataItemId(id, tableCartRowItem);
		if (element) {
			tableCartItems.removeChild(element);

			for (let index = 0; index < cartItems.length; index++) {
				if (cartItems[index].id == id) {
					cartItems.splice(index, 1);
				}
			}
		} else {
			alert('An error occour please try again later!');
		}		
	} else {
		alert('An error occour please try again later!');
	}
}

// add to cart event
function onAddCart(id, quantity) {	
	let itemFound = false;
	
	for (let index = 0; index < cartItems.length; index++) {
		if (cartItems[index].id == id) {
			const item = getItemById(id);
			
			if (quantity) {
				if (quantity <= item.maxPerCostumer) {
					cartItems[index].quantity = quantity;
				} else {
					alert('Sorry our store has a limit of ' + item.maxPerCostumer + ' per customer!');
					return false;
				}
			} else {
				if (cartItems[index].quantity < item.maxPerCostumer) {
					cartItems[index].quantity += 1;					
				} else {
					alert('Sorry our store has a limit of ' + item.maxPerCostumer + ' per customer!');
					return false;
				}
			}
			
			itemFound = true;
			break;
		}
		
	}

	if (!itemFound) {
		addItemToCartItem(id, quantity);
	}

	checkTotalQuantityCart();

	return true;
}

function checkTotalQuantityCart() {
	txtBadgeCart.classList.add("hide-element");
	if (cartItems.length > 0) {
		txtBadgeCart.classList.remove("hide-element");

		let totalItemsInCart = 0;
		for (let index = 0; index < cartItems.length; index++) {
			totalItemsInCart += cartItems[index].quantity;
		}

		txtBadgeCart.innerHTML = totalItemsInCart;
	}
}

function displayHideChangeQuantityFields(id, display) {
	var txtQuantity = getElementByDataItemId(id, txtNewQuantityValue);	
	var btnNewQuantity = getElementByDataItemId(id, btnNewQuantityValue);
	var btnCancelQuantity = getElementByDataItemId(id, btnCancelQuantityValue);

	if (display) {
		txtQuantity.classList.remove("hide-element");
		btnNewQuantity.classList.remove("hide-element");
		btnCancelQuantity.classList.remove("hide-element");
	} else {
		txtQuantity.classList.add("hide-element");
		btnNewQuantity.classList.add("hide-element");
		btnCancelQuantity.classList.add("hide-element");
	}
}

function displayChangeQuantityFields(id) {	
	displayHideChangeQuantityFields(id, true);
	var item = getItemFromCartById(id);

	var txtQuantity = getElementByDataItemId(id, txtNewQuantityValue);	
	

	txtQuantity.value = item.quantity;
}

function onClickChangeQuantityItem (id) {	
	id = parseInt( id );		

	var txtQuantity = getElementByDataItemId(id, txtNewQuantityValue);
	const newQty = parseInt(txtQuantity.value);
	if (newQty || newQty == 0) {
		if (newQty > 0 && newQty < 11) {
			if (onAddCart(id, newQty)) {
				txtQuantity.value = '';
				
				var element = getElementByDataItemId(id, dropQuantityItem);
				element.classList.remove("hide-element");			
				element.value = newQty;			

				displayHideChangeQuantityFields(id, false);			
			}
		} else if(newQty > 10) {
			
			if (onAddCart(id, newQty)) {
				showHideButtonsChangeQuantity(id, false);
			}
			
		} else {
			removeCartItem(id);
			checkTotalQuantityCart();
		}
		populateCart();		
	} else {
		alert('Please enter a new value for quantity!');
	}	
}

function onChangeQuantity (id) {	
	id = parseInt( id );	
	var dropDown = getElementByDataItemId(id, dropQuantityItem);
	const newQty = parseInt(dropDown.value);
	
	if (newQty) {
		if (newQty > 10) {
			dropDown.classList.add('hide-element');
			displayChangeQuantityFields(id);			
		} else {
			if (!onAddCart(id, newQty)) {
				var item = getItemFromCartById(id);
				dropDown.value = item.quantity;
			}
			populateCart();
		}
	} else {		
		removeCartItem(id);
		checkTotalQuantityCart();
	}
}

function onChangeQuantityByType (id) {
	id = parseInt( id );

	var txtQuantity = getElementByDataItemId(id, txtNewQuantityValue);
	const newQty = parseInt(txtQuantity.value);

	var item = getItemFromCartById(id);	
	
	if(item.quantity != newQty) {	
		showHideButtonsChangeQuantity(id, true);		
	} else {
		showHideButtonsChangeQuantity(id, false);		
	}
}

function onClickCancelChangeQuantityItem(id) {
	id = parseInt( id );	
	var item = getItemFromCartById(id);

	var txtQuantity = getElementByDataItemId(id, txtNewQuantityValue);
	txtQuantity.value = item.quantity;
	showHideButtonsChangeQuantity(id, false);
}

function showHideButtonsChangeQuantity(id, show) {
	var btnNewQuantity = getElementByDataItemId(id, btnNewQuantityValue);
	var btnCancelQuantity = getElementByDataItemId(id, btnCancelQuantityValue);
	
	if (show) {		
		btnNewQuantity.classList.remove('hide-element');
		btnCancelQuantity.classList.remove('hide-element');
	} else {
		btnNewQuantity.classList.add('hide-element');
		btnCancelQuantity.classList.add('hide-element');
	}

}


// populate cart items 
function populateCart() {
	
	tableCartItems.innerHTML = '';	
	for (let index = 0; index < cartItems.length; index++) {
		

		let elementBase = protoRowCart.firstElementChild.innerHTML;
		var item = cartItems[index];
		var objKeys = Object.keys(item);	
		for (let i = 0; i < objKeys.length; i++) {
			switch (objKeys[i]) {
				case 'price':
					elementBase = elementBase.split('[' + objKeys[i] + ']').join('$' + item[objKeys[i]].toFixed(2));
					break;			
				default:
					elementBase = elementBase.split('[' + objKeys[i] + ']').join(item[objKeys[i]]);
					break;
			}
			
		}

		elementBase = elementBase.split('[subtotal]').join('$' + (item.price * item.quantity).toFixed(2) );		
		tableCartItems.innerHTML += elementBase;
	}

	for (let index = 0; index < cartItems.length; index++) {		
		var item = cartItems[index];
		var dropDown = getElementByDataItemId(item.id, dropQuantityItem);	
		

		if (item.quantity < 11) {				
			dropDown.value = item.quantity;
		} else {			
			var txtQuantity = getElementByDataItemId(item.id, txtNewQuantityValue);
			dropDown.classList.add("hide-element");
			txtQuantity.classList.remove("hide-element");
			txtQuantity.value = item.quantity;
		}
	}
}