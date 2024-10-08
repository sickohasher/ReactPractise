import React from "react";

import ReactDOM from "react-dom/client";


// // let heading = React.createElement(

// //             "h1",    //child element
// //   {
// //          id: "head",  // id for child element
// //   },
// //           "Hey React"  // msg to be print by child element 
                   
// //                                  ); //creating child element with msg

// // let main = ReactDOM.createRoot(document.getElementById("main")); // creating/selecting parent element where child to be append by id

// // main.render(heading); // appending child to parent element


// let parent = React.createElement("div" , {id:"parent"} ,  [    // parent div

//        React.createElement("div" , {id:"child"} ,             // child div inside parent div 

//            [  React.createElement("h1" , {} , "I am h1.1") ,    //  h1 inside child div

//               React.createElement("h2" , {} , "I am h2.1")  ]   // h2 inside child div and sibling of h1 tag

//        ) , 

//        React.createElement("div" , {id:"child2"} ,             // child2 div inside parent div 

//               [  React.createElement("h2" , {} , "I am h2.2   ") ,    //  h2 inside child2 div
   
//                  React.createElement("h1" , {} , "I am h1.2")  ]   // h1 inside child2 div and sibling of h2 tag
   
//           )
//        ]

// );


// let root = ReactDOM.createRoot(document.getElementById("root"));


// root.render(parent);  



//jsx------

// react element 2

let heading2 = (

       <h4 className="head2"> Heading 2 by JSX  </h4>

);                    // react element created using jsx as same we done by React.createElement 


// react element 1

let heading = (

       <h1 id="parent" className="head">

              {heading2}       {/* react element 2 inside react element 1 */}
       
        Heading by Jsx  
        
       </h1>
        
);         // react element created using jsx as same we done by React.createElement 



let main = ReactDOM.createRoot(document.getElementById("root"));    // creating react dom by selecting element by id = root


// main.render(heading);       // rendring react element inside selected root(ie- div of html filee)






let number = 90000;      // normal  js variable





// react functional component

let Head = ()=>{                    //arrow func with return due to curly brases

       return <h1 className="headh1">I am functional component</h1>    // JSX inside f.c 1st
};


// Or


let Head2 = ()=> (                 // arrow function without curly braces so no need of write return in f.c 2nd

       <div id="container">  

         
         <h2> {number} </h2>   {/* by using {} we can write any js code/operation inside in JSX */}


         <Head/>  {/* or */}    { /* <Head></Head> */ }   {/* or */}    { /* {Head()} */ }               { /* functional component(Head) render inside another functional component --- also known as Component Composition */ }


         {heading}                    {/* putting js variable(i.e having react element ) inside JSX by putting it between {} ----> thus we have put react element(heading) inside functional component 2nd */}


        <h1> I am F.C two </h1>          


        </div>                           /* JSX in functional component 2nd */
);



// main.render(<Head/>);  // render the functional component 1st



main.render(<Head2/>);  // render the functional component 2nd 


 