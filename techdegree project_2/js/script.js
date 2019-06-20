/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
This project required use of "pagination" to enhance the usability of a web page.
Global variables were added to store, reference, and manipulate the DOM elements.
Manipulating the DOM included hiding and showing HTML on a page. A set of 
buttons was added to the page dynamically.  

Goal: Obtain a "Meets Expectation" grade by completing two tasks:
      1. add buttons to the bottom of the web page
      2. And show different sets of student information when each button is clicked.
***/

//The global variables store the student list and the number of items to display on each page.

const studentMasterList = document.querySelectorAll('li');
const itemsPerPage = 10; 
 
/***
The `showPage` function hides all of the items in the list, except for ten items (itemsPerPage).
Two variables were created to store the beginning and ending index for displaying the page. 
The corresponding loop iterates through the list to show ONLY 10 pages at a time or per page in block style.
***/

const showPage = (list, page) => {
   let startIndex = (page*itemsPerPage) - itemsPerPage;
   let endIndex = (page*itemsPerPage);  

  for (let i = 0; i < studentMasterList.length; i ++)  {
     if (i >= startIndex && i < endIndex) {
       list[i].style.display = 'block';
     } else {
      list[i].style.display = 'none';
  }
 }
}

/*** 
The `appendPageLinks function` creates the pagination buttons, adds them to the DOM, 
and adds their functionality. This function creates new DOM elements by creating a pagination class,
and appends the pagination links to the new class. The for-loop loops over the pagination links to remove active class, 
and adds the active class (or page) to the link that was just clicked per the event targeted in the 'addEventListener' function.
***/

const appendPageLinks = (list) => { 
   let totalPages = Math.ceil(list.length/itemsPerPage);
   
   const div = document.createElement('div');
   div.className = 'pagination';
   document.querySelector(".page").appendChild(div);

   const ul = document.createElement('ul');
   div.appendChild(ul);

   for(let i = 1; i <= totalPages; i ++) {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.textContent = i;
      a.href = '#';
      if ( i == 1) {
       a.className = "active";  
      }

      ul.appendChild(li);
      li.appendChild(a);
   }

   ul.addEventListener('click', (event) => {
      const link_clicked = event.target;
      let number = event.target.textContent;
      showPage(studentMasterList, number);

      let all_links = document.querySelectorAll('a');
      for (let i = 0; i < all_links.length; i++) {
         all_links[i].className = 'none';
      }
      link_clicked.className = "active";

 });
}

showPage(studentMasterList, 1);
appendPageLinks(studentMasterList);



