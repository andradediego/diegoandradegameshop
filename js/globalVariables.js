function getCategoryId(categories, category) {
	let categoryId = null;	
	for (let index = 0; index < categories.length; index++) {
		if (categories[index].name == category) {
			categoryId = categories[index].id;
			break;
		}		
	}
	return categoryId;
}

function generateRandomQuantity() {
	return Math.floor(Math.random() * 101) + 1;
}

var currencies = [];
currencies.push(new Currency('Canada - CAD', 1));
currencies.push(new Currency('United States - USD', 0.7));
currencies.push(new Currency('Brazil - BRL', 3.72));

var categories = [];

categories.push(new Category(1, 'Consoles'));
categories.push(new Category(2, 'Games'));
categories.push(new Category(3, 'Acessories'));

var storeItems = [];
// Consoles
storeItems.push(new StoreItem(
	1,
	'Sony PlayStation 4 Pro 1TB Limited Edition Console - Marvel\'s Spider-Man Bundle',
	925.27,
	generateRandomQuantity(),
	12,
	getCategoryId(categories, 'Consoles'),
	5.0,
	'Experience a brand-new and authentic Spider-Man adventure with a fully customized Amazing Red PS4 Pro console featuring the Spider icon, DUALSHOCK 4 wireless controller, Marvel’s Spider-Man game, and digital content. This isn’t the Spider-Man you’ve met or ever seen before. This is an experienced Peter Parker who’s more masterful at fighting big crime in New York City. At the same time, he’s struggling to balance his chaotic personal life and career while the fate of millions of New Yorkers rest upon his shoulders.',
	'https://i5.walmartimages.com/asr/b301a4a6-5943-4d63-84da-f0f540c6744f_1.b06dee3efcedb210b2fb34e7ca2517bd.jpeg',
	[
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed commodo commodo mi ullamcorper vestibulum. Ut porttitor nulla at nisi dictum tincidunt non quis neque. Duis in facilisis orci. Donec sed mollis ante. Nam sodales ipsum non placerat sodales. Aenean laoreet mauris vitae ultrices cursus. Vestibulum eget metus vitae orci placerat fringilla.",
		"Nulla sit amet viverra orci, eget commodo odio. Nulla lorem magna, pharetra posuere auctor quis, eleifend et lectus. Sed id ultrices libero. Vestibulum commodo blandit erat posuere facilisis."
	]
));

storeItems.push(new StoreItem(
	2,
	'Xbox One X 1TB THE DIVISION 2 Bundle',
	650.0,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Consoles'),
	5.0,
	'Own the Xbox One X 1TB Tom Clancy’s The Division 2 Bundle and put the fate of the nation in your hands. Tom Clancy’s The Division 2 is an action shooter RPG where exploration and progression are the keys to survival. Lead your team of elite agents to save a country on the brink of collapse as you explore the open, dynamic, and hostile world of post-pandemic Washington, D.C. in stunning 4K UltraHD. Team up on Xbox Live, the most advanced multiplayer network, or go head-to-head with other squads in competitive multiplayer. Xbox One X features 4K UltraHD Blu-ray, 4K video streaming, Spatial Audio, and High Dynamic Range. With over 1,300 great games, immersive true 4K gaming, and 40% more power than any other console, there’s never been a better time to game with Xbox One X. (Online multiplayer on Xbox requires Xbox Live Gold, subscription sold separately, 1-month included.)',
  'https://i5.walmartimages.ca/images/Enlarge/566/147/6000199566147.jpg'
));

storeItems.push(new StoreItem(
	3,
	'Xbox One S 1TB All Digital Console',
	393.95,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Consoles'),
	5.0,
	'Go all digital with the Xbox One S All-Digital Edition and enjoy disc-free gaming with three great digital games included: Minecraft, Sea of Thieves, and Forza Horizon 3. Build a library of digital games in the cloud that travels with you; never lose, scratch, or struggle to find a new game to play. Expand your options with Xbox Game Pass (subscription sold separately): discover over 100 great games, download titles you’ve always wanted to play, and revisit old favorites. Cloud saves let you take your games on the go, continuing the game on any Xbox One when you sign in with your Microsoft Account. Preorder and pre-install upcoming games so you’re ready to play the moment they launch. Whether you’re gaming, watching 4K entertainment, or streaming your gameplay on Mixer with the touch of a button, there’s never been a better way to game with Xbox One. (Sea of Thieves requires an Xbox Live Gold subscription, sold separately.)',
  'https://i5.walmartimages.ca/images/Enlarge/766/067/6000200766067.jpg'
));

