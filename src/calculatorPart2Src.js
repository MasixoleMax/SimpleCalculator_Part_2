class Calculator {
    constructor(){
        this.array = [];
        this.last = 0;
        this.b = /[0 - 9]/;
    
};
    add(){
        let sum = 0;

        for(var i = 0; i < arguments.length; i++){
            if (arguments[i] === "LAST"){
                arguments[i] = this.last;
            }; 
            if (arguments[i] === "SLOT_2"){
                arguments[i] = this.get_slot(2);
            }; 
            sum += (arguments[i]);
            arguments[i] = this.last;
            this.last = sum

};          
          return sum
};


    multiply() {
        let product = 1;
         for(var i = 0; i < arguments.length; i++){
            if (arguments[i] === "LAST"){
                arguments[i] = this.last;
            }; 
            if (arguments[i] === "SLOT_1"){
                arguments[i] = this.get_slot(1);
            }; 
            product *= (arguments[i]);
            arguments[i] = this.last;
            this.last = product;
}; 
        return product;
};


  Last(){
       return this.last;
};
    
   set_slot(b){

     this.array.push(this.last);
     return this.array[b - 1]
};
   get_slot(b){
       return this.array[b - 1];
}};

        let calculator= new Calculator();

