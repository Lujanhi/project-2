//Treehouse Techdegree:
//FSJS project 2 - List Filter and Pagination

//by Hipolito A Lujan




const studentList = document.querySelectorAll('.student-item');
let itemsPerPage = 10;

console.log = (studentList)
 
//   Create the `showPage` function to hide all of the items in the 
const showPage = (list, page) => {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

      for(let i = 0; i <list.length; i++) {
         
         if (i >= startIndex && i < endIndex) {
               list[i].style.display ="block";
        
            }  else {
                  list[i].style.display ="none";
      }
      }
      } 
        
  //Create the `appendPageLinks function` to generate, append, and add 
  // functionality to the pagination buttons.
const appendPageLinks = (list) => {
    let maxPages = Math.ceil(list.length/itemsPerPage);

    const div = document.createElement("div");
      div.className = 'pagination';
      document.querySelector('.page').appendChild(div);

    const ul = document.createElement('ul');
      div.appendChild(ul);

    for (let i = 1; i <= maxPages; i++) {
      let li = document.createElement ('li');
      let a = document.createElement ('a');
      a.href = '#';
      a.textContent = i;

      if (i == 1) {
        a.className = 'active';
      }
      ul.appendChild (li);
      li.appendChild (a);
    }

    ul.addEventListener ('click', (event) => {
        const links = event.target;
        let number = event.target.textContent;
        
        showPage (studentList, number);
      
        let allLinks = document.querySelectorAll ('a');
          for (let x = 0; x < allLinks.length; x++) {
              allLinks[x].className ='none';
          }
          links.className = 'active';
    });
}

showPage(studentList, 1);
appendPageLinks(studentList);

