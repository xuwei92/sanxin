/**
 * Created by Administrator on 2017/4/26.
 */
angular.module("app")
    .config(function($stateProvider,$urlRouterProvider){
        $urlRouterProvider.when("","/one");
        $stateProvider
            .state("one",{
                url:"/one",
                templateUrl:"./views/one.html"
            })
            .state("two",{
                url:"/two",
                templateUrl:"./views/two.html"
            })
            .state("three",{
                url:"/three",
                templateUrl:"./views/three.html"
            })
            .state("four",{
                url:"/four",
                templateUrl:"./views/four.html"
            })
    })
    .directive("myFile", function () {
        return {
            templateUrl: 'views/input.html',
            restrict: 'E',
            scope: {},
            controller: function ($scope) {
                $scope.fileid = 'file' + $scope.$id;
            },
            link: function (scope, ele) {
                var inputFile = ele.find("div");
                var input = $(inputFile).find('input');
                input.on("change", function () {
                    var reader = new FileReader();
                    reader.readAsDataURL(this.files[0]);
                    reader.onload = function () {
                        $(inputFile).find("label")[0].style.background='url('+this.result+') no-repeat center center';
                        $(inputFile).find("label")[0].style.backgroundSize="100% 100%";
                    }
                })
            }
        }
    })
