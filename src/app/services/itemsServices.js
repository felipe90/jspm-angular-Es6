		
class ItemsService {

	constructor($http,config) {
		this.$http = $http;
		this.config = config;
	}

	getItems () {
		var apiUrl = this.config.apiUrl;

		var promise = this.$http.get(apiUrl+'posts')
			.success(function (data) {
			 	return data; 
			})
			.error(function (data) {
				console.log(data);	
			});
	
		return promise;
	}
}

ItemsService.$inject = [ '$http' , 'config'];

export default ItemsService;