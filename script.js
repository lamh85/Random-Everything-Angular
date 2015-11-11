var app = angular.module("myApp",[]);

myController = app.controller("myController", ['$scope', function($scope){

    // Initialize variables
    // --------------------

    var duplicateDivs;
    var excess;
    var highestID = 0;
    var maximumShapes = 500;
    var defaultCss;

    // Randomizer functions
    // --------------------

    var makeRandom = function(range, minimum) {
      return (minimum || 0) + Math.round(range * Math.random());
    };
    $scope.randomBackground = function(){
        return "rgb(" +makeRandom(255)+ "," +makeRandom(255)+ "," +makeRandom(255)+ ")";
    }
    $scope.randomOpacity = function(){
        return Math.random() * 0.7 + 0.1; // makeRandom function would round this to integer
    }
    $scope.randomLength = function(){
        return makeRandom(500) + "px";
    }
    $scope.randomBorderRadius = function(){
        return makeRandom(100)+ "%";
    }

    // Data storage
    // ------------

    // Array of shapes
    $scope.shapes = [];

    var randomizeProps = function() {
        defaultCss = {
            background:     $scope.randomBackground(),
            opacity:        $scope.randomOpacity(),
            width:          $scope.randomLength(),
            height:         $scope.randomLength(),
            borderRadius:   $scope.randomBorderRadius(),
            transform:      "rotate(" +makeRandom(180)+ "deg)",
            position:       "absolute",
            left:           makeRandom(95)+ "%",
            top:            makeRandom(95)+ "%",
            zIndex:         -1
        }
    }
    randomizeProps();

    // ng-model
    $scope.userCss = {
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

    var shapeObject = function(cssPropsObject) {
        highestID ++;
        // Represents one array element in $scope.shapes
        return {
            id: highestID,
            css: cssPropsObject
        } // end array element
    };    

    // ng-click
    // --------

    $scope.randomizeAll = function() {
        randomizeProps();
        $scope.userCss = defaultCss;
    }

    $scope.addShape = function() {
        currentShape = shapeObject($scope.userCss);
        console.log('the currentShape is: ');
        console.log(currentShape);
        $scope.shapes.push(currentShape);
    }

}]); // Controller