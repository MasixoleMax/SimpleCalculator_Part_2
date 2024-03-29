describe("A simple calculator that can add muyltiple numbers", function(){
  it ("should add two or more", function() {
    
     

      expect(calculator.add(1, 3, 2)).toBe(6);
  });
});

 describe("Checking simple calculator that multiply multiple numbers", function() {

  it ("should be able to multiply two or more numbers", function() {
     
     

      expect(calculator.multiply(3,2,4)).toEqual(24);
  });
});

 describe("simple calculator that can return the last result", function() {

  it ("should be able to remember and return the last result", function() {
     
    
     
      calculator.multiply(1,2);
     

      expect(calculator.Last()).toBe(2);
  });
 });

 describe("simple calculator that can use the last result as a parameter", function() {

  it ("should be able to use the last result as a parameter", function() {
     
    calculator.add(1,2)

  
     expect(calculator.multiply("LAST", 3)).toEqual(9); // the value of "LAST" is now 9 
     expect(calculator.add("LAST", 5)).toEqual(14)
    });
  });

  describe("simple calculator that can use the slot function result as a parameter", function() {

    it ("should be able to use the last result as a parameter", function() {
       
       calculator.add(1,2);

       calculator.set_slot(1);
        calculator.multiply(1,3);
         calculator.set_slot(2);
     
      
    
       
        expect(calculator.multiply("SLOT_1", 1)).toEqual(3); // the value of "LAST" is now 9 
        expect(calculator.add("SLOT_2", 7)).toEqual(10);
      });
    });
  
  



