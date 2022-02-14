angular.module("Mybooks",[])
//.filter for custom filter , filter name and function
//it should have one paramenter thats input and option
// so when we search the number of catch will be sent to option
//applying it to the name filter where the first character should be Uppercase
.filter("myfilter",function()
{
    return function(input,option)
    {
        //Nan = Not a number or option = empty then return the full input 
        if(isNaN(option)||(option==""))
        {
            return input;
        }
        else {
        return input.substring(0,option).toUpperCase();
    }}
    
})
.controller("booksCtrl",function($scope)
{
    var books=[
        {
            bookname:'Everyday Italian', bookcategory:"cooking", 
            author:"Giada De Laurentiis",
            year: 2005,
            isbn: 978-3-16-148410-0,
            price: 999.00
        },
        {
            bookname:'Harry Potter', bookcategory:"children", 
            author:"J K. Rowling",
            year: 2005,
            isbn: 978-3-16-148410-1,
            price: 1000.00
        },
        {
            bookname:'XQuery Kick Start', bookcategory:"Web", 
            author:"James McGovern",
            year: 2003,
            isbn: 978-3-16-128410-0,
            price: 700.00
        },
        {
            bookname:'Learning XML', bookcategory:"paperback", 
            author:"Erik T. Ray",
            year: 2003,
            isbn: 978-3-26-148410-0,
            price: 800.00
        },
        {
            bookname:'Wings of Fire', bookcategory:"Autobiography", 
            author:"A.P.J. Abdul Kalam",
            year: 2000,
            isbn: 228-3-16-148410-0,
            price: 1200.00
        },
    ];
    $scope.books=books;
    $scope.rowlimit=5;
    //to change 5 rows

});
