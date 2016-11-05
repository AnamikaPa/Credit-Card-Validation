// Created a Module
var myApp = angular.module("myModule",[]);

//Registered Controller with module
myApp.controller("myController",function($scope){
	$scope.name="";
	$scope.number= "";

	//Created a function name that check the Credit card detail
	$scope.fun = function(number){

		//------------LUHN ALGORITHM -----------
		$scope.luhn = function(number){
		//splitting on NULL char  
		var array = number.split("");
		
		//Strored the last charcter
		var last = array[number.length-1];
        
        //Reverse the array
        array = array.reverse();

		var sum_odd=0;

		//Sum  of ODD position
		for(var i=1;i<array.length;i+=2){
			array[i]=parseInt(array[i])*2;
			if(array[i]>9) array[i]-=9;
			sum_odd += array[i];
		}

		//Sum of EVEN position
		var sum_even=0;
		for(var i=2;i<array.length;i+=2){
			sum_even+=parseInt(array[i]);
		}

		// Final condition checking
		if((sum_odd +sum_even+parseInt(last))%10 != 0){
			return true;
		}
		else{
			return false;
		}
	};

		$scope.right="f";

		// Assigning the value of $scope.name and $scope.right according to different condition satisfying type of Credit card
		(number.length>=13 && $scope.luhn(number))? ($scope.name="Invalid",$scope.right="w") :
		(number.length==15 && number[0]==3 &&(number[1]==4 || number[1]==7))? ($scope.name="American Express",$scope.right="t"):
		(number.length>15 && number.length<20  && number[0]==5 && (number[1]>=1 && number[1]<=5))? ($scope.name="Mastercard",$scope.right="t"):
		(number.length>12 && number.length<17 && number[0]==4)? ($scope.name="Visa",$scope.right="t"):
		(number[0]==4 && number.length<=12) ?($scope.name="Visa",$scope.right="f"): 
		(number[0]==5 && ((number[1]>=1 && number[1]<=5) || !number[1]) && number.length<16)?($scope.name="Mastercard",$scope.right="f"):
		(number[0]==3 &&(number[1]==4 || number[1]==7 || !number[1]) && number.length<15)?($scope.name="American Express",$scope.right="f"):
		($scope.name="?",$scope.right="f");
	};

	$scope.tdate = new Date();

	// Created a Function which manipulate the min value of month model
	$scope.min_date=1;
	$scope.date = function(tdate,month,year){
		(year==tdate.getFullYear() && (!month || month<=tdate.getMonth()))?$scope.min_date=tdate.getMonth():
		$scope.min_date=1;
	};

});
