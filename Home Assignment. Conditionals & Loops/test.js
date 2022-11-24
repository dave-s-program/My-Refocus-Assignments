const test ={
     name : "Dave",
     age : 26,
     items : [
        {"nimal": "Lion", "emot": "Happy"},
        {"nimal": "Snake", "emot": "Suko"},
        {"nimal": "Fish", "emot": "Nasuya"},
     ],
     displayitem: function(){
        for(nim of this.items){
            console.log(nim['nimal']);
        }
     }
    //  celebrateBirthday : function (){
        // this.age += 1;
        // console.log("Hi! My name is "+ this.name);
    //  }
};
test.displayitem();
// test.name = "Gray";
// test.items.push = ['Test', 'Test2'];
// test.celebrateBirthday();

// console.log(test.items);

/* 
* Objects in JavaScript are collections of key/value pairs. 
* They are created to represent elements in real world.
* The values can be properties, methods (or functions), and data types.
* 
* Methods or object methods is a property that can be performed on objects.
* Object methods contain a function definition.
*/

const cargo_trip = {    // This is our object. We make it a constant to prevent accidental changes.
   "cargo_name": "Land21 Cargo Truck", // A property of our object that tells us its name.
   "capacity": 14500, // A property of our object that tells us the capacity it can hold.
   "items": [ // An array property that lists all of the cars and their corresponding weights in our cargo.
       {"item_name": "SUV", "item_weight": 3000},
       {"item_name": "Audi DB", "item_weight": 2000},
       {"item_name": "Nissan Nivara", "item_weight": 2400},
       {"item_name": "Ford Mustang", "item_weight": 1700}
   ],

   /**
    * Now, we create an object method, which is a function that can be performed on our object cargo_trip.
    * It checks if our cargo is overloaded as compared to its capacity.
    */
   "isOverloaded": function() { // Here, we create the object method also by using a key/value pair. "isOverloaded" is the key, the following function is its value.
       
       // We need to find out the total weight, so we create a variable where we will put the total weight. You cannot use this variable outside this function.
       let total_weight = 0;
       
       // Now, we check each car and sum the total weight of cars.
       // We use the for loop function to go through each item_weight in our items array.
       for (car_object of this.items){ // We use the 'this' keyword to refer to the items array in our cargo_trip.
           // For each car, we add its weight to the variable total_weight to sum the total weight of all cars.
           total_weight += car_object['item_weight']; // This is a shorthand for total_weight = total_weight + car_object['item_weight'].
       }

    //    console.log("Total weight of the cargo is " + total_weight); // Printing the total weight.

       // Now, we check if our cargo_trip is overloaded. If total_weight is greater than the cargo capacity, then the cargo_trip is overloaded.
       if(total_weight > this.capacity){ // The 'this' keyword is used to refer to the cargo_trip's capacity.
        //    console.log("Cargo Trip is overloaded."); // If the cargo trip is overloaded, we write it on the console.
       }

       else {
        //    console.log("Cargo Trip is not overloaded."); // Else, the cargo_trip is not overloaded. We write it on the console.
       }
   }
}


// We created the object. Right now, its function "isOverloaded" does not perform.
// If we want to check whether or not the cargo trip is overloaded, we need to call the function.
// We can access the object method by using the dot notation. Write the object name, use the dot, and write the function name.
cargo_trip.isOverloaded(); // This function does not have parameters, so we leave the brackets empty.
