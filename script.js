var app = angular.module("myApp",[]);

myController = app.controller("myController", ['$scope', function($scope){

    var duplicateDivs;
    var excess;
    var highestID = 0;
    var maximumShapes = 500;
    var defaultCss;

    var makeRandom = function(range, minimum) {
      return (minimum || 0) + Math.round(range * Math.random());
    };

    // Default properties
    var randomizeProps = function() {
        defaultCss = {
            background:     "rgb(" +makeRandom(255)+ "," +makeRandom(255)+ "," +makeRandom(255)+ ")",
            opacity:        Math.random() * 0.7 + 0.1, // makeRandom function would round this to integer
            width:          makeRandom( $('body').width()/6 ), // Max value is 1/6 of <body> width
            height:         makeRandom( $('body').width()/6 ),
            borderRadius:   makeRandom(100)+ "%",
            transform:      "rotate(" +makeRandom(180)+ "deg)",
            position:       "absolute",
            left:           makeRandom(95)+ "%",
            top:            makeRandom(95)+ "%",
            zIndex:         -1
        }
    }

    // ng-model
    var $scope.userCss = {
        background:     defaultCss.background,     
        opacity:        defaultCss.opacity,        
        width:          defaultCss.width,          
        height:         defaultCss.height,         
        borderRadius:   defaultCss.borderRadius,
        // Hard coded:
        transform:      "rotate(" +makeRandom(180)+ "deg)",
        position:       "absolute",
        left:           makeRandom(95)+ "%",
        top:            makeRandom(95)+ "%",
        zIndex:         -1
    }

    // Array of shapes
    $scope.shapes = [1,2,3];

    var createProps = function() {
        highestID ++;
        // Represents one array element in $scope.shapes
        return {
            id: highestID,
            css: $scope.userCss
        } // end array element
    };    

}]); // Controller