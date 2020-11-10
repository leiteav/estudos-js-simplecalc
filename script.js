
insert = (number) => {
    document.getElementById("result").value += number;
}

calc =()=> {
    
    let result = document.getElementById("result").value;
    if(result ==""){
        alert("Error! Check the numbers and try again. ")
    }else{
        try {
            document.getElementById("result").value = eval(result)
            }catch {
                alert("Error! Check the numbers and try again. ")
            }  
        }

} 