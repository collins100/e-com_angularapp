(function (){
	var app = angular.module('store', [ ]);

	app.controller('StoreController', function() {
		this.products = gems;

	});

	app.controller("PanelController", function(){
		 this.tab = 1;

		 this.selectTab = function(setTab){
		 	this.tab = setTab;
		 };

		 this.isSelected = function(checkTab){
		 	return this.tab === checkTab;
		 };

	});

	app.directive('productTitle', function(){
		return{
			restrict: 'E',  //E for element//
			templateUrl: 'product-title.html'
		};
	});

	app.controller("ReviewController", function(){
		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};
	});

	app.controller('GalleryController', function(){
      this.current = 0;

      this.setCurrent = function(newGallery){
      this.current = newGallery || 0;
      };

    });

	var gems = [

	{
		name: "Dodecahedron",
		price: 2.95,
		description: ". . .",
		images: [
			full: 'Dodecahedron.jpeg'
			thumb:'Dodecahedron.jpeg'
		]

		canPurchase = true,

	},
	{
		name: "Pentagonal Gem",
		price: 5.95,
		description: ". . .",
		images: [
            full:"Pentagonal.jpg"
            thumb:"Pentagonal.jpg"

		   ]

		   canPurchase = false,

	}

	];

	

}) () ;


