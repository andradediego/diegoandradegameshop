function getItemFromCartById (id) {
	var item = null;
	for (let index = 0; index < cartItems.length; index++) {
		if (cartItems[index].id == id) {
			item = cartItems[index];
			return item;		
		}
	}
	return item;
}

function getIndexItemFromCartById (id) {
	var index = null;
	for (let index = 0; index < cartItems.length; index++) {
		if (cartItems[index].id == id) {
			index = index;
			return index;		
		}
	}
	return index;
}

function getItemById(id) {
	var item = null;
	
	for (let index = 0; index < storeItems.length; index++) {
		if (storeItems[index].id == id) {
			item = storeItems[index];
			return item;
		}
	}

	return item;
}

function showElement(element, cssClass) {
	let display = 'block';

	if (!cssClass) {
		cssClass = 'show-element';
	} else {
		display = 'inline-block';
	}

	element.style.display = display;
	setTimeout(function () {
		element.classList.add(cssClass);
	}, 100);
}

function hideElement(element, cssClass) {
	let display = 'block';

	if (!cssClass) {
		cssClass = 'show-element';
	} else {
		display = 'inline-block';
	}

	element.style.display = display;

	element.style.display = 'none';
	setTimeout(function () {
		element.classList.remove(cssClass);
	}, 100);
}