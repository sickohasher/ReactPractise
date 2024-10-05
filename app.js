// let heading = React.createElement(

//             "h1",    //child element
//   {
//          id: "head",  // id for child element
//   },
//           "Hey React"  // msg to be print by child element 
                   
//                                  ); //creating child element with msg

// let main = ReactDOM.createRoot(document.getElementById("main")); // creating/selecting parent element where child to be append by id

// main.render(heading); // appending child to parent element


let parent = React.createElement("div" , {id:"parent"} ,  [    // parent div

       React.createElement("div" , {id:"child"} ,             // child div inside parent div 

           [  React.createElement("h1" , {} , "I am h1") ,    //  h1 inside child div

              React.createElement("h2" , {} , "I am h2")  ]   // h2 inside child div and sibling of h1 tag

       ) , 

       React.createElement("div" , {id:"child2"} ,             // child2 div inside parent div 

              [  React.createElement("h2" , {} , "I am h2") ,    //  h2 inside child2 div
   
                 React.createElement("h1" , {} , "I am h1")  ]   // h1 inside child2 div and sibling of h2 tag
   
          )
       ]

);


let root = ReactDOM.createRoot(document.getElementById("root"));


root.render(parent);  
