function CartItem (		
	id, 
	price, 
	quantity, 
	shipping		
) {	
	this.id = id;
	this.price = parseFloat(price);
	this.quantity = parseInt(quantity);
	this.shipping = shipping;
}

function Category (
	id,
	name
) {	
	this.id = id;
	this.name = name;
}

function StoreItem (		
	id, 
	name, 
	price, 
	quantityInStock, 
	maxPerCostumer, 
	category, 
	costShipping, 		
	description, 
	image,
	reviews
) {	
	this.id = id;
	this.name = name;
	this.price = price;
	this.quantityInStock = quantityInStock;
	this.maxPerCostumer = maxPerCostumer;
	this.category = category;
	this.costShipping = parseFloat(costShipping);
	this.description = description;
	this.image = image;

	if (Array.isArray(reviews)) {
		this.reviews = reviews;
	} else {
		this.reviews = [];
	}
}

function Currency (
	name,
	value
) {
	this.name = name;
	this.value = value;
}