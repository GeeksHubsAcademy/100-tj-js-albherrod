function geekshubs(index) {
    var iterador;
    var print = "";
    iterador = index
    for(i=1; i<=iterador; i++){
        if(i%3 == 0 && i%5 == 0){
            console.log("GeeksHubs");
            print = print + "GeeksHubs \n";
        }else{
            if(i%5 == 0){
                console.log("Hubs");
                print = print + "Hubs \n";
            }else{
                if(i%3 == 0){
                    console.log("Geeks");
                    print = print + "Geeks\n";
                }else{
                console.log(i)
                print = print + i + "\n";
            }
        }

        }
    }
    return print;
}

module.exports = geekshubs;
