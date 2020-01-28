const mainPage = document.querySelector('.main-page');
const addBtn = document.querySelector('.add-new-term');
const addPage = document.querySelector('.add-page');
const sets = document.querySelector('.sets');
const add = document.querySelector('.add');
const addInputs = document.querySelector('.add-inputs');
const termInput = document.querySelector('.add-term-input');
const defInput = document.querySelector('.add-def-input');
const saveChangesBtn = document.querySelector('.save-changes');
const modifyPage = document.querySelector('.modify-page');
const modifyTermInput = document.querySelector('.modify-term-input');
const modifyDefInput = document.querySelector('.modify-def-input');
const cancelBtn = document.querySelectorAll('.cancelBtn');
const saveAfterModify = document.querySelector('.save-after-modify');
const termList = document.querySelector('.term-list');

let termElements = [];
let finishedElements = [];
let elementsIndex = null;

const listTermItems = () => {
    termList.innerHTML = '';
    termElements = termElements.filter(item => !item.completed);
    finishedElements = finishedElements.filter(item => item.completed);
    termElements = termElements.concat(finishedElements);
    // build item in a list
    for (let item = 0; item < termElements.length; item++) {
      const termElem = document.createElement('li');
      const checkItem = document.createElement('input');
      checkItem.setAttribute('type', 'checkbox');      
      checkItem.addEventListener('click', () => {
          if (!termElements[item].completed) {
          termElements[item].completed = true;
          finishedElements.push(termElements[item]);
          listTermItems();
        } else {
          termElements[item].completed = false;
          listTermItems();
        }
      });
      // check for completed state
      termElements[item].completed ? checkItem.setAttribute('checked', 'checked') : null;
      let listTerm = document.createElement('span');
      listTerm.classList = 'termSpan';
      let listDef = document.createElement('span');
      listDef.classList = 'defSpan';
      listTerm.innerHTML = termElements[item].term 
      listDef.innerHTML = termElements[item].def;
      // create edit button
      const editBtn = document.createElement('span');
      editBtn.classList = 'editSpan';
      editBtn.innerHTML = 'Edit'; 
      editBtn.onclick = function() {
        if (!termElements[item].completed) {
          modifyTermInput.value = termElements[item].term;
          modifyDefInput.value = termElements[item].def;
          showModifyPage();
          elementsIndex = item;
        } else {
          alert('You can\'t edit already done item !');
        }
      };
      // create delete button
      const deleteBtn = document.createElement('span');
      deleteBtn.classList = 'deleteSpan';
      deleteBtn.innerHTML = 'Delete';
      deleteBtn.onclick = function() {
        removeItem(item);
        finishedElements = termElements.filter(item => item.completed);
        listTermItems();
      };
      // generate list from items
      termElem.appendChild(listTerm);
      termElem.appendChild(listDef);
      termElem.appendChild(checkItem);
      termList.appendChild(termElem);
      termElem.appendChild(editBtn);
      termElem.appendChild(deleteBtn);
      termElements[item].completed ? termElem.style.backgroundColor = 'lightskyblue' : null;
    }
    saveItems();
};  

window.addEventListener('load', () => {
    getItems();
    listTermItems();
    window.location.hash = '';
});

add.addEventListener('click', () => {
    addTermItem(termInput.value, defInput.value);
    addInputs.style.display = 'block';
});

addBtn.addEventListener('click', () => {
    location.hash = 'add-page';
    showAddPage();
});

saveChangesBtn.addEventListener('click', () => { 
    addTermItem(termInput.value, defInput.value);
    showMainPage();
});
//click on cancel button
for (let a of cancelBtn) {
        a.addEventListener('click', () => {
        location.hash = 'main-page';
        showMainPage();
    });
}
// save new value after edit
saveAfterModify.addEventListener('click', () => {
    let filteredItems = termElements.filter(item => item.term !== modifyTermInput.value);
    if (modifyTermInput.value !== '' &&
        (filteredItems.length === termElements.length || termElements[elementsIndex].term === modifyTermInput.value)) {
        termElements[elementsIndex].term = modifyTermInput.value;
        termElements[elementsIndex].def = modifyDefInput.value;
        listTermItems();
        elementsIndex = null;
        showMainPage();
    } else if (modifyTermInput.value === '') {
        alert('You can\'t add empty item !');
    } else {
        alert('You can\'t add already exist item !');
    }
});

function showMainPage () {
  window.location.hash = '';
  mainPage.style.display = 'flex';
  sets.style.display = 'flex';
  modifyPage.style.display = 'none';
  addPage.style.display = 'none';
}

function showAddPage() {
  window.location.hash = '#add';
  addPage.style.display = 'flex';
  modifyPage.style.display = 'none';
  mainPage.style.display = 'none';
  sets.style.display = 'none';
}

function showModifyPage () {
  modifyPage.style.display = 'flex';
  sets.style.display = 'none';
  addPage.style.display = 'none';
  mainPage.style.display = 'none';
}

function addTermItem(term, def) {
  if (!termElements.every(item => item.term !== term)) {
    alert('You can\'t add already exist item !');
  } else if (term === '') {
    alert('You can\'t add empty item !');
  } else {
    let newItem = {
        term: term,
        def: def,
        completed: false
    };
    termElements.push(newItem);
    termInput.value = '';
    defInput.value = '';
    listTermItems();
  }
}

function removeItem(index) {
  termElements.splice(index, 1);
}
// save items in local storage
function saveItems() {
  let strItems = JSON.stringify(termElements);
  let strDoneItems = JSON.stringify(finishedElements);
  localStorage.setItem('items', strItems);
  localStorage.setItem('finishedElements', strDoneItems);
}
// get all items from localStorage after page loads
function getItems() {
  let strItems = localStorage.getItem('items');
  let strDoneItems = localStorage.getItem('finishedElements');
  termElements = JSON.parse(strItems);
  finishedElements = JSON.parse(strDoneItems);
  !termElements ? termElements = [] : null;
  !finishedElements ? finishedElements = [] : null;
}