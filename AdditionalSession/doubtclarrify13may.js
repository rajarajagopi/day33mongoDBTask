/*Given an unsorted array A of size N that contains only positive integers, 
  find a continuous sub-array that adds to a given number S and 
  return the left and right index(1-based indexing) of that subarray.*/


//Example 1:

//Input:
//N = 5, S = 15
//A[] = {1,2,3,7,5};
//Output: 2 4
//Explanation: The sum of elements from 2nd position to 4th position is 12.

//Example 2:
//N = 10, S = 15
//let A[] = {1,2,3,4,5,6,7,8,9,10};
var arr=[1,2,3,4,5,6,7,8,9,10];
var sum=15
for(var i=0;i<arr.length;i++){
    var curr=arr[i];
    if(curr==sum){
        console.log(i);
        break;
    }
    else{
        for(var j=i+1;j<arr.length;j++){
            curr=curr+arr[j];
            if(curr==sum){
                console.log(i,j);
               break;
                
            }
        }
    }
}