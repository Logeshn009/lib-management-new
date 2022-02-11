/*when we write angular JS module , whenerver we open any website
the controler resposibily to send to server thats called model 
it will check witht the database and server will respond MVC(Model View Cobtroller)  
 its going to process the information from the database and finally the response will go to the viewer (MVC)*/

 //this is like the main method
 //Mca is to start Ecexute the whole Block 
 //[] is to specify any external module , since we are not using any external module we leave it empty 
 //controler Name:Mcacntrl , Scope of the function any name can be given

 angular.module("Mca",[]) // ----. view
 .controller("Mcactrl",function($scope) // Controller is a mediator between view and model
 
 
 {
     $scope.firstname="Logesh"
     $scope.lastname="Lingesh"
 });