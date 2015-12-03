<<<<<<< HEAD
var mayapp = angular.module("MyApp",[],function(){ console.log('AngualrJs Started'); });
var questionModel = { 
  newTitle :'新建试题',
  prviewTitle : '预览试题',
  name:'',
  fraction:'',
  type:'1', 
  options : []
};
//自定义指令
mayapp.directive("fractionNum",function(){ 
  return{
    link:function(scope,elements,attrs,controller){

        elements[0].onkeyup =function(){ 
         if(isNaN(this.value) || this.value<1 || this.value>10){
                            this.style.borderColor = 'red';
                        }
                        else{
                            this.style.borderColor = '';
                        }
        } 

    }
  }
})

//自定义服务
mayapp.factory('tpls',function(){
    return ['tpl1','tpl2','tpl3','tpl4'];
});

//自定义过滤器
mayapp.filter('typeFilter',function(){
     return  function(input){
        return input == '1' ? '单选题' : '多选题';
    }
  
});

mayapp.controller('textC',function($scope,tpls){
  $scope.question = questionModel;
  $scope.arr = tpls;
  $scope.addOption = function(){
      var o = { content:'' };
      $scope.question.options.push(o);
  };
  $scope.delOption = function(index){
      $scope.question.options.splice(index,1);
  };
});
=======


var phoneController = angular.module('phoneController',  []); 



phoneController.controller("phone-list-controller",['$scope','People',function($scope,People){


 
	  	 $scope.phones = People.query();  

		// alert(JSON.stringify(data));







	  // $http({  

	  // 	url:'...',

	  // 	method:'...',

	  // 	data:'...',

	  // 	params:'...',

	  // 	cache:'...'?

	  //  })

	  // 	.success(function(data, status, headers, config){....})

	  // 	.error(function() {.....});

		$scope.order = 'name';


}]);

phoneController.controller("phone-detail-controller",["$scope",'$routeParams',"People","$location",function($scope,$routeParams,People,$location){

 if($routeParams.phoneId){



	$scope.people = People.get({phoneId: $routeParams.phoneId}, function(data) {
  		 $scope.main_image = data.images[0];
 	 });



	}else{

		$location.path("/phones"); 

	}
	$scope.setImage=function(url){ 
		
		$scope.main_image = url;
	}  

	/*$location使用*/
	console.log($location.absUrl()); //"http://example.com/#/some/path?foo=bar&baz=xoxo" => 完整url
	console.log($location.url()); // "/some/path?foo=bar&baz=xoxo" => url的search部分
	console.log($location.protocol()); // "http" =>协议
	console.log($location.host()); // "example.com" => 主机
	console.log($location.port()); // "80" =>端口号
	//console.log($location.path([path])); //  "/some/path" => 跳转至指定路由
 	console.log($location.search()); //{foo: 'bar', baz: 'xoxo'} => 以对象形式展现，还可以$location.search("foo","yahoo");进行修改
 	console.log($location.hash());  // given url http://example.com/#/some/path?foo=bar&baz=xoxo#hashValue    $location.hash() == "hashValue"
 	//console.log($loaction.state([state])); //返回$location的历史对象
 	//$location.replace() 、 event=> $locationChangeStart、$locationChangeSuccess
 	/*$route的两个属性*/
 	// console.log($route.routes;
 	//current：
 	/*
		controller: The controller constructor as define in route definition.
		locals: A map of locals which is used by $controller service for controller instantiation. The locals contain the resolved values of the resolve map. Additionally the locals also contain:

		$scope - The current route scope.
		$template - The current route template HTML.
 	*/
}]); 
>>>>>>> dd42520fa6cbdbf213f3b6e79dc480a6acdeec67
