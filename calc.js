"use strict";
{
    let calculator={
    template: '<div><input type="number" ng-model="x"/><input type="number" ng-model="y"/><button ng-click="output =! output">Add</button><button ng-click="mult =! mult">Multiply</button></div><p ng-show="output">Sum: {{$ctrl.add(x, y)}}</p><p ng-show="mult">Product: {{$ctrl.multiply(x, y)}}</p>',
    controller: function(){
        const vm=this;
        vm.add= function(x, y){
            let z = 0;
            z = x+y;
            return z;
        }
        vm.multiply= function(x,y){
            let w = 0;
            w = x*y;
            return w;
        }
    }
}
angular
    .module("calcapp")
    .component("calculator", calculator);
}