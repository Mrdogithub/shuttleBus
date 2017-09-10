angular.module('sortableDirectiveModule', ['ui.sortable']).directive('sortableDirective', function () {
    return {
        restrict:'EA',
        template: '<div  class="siteList-wrapper">'
                  +'<div class="add-site-title">江宁一号线</div>'
                  +         '<ul ui-sortable="sortableOptions" ng-model="list" class="list">'
                  +             '<li ng-repeat="item in list" class="item" data-item = {{item}}>'
                  +                 '<div class="listItem">'
                  +                   '{{item.name}}<div style="display:none" class="siteList-operate"><a>删除</a></div>' 
                  +                   '<span style="display:none">{{item.address}}</span>'
                  +                 '</div>'
                  +                 '<div class="updateSiteItem-wrapper"></div>'
                  +             '</li>'
                  +         '</ul>'
                  +     '<div class="add-site-wrapper" style="display:none">add</div>'
                  +     '<div class="add-site-btn-wrapper" id="addSiteBtn"><a>添加新的站点</a></div>'
                  +'</div>',
        controller:function($scope){

          $(document).on('click','#addSiteBtn',function(){
              $('.add-site-wrapper').css('display','block')
          });

          $(document).on('mouseover','.item',function(){
              console.log($(this).data('item'))
              $(this).css('height','60px');
              $(this).children('.listItem').children('span').css('display','block');
              $(this).children('.listItem').children('.siteList-operate').css('display','block');
          })

          $(document).on('mouseout','.item',function(){
              console.log($(this).data('item'))
              $(this).css('height','auto');
              $(this).children('.listItem').children('span').css('display','none');
              $(this).children('.listItem').children('.siteList-operate').css('display','none');

          })

          $(document).on('click','.updateSiteItem',function(){
              var _selfParent = $(this).parent().parent();
              var _currentLi = $(_selfParent).parent();
              $(_selfParent).css('display','none');
              $(_currentLi).css('backgroundColor','#338ca5')
          });

            var tmpList = [
              {'name':'线路1','address':'线路1地址'},
              {'name':'线路2','address':'线路2地址'},
              {'name':'线路3','address':'线路3地址'},
              {'name':'线路4','address':'线路4地址'},
              {'name':'线路5','address':'线路5地址'},
              {'name':'线路6','address':'线路6地址'},
              {'name':'线路7','address':'线路7地址'},
              {'name':'线路8','address':'线路8地址'},
              {'name':'线路9','address':'线路9地址'},
              {'name':'线路10','address':'线路10地址'},
            ];
      
            // for (var i = 1; i <= 6; i++){
            //     tmpList.push({
            //       text: 'Item ' + i,
            //       value: i
            //     });
            // }

            $scope.list = tmpList;
              
              
            $scope.sortingLog = [];
              
            $scope.sortableOptions = {
                activate: function() {
                    console.log("activate");
                },
                beforeStop: function() {
                    console.log("beforeStop");
                },
                change: function() {
                    console.log("change");
                },
                create: function() {
                    console.log("create");
                },
                deactivate: function() {
                    console.log("deactivate");
                },
                out: function() {
                    console.log("out");
                },
                over: function() {
                    console.log("over");
                },
                receive: function() {
                    console.log("receive");
                },
                remove: function() {
                    console.log("remove");
                },
                sort: function() {
                    console.log("sort");
                },
                start: function() {
                    console.log("start");
                },
                update: function(e, ui) {
                  console.log("update");
                  
                  var logEntry = tmpList.map(function(i){
                    return i.value;
                  }).join(', ');
                  $scope.sortingLog.push('Update: ' + logEntry);
                },
                stop: function(e, ui) {
                  console.log("stop");
                  
                  // this callback has the changed model
                  var logEntry = tmpList.map(function(i){
                    return i.value;
                  }).join(', ');
                  $scope.sortingLog.push('Stop: ' + logEntry);
                }
            };
        }
    }
});


