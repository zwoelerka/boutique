var boutiqueApp = angular.module('boutiqueApp', []);

boutiqueApp.controller('boutiqueController', function boutiqueController ($scope) {

	$scope.categories = [
		{
			name: 'wardrobe',
			subcategories: [
				{
					name: 'dresses'
				},
				{
					name: 'tops'
				},
				{
					name: 'pants'
				},
				{
					name: 'skirts'
				}
			]
		},
		{
			name: 'shoes',
			subcategories: [
				{
					name: 'boots'
				},
				{
					name: 'sandals'
				}
			]
		},
		{
			name: 'accessories'
			subcategories: [
				{
					name: 'wallets'
				},
				{
					name: 'purses'
				}
			]
		}
	]
});