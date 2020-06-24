//Create a function that take an array returns the number of matching numbers in that array

// arr=[10 20 20 10 10 30 50 10 20]
// 3

// Plan:
//1. create pair variable
//1. Loop through array
//  -check two numbers are matching
//      -nested for loop
//          -outside loop handles pair we are checking
//          -inside loop goes through every pair
//  -if match increment pair variable
// end of function return variable
//[10 20 20 10 10 30 50 10 20]
//pair=2
//currentSock=20
//removing the values from the array as we find a match
//change values to 0 and then ignore 0s
 
function matchSocks(arr){
    var pair=0
    for(var i=0; i<arr.length; i++){
        currentSock=arr[i]
        for(var j=i+1; j<arr.length; j++){
            if(currentSock == arr[j] && currentSock !=0){
                pair++
                arr[i]=0
                arr[j]=0
                break
            }
        }
    }
    return pair
}

console.log(matchSocks([10,20,20,10,10,30,50,10,20]))