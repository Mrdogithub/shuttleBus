/**
 * @description
 */
angular.module('searchByTextModule',[]).directive('searchByText',function($state){
	return {
		restrict:"EA",
		template:'<div class="search-wrapper ">'
					+'<input type="text" name="" placeholder="站点名称" ng-model="searchText">'
					+'<div class="searchImage" ng-click="searchFn()">'
					+'<img style="vertical-align: baseline;"  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAAAXNSR0IArs4c6QAAAV5JREFUKBWNUT1Lw1AUbZ4kSzsLikMNios6mIQYI/gDuhqqkyIoDi7+AN110sFVECfBqbh1MHQJIQmCuggSWhAXF6FL2kDjuTW3FKnohZdz77nv3I8XqZCbbduTnU7nKMsyC1RZkqRnYL1UKp24rpvwPUJBH03TKkmSBBC0ZFneVBRlAqJDxFPtdvvBNM1Zujcw6gDROxKLA3LI0XV9B8d3HGeMaYGRjhGc+77/yOQwhmF4iY4fcRxXmRcgljFSjYlRKISoYVzatW+0UzlN01Yej4Rer9dE8WlOkugJVeaZ+AUXcOeFc+gs6gj2mPiJeAAFgm10uuOcKBaLpyBWDMPYZZKRBHiAC8RvURTdMy+RY1nWTLfbvUbFTxSgpZugaeQtHNp3CVw1CIIG/O+f63neq6qqq4ivcOZw9iEeBx7gySvAdcQ3mGYNfqHfiZy/DD/Yxp1bdNz4t4iK5sKzLwtCfTE0zEQeAAAAAElFTkSuQmCC"/>'
					+'</div>'
					+'</div>',
		scope:{
			gopath:'@',
			params:'='
		},
		link:function(scope,elements,attrs){

			scope.searchFn = function(){

			}
		}
	}
})