// with inbuild fuction 
    function reversString(str){
        return str.split("").reverse().join("");
    }
    console.log(reversString("Anand patel"))

// without inbuild function

        let string = "Anand Patel";
        let reverse=""

        for(let i=string.length-1;i>=0;i--){
            reverse=reverse+string[i];
        }
        console.log(reverse)