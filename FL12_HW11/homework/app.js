const structure = [
    {
      'folder': true,
      'title': 'Films',
      'children': [
        {
          'title': 'Iron Man.avi'
        },
        {
          'folder': true,
          'title': 'Fantasy',
          'children': [
            {
              'title': 'The Lord of the Rings.avi'
            },
            {
              'folder': true,
              'title': 'New folder 1',
              'children': false
            }
          ]
        }
      ]
    },
    {
      'folder': true,
      'title': 'Documents',
      'children': [
        {
          'folder': true,
          'title': 'EPAM Homework answers',
          'children': null
        }
      ]
    }
];

let rootNode = document.getElementById('root');

let fatherElement = document.createElement('ul');
rootNode.appendChild(fatherElement);

function makeFolderTree(struct, fatherEl) {
  struct.forEach(el => {
      let listItem = document.createElement('li');
      let itemContainer = document.createElement('p');
      let itemTitle = document.createElement('span');
      let icon = document.createElement('i');
      icon.className = 'material-icons';
      itemTitle.innerHTML = el.title;
      itemContainer.appendChild(icon);
      itemContainer.appendChild(itemTitle);
      listItem.appendChild(itemContainer);
      fatherEl.appendChild(listItem);
      if(!el.folder){
        icon.innerHTML = 'insert_drive_file';
      } else {
        icon.innerHTML = 'folder';
      }
      if(el.folder){
        itemContainer.className = 'folder';
        itemContainer.addEventListener('click', function (){
          icon = this.children[0].innerHTML;
          if (icon === 'folder_open') {
              this.children[0].innerHTML = 'folder'; 
          } else {
              this.children[0].innerHTML = 'folder_open'; 
          }
          let folderBlock = this.nextElementSibling.style.display;
          if (folderBlock === 'block') {
              this.nextElementSibling.style.display = 'none';
          } else {
              this.nextElementSibling.style.display = 'block';
          }
        });
      } 
      if (el.children === false || el.children === null && el.folder) {
          let emptyAttachment = document.createElement('ul');
          let emptyListItem = document.createElement('li');
          let emptyItemContainer = document.createElement('p');
          emptyItemContainer.innerHTML = 'Folder is empty';
          emptyItemContainer.style.fontStyle = 'italic';
          emptyListItem.appendChild(emptyItemContainer);
          emptyAttachment.appendChild(emptyListItem);
          emptyAttachment.style.display = 'none';
          listItem.appendChild(emptyAttachment);
      }
      if (el.children) {
          let newAttachment = document.createElement('ul');
          newAttachment.style.display = 'none';
          listItem.appendChild(newAttachment);
          makeFolderTree(el.children, newAttachment);
      }
  });  
}

makeFolderTree(structure, fatherElement);