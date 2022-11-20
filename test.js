function MathChallenge(str) { 

  
    let map = {};
    let start =0;
    let maxlenght= 0;
    let array= str.split('');
    for(i=0; i< str.length; i++){
      let current = map[array[i]];
      if(current !=null && start <= current){
        start = current + 1;
        return -1;
      }else{
        maxlenght = Math.max(maxlenght, i -start + 1);
  
      }
      map[array[i]]=i;
    }
    return maxlenght;
   
  
  }
     
  // keep this function call here 
  console.log(MathChallenge(readline()));
  
  function ArrayChallenge(arr) { 

    let maxInteger = Math.pow(2,53);
    let Max = -maxInteger - 1;
    let end= 0;
    let length = arr.length;
    for(let i=0 ; i< length; i++){
      Max = Max + arr[i];
      if(Max < end){
        Max = end;
      }
      if(end <0){
        end = 0;
      }
    }
  // code goes here  
  return Max; 

}
   
// keep this function call here 
console.log(ArrayChallenge(readline()));

/* write your SQL query below */

// SELECT m.GroupID, c.CompanyName, Count(*) as count FROM maintable_7PI8J m 
// Inner Join cb_vendorinformation c ON m.GroupID = c.GroupID
// Group BY m.GroupID,c.CompanyName ORDER BY count,m.GroupID, c.CompanyName desc;
/*int diagonalDifference(vector<vector<int>> arr) {
    int i,j,k;
    int sum1= 0;
    int sum2= 0;
for(i=0 ; i< arr.size();i++){
    for(j= 0  ; j<arr.size(); j++){
        
        if(i==j){
           // cout<<arr[i][j];
            sum1 += arr[i][j];
        }
        if(i+j == arr.size()-1){
            sum2 += arr[i][j];
        }
    }
}
return sum2-sum1;
}*/
