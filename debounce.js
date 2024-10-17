const debounce=(func,delay)=>{
    let debouncing;
    return function(){
        clearTimeout(debouncing)
        debouncing=setTimeout(()=>func(),delay)
    }
}
const callApi=function(){
    console.log("api calling")
}

   const debounced= debounce(callApi,500)

document.getElementById("search-input").addEventListener('input',function(e){
    debounced();
})