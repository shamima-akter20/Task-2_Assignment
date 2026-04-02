function addBook(){
  // getting input value
  let bookName = document.getElementById("bookName").value
  let authorName = document.getElementById("authorName").value

  // simple validation 
  if(bookName === "" || authorName === ""){
    alert("Please enter both book and author");
    return;
  }

  // ctreating new row 
  let tr = document.createElement("tr");

  // creating cells
  let tdBook = document.createElement("td");
  tdBook.innerText = bookName;
  let tdAuthor = document.createElement("td");
  tdAuthor.innerText = authorName;

   
  // delete action
  let tdAction = document.createElement("td");
  // Font Awesome icon
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; // trash icon
  

  deleteBtn.addEventListener("click",function(){
    tr.remove();
     saveToLocalStorage(); 
  })

  tdAction.appendChild(deleteBtn);


  // appending cells to row
  tr.appendChild(tdBook)
  tr.appendChild(tdAuthor)
  tr.appendChild(tdAction);

  //  appending row to the table
  document.querySelector("#bookTable tbody").appendChild(tr);

  // clear input feilds
  document.getElementById("bookName").value = "";
  document.getElementById("authorName").value = "";


  saveToLocalStorage(); 

}



// Function to save all books to localStorage
function saveToLocalStorage() {
  let rows = document.querySelectorAll("#bookTable tbody tr");
  let books = [];

  rows.forEach(tr => {
    let book = tr.children[0].innerText;
    let author = tr.children[1].innerText;
    books.push({ book, author });
  });

  localStorage.setItem("books", JSON.stringify(books));
}






window.addEventListener("load", function() {
  let books = JSON.parse(localStorage.getItem("books")) || [];

  books.forEach(item => {
    let tr = document.createElement("tr");

    let tdBook = document.createElement("td");
    tdBook.innerText = item.book;

    let tdAuthor = document.createElement("td");
    tdAuthor.innerText = item.author;

  


      // delete action
  let tdAction = document.createElement("td");
  // Font Awesome icon
  let deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fas fa-trash"></i>'; // trash icon



    deleteBtn.addEventListener("click", function() {
      tr.remove();
      saveToLocalStorage();
    });

    tdAction.appendChild(deleteBtn);

    tr.appendChild(tdBook);
    tr.appendChild(tdAuthor);
    tr.appendChild(tdAction);

    document.querySelector("#bookTable tbody").appendChild(tr);
  });
});

