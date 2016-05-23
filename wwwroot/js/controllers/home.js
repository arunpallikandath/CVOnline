var HomeController = function($scope) {
    $scope.models = {
        title: 'I work!',
        photo: "",
        description: "Highly motivated Software Engineering Manager with 14+ years of hands on experience in software development and in project management," +
        " proven track record of architecting and delivering reliable and scalable systems in a variety of areas, such as Mobile technologies, " +
        " Internet/E-commerce, Network management/Security, Health care, Mobile money, messaging services, EAI, etc."
    };
}

// The $inject property of every controller 
// (and pretty much every other type of object in Angular) 
// needs to be a string array equal to the controllers arguments, only as strings
HomeController.$inject = ['$scope'];