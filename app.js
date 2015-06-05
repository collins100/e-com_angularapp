(function (){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;

	});

	var gems = {
		name: "Dodecahedron",
		price: 2.95,
		description: ". . .",
		images: {
            full: 'Dodecahedron.jpeg'
            thumb:'Dodecahedron.jpeg'
		
		   }

		canPurchase: true,
	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: ". . .",
		images: {
            full:'Pentagonal.jpg'
            thumb:'Pentagonal.jpg'

		   }

		canPurchase: false,
	}
];

}) () ;