storeItems.push(new StoreItem(
	4,
	'PlayStation®4 PRO 1TB Console',
	499.96,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Consoles'),
	5.0,
	'The most advanced PlayStation® system ever. PS4 Pro is designed to take your favorite PS4 games and add to them with more power for graphics, performance, or features for your 4K HDR TV, or 1080p HD TV. Ready to level up?',
  'https://i5.walmartimages.ca/images/Enlarge/766/752/6000197766752.jpg'
));

storeItems.push(new StoreItem(
	5,
	'Nintendo Switch Console',
	299.0,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Consoles'),
	5.0,
	'Introducing Nintendo Switch, the new home video game system from Nintendo. In addition to providing single and multiplayer thrills at home, the Nintendo Switch system can be taken on the go so players can enjoy a full home console experience anytime, anywhere. The mobility of a handheld is now added to the power of a home gaming system, with unprecedented new play styles brought to life by the two new Joy-Con controllers.',
  'https://i5.walmartimages.ca/images/Enlarge/275/723/6000199275723.jpg'
));

// Games

storeItems.push(new StoreItem(
	6,
	'Switch Xenoblade Chronicles 2',
	79.96,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Games'),
	5.0,
	'Explore an endless ocean of clouds, where the last remnants of civilization live on the backs of colossal beasts called Titans. Experience the story of Rex and his new friend Pyra, a mysterious being known as a Blade who grants him tremendous power. Together, search for Pyra\'s long lost home Elysium, the ultimate paradise for all of humanity.​',
  'https://i5.walmartimages.ca/images/Enlarge/845/275/6000197845275.jpg'
));

storeItems.push(new StoreItem(
	7,
	'The Legend of Zelda: Breath of the Wild',
	79.99,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Games'),
	5.0,
	'Forget everything you know about The Legend of Zelda games. Step into a world of discovery, exploration, and adventure in The Legend of Zelda: Breath of the Wild, a boundary-breaking new game in the acclaimed series. Travel across vast fields, through forests, and to mountain peaks as you discover what has become of the kingdom of Hyrule In this stunning Open-Air Adventure. Now on Nintendo Switch, your journey is freer and more open than ever. Take your system anywhere, and adventure as Link any way you like.',
  'https://i5.walmartimages.ca/images/Enlarge/750/808/6000197750808.jpg'
));

storeItems.push(new StoreItem(
	8,
	'Xbox One NHL 20: Standard Edition',
	59.96,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Games'),
	5.0,
	'In NHL® 20, your favorite NHL stars now look and feel more authentic with new Signature Shots and over 45 new shot types that make every attack a threat. A new broadcast package celebrates your biggest plays as you take on all-new game modes, including the new winner-take-all Eliminator mode where you play solo or team up with friends to take down the competition.',
  'https://i5.walmartimages.ca/images/Enlarge/430/815/6000200430815.jpg'
));

storeItems.push(new StoreItem(
	9,
	'Watch Dogs Legion Gold Edition',
	136.96,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Games'),
	5.0,
	'Receive three-day early access and the season pass with the Gold Steelbook Edition. Build a resistance from virtually anyone you see as you hack, infiltrate, and fight to take back a near-future London that is facing its downfall. Welcome to the Resistance.',
  'https://i5.walmartimages.ca/images/Enlarge/143/855/6000200143855.jpg'
));

storeItems.push(new StoreItem(
	10,
	'Sword Art Online Alicization Lycoris',
	76.96,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Games'),
	5.0,
	"Make your way through the mysterious Underworld in the Sword Art Online: Alicization Lycoris for PlayStation 4. Based on the popular anime storyline, you'll play as protagonist Kirito, engaging in intense battle action and exploration. Encounter your favourite characters, including Eugeo, a young man whose destiny becomes entwined with yours.",
  'https://i5.walmartimages.ca/images/Enlarge/238/930/6000201238930.jpg'
));

