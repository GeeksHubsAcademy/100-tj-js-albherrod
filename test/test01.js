function geekshubs(index) {
    var iterador;
    iterador = index
    for(i=1; i<=iterador; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("GeeksHubs");
        }else{
            if(i%5 == 0){
                console.log("Hubs");
            }else{
                if(i%3 == 0){
                    console.log("Geeks");
                }else{
                console.log(i)
            }
        }

        }
    }

}

module.exports = geekshubs;
