var app = angular.module('demo', [])

/*app.directive("showCustomers",function($scope,$http){
    $http.get('http://localhost:8080/customer').
    then(function(response)
    {
        $scope.allCustomers=response.data;
        return {
            template : "<h1>Made by a directive!</h1>"
        };
    })
});*/
app.controller('Hello', function($scope, $http) 
{
    var greeting=[];

    $http.get('http://localhost:8080/customer').
        then(function(response) 
        {
               $scope.greeting = response.data;
        }).catch(function(e){
            console.log(e);
        })
    $scope.fetchAll=function(){
        $http.get('http://localhost:8080/customer').
        then(function(response) 
        {
               $scope.greeting = response.data;
        }).catch(function(e){
            console.log(e);
        })
    }    
    $scope.Delete=function(id){

        $http.delete('http://localhost:8080/customer/delete/'+id).
        then(function(response)
        {
            $scope.delete=response.data;
            $scope.fetchAll();
        }).catch(function(e){
            console.log(e);
        })
    }    

    $scope.add=function(id,name,phone){
        var myObj = { id: id, name: name, phone: phone };
        var myJSON = JSON.stringify(myObj);
        $http.post('http://localhost:8080/customer/insert',myJSON).
        then(function(response) 
        {
               $scope.pos = response.data;
               $scope.fetchAll();
        }).catch(function(e){
            console.log(e);
        })
    }  
    $scope.update=function(x,name,phone){
        var myObj = { id:x, name:name, phone:phone };
        var myJSON = JSON.stringify(myObj);
        $scope.myJSON=myJSON;
    
        $http.put('http://localhost:8080/customer/update/',myJSON).
        then(function(response) 
        {
               $scope.pos = response.data;
               $scope.fetchAll();
        }).catch(function(e){
            console.log(e);
        })
    } 
        
});
