const mainBtn = document.getElementById("mainBtn");
const result = document.getElementById("result");

mainBtn.addEventListener('click', function(){
    const ajax = new XMLHttpRequest();
    const url = "https://api.chucknorris.io/jokes/random";
    ajax.open('Get', url, true);

    ajax.onload = function(){
        if(this.status === 200) {
            const data = JSON.parse(this.responseText);
            const {value: joke} = data;
            
            result.textContent = joke;
        }
    };
    
    
    
    ajax.oneerror = function() {
        console.log("there was an error")
    };

    ajax.send();


});