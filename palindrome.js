let arr = "racecar";

let palindrome = true;
let size = arr.length-1;
    for(let i = 0 ;i<arr.length;i++){
           if(arr[i]!=arr[size-i]){
             palindrome = false;
             break;
	   }

    }
     if(palindrome){
      console.log("is Palindrome");
     }else{
        console.log("not Palindrome")
     }