// Acessories

storeItems.push(new StoreItem(
	11,
	'DualShock®4 Wireless Controller - Blue Camouflage',
	74.0,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Acessories'),
	5.0,
	"The DualShock ® 4 Wireless Controller for PlayStation®4 defines this generation of play, combining revolutionary features and comfort with intuitive, precision controls. Improved analog sticks and trigger buttons allow for unparalleled accuracy with every move while innovative technologies such as the multi-touch, clickable touch pad, integrated light bar, and internal speaker offer exciting new ways to experience and interact with your games. And with the addition of the Share button, celebrate and upload your greatest gaming moments on PlayStation®4 with the touch of a button.",
  'https://i5.walmartimages.ca/images/Enlarge/430/6_2/999999-711719504306_2.jpg'
));

storeItems.push(new StoreItem(
	12,
	'New PlayStation®4 Gold Wireless Stereo Headset',
	75.0,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Acessories'),
	5.0,
	"The new Gold Wireless headset was designed to deliver enhanced comfort and performance while maintaining the amazing gaming audio experience you’ve come to love. Refined over-ear cushions and sleek design keep you comfortable for long play sessions. High-fidelity 7.1 virtual surround sound breathes new life into the urban jungles and alien worlds you explore. Augmented noise-canceling hidden microphones provide crystal clear communication with friends and teammates. Experience games as the developer intended through the Headset Companion App, with audio modes tuned by developers exclusively for PlayStation®4 systems. Designed to fit seamlessly with PlayStation®VR, experience the stunning worlds of VR in comfort and audio immersion like never before.",
  'https://i5.walmartimages.ca/images/Enlarge/389/289/6000198389289.jpg'
));

storeItems.push(new StoreItem(
	13,
	'PowerA Pokémon Enhanced Wireless Controller for Nintendo Switch - Graffiti',
	69.96,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Acessories'),
	5.0,
	"Play your favorite Nintendo Switch games* like a pro with this officially licensed PowerA Enhanced Wireless Controller featuring Pikachu design. Built for comfort during extended gaming sessions, this Bluetooth wireless controller includes motion controls, mappable Advanced Gaming Buttons, and standard ergonomic layout. Enjoy up to 30 hours of gameplay with new alkaline batteries (other variables affect playtime) or add your own rechargeable batteries.",
  'https://i5.walmartimages.ca/images/Enlarge/801/637/6000200801637.jpg'
));

storeItems.push(new StoreItem(
	14,
	'PDP Energizer Xbox One Controller Charger',
	55.0,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Acessories'),
	5.0,
	"Officially licensed by Energizer and Microsoft for Xbox One, the PDP Energizer Xbox One Controller Charger charges 2 Xbox One wireless controllers simultaneously and twice as fast. Comes complete with an AC adapter and 2 Energizer Rechargeable Battery Packs for up to 35 hours of playtime.",
  'https://i5.walmartimages.ca/images/Enlarge/856/324/6000197856324.jpg'
));

storeItems.push(new StoreItem(
	15,
	'Wired Fight Pad Pro for Nintento Switch - Pichu Edition',
	39.96,
	generateRandomQuantity(),
	4,
	getCategoryId(categories, 'Acessories'),
	5.0,
	"Catch the newest Pokemon themed Wired Fight Pad Pro Controller! Make Pichu your new main controller. Gear up for Super Smash Bros.™ Ultimate for Nintendo Switch with the Wired Fight Pad Pro! Pick your favorite character and challenge your friends (and enemies!) with this GameCube-inspired Pro Controller. Customize your gaming style by playing with the traditional C-Stick or swap it out for a full-size stick with the innovative detachable design. The 10-foot USB cable gives you plenty of room to play and ensures you stay connected during crucial battle moments.",
  'https://i5.walmartimages.ca/images/Enlarge/758/425/6000200758425.jpg'
));

var cartItems = [];