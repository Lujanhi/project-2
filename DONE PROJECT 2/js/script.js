//Treehouse Techdegree:
//FSJS project 2 - List Filter and Pagination

//by Hipolito A Lujan


const listItem = document.querySelectorAll('.student-item');        // calling the name of the class".student-item" from the HTML, so it can give you a list of names 
let eachPage = 10;                                                  // numbers of pages per page

console.log = (listItem)                                            // input to console on website
 
                                                                    // Create the `showPage` function to hide all of the items in the 
const showPage = (list, page) => {                                  // calling the 2 global variables into the parameters
   let startIndex = (page * eachPage) - eachPage;                   // local variable, thats * the global variable two variable - the items per page.
   let endIndex = page * eachPage;                                  // local varable that * the global variables

      for(let i = 0; i <list.length; i++) {                   
         
         if (i >= startIndex && i < endIndex) {                     
               list[i].style.display ="block";
        
            } else {
                  list[i].style.display ="none";
      }}} 
        
  
const appendPageLinks = (list) => {                                   // Create the `appendPageLinks function` to generate, append, and add functionality to the pagination buttons.
    let allPages = Math.ceil(list.length/eachPage);                   // math.ceil ,rounds up and it divides the list.lenght times and the item perpage.

    const div = document.createElement("div");                        // looks for the "DIV" tags
          div.className = 'pagination';                               // div.classname is equal to pagination 
          document.querySelector('.page').appendChild(div);           // selecting the page class and attaching it to the div

    const ul = document.createElement('ul');                          // creating an element "ul" and storing it in a const
           div.appendChild(ul);                                       // and im attaching the "ul"to the Div.

    for (let i = 1; i <= allPages; i++) {                             // I created an local variable that equals 1 , this is going to look over  my 6 pages  , (I++) will add 1 to the local variable.until all pages go through.
      let li = document.createElement ('li');                         // im creating a LI element, and im storing in a in the variable.
      let a = document.createElement ('a');                           // im creating a "A" element, and im storing in a in the variable.
           a.href = '#';                                              // the ancher is holding a link the carries the number of website. 1,2,3,4...
           a.textContent = i;                                         // text content in this case means that is pulling the "text" in this case is a link

      if (i == 1) {                                                   // if i equals 1 then a classname is going to be active.
           a.className = 'active';                                    //
      }
      ul.appendChild (li);                                            //  attaches IL tag and the UL tag
      li.appendChild (a);                                             // attaches the A and the LI tags
    }

    ul.addEventListener ('click', (event) => {                        // event listerner will look for the click action
      const link = event.target;                                     
      let number = event.target.textContent;                          
        
      showPage (listItem, number);                                     // calls the fuction
      
      let allLinks = document.querySelectorAll ('a');                  // selcting the a ancher and storing it to alllinks 
          for (let x = 0; x < allLinks.length; x++) {                  // this mean that if link one is active the other are unactive, when is on page 2 page 1 and the other become unactive.
              allLinks[x].className ='none';
          }
             link.className = 'active';
    });
}
      showPage(listItem, 1);                                           // calls the fuction
      appendPageLinks(listItem);                                       // calls the fuction

