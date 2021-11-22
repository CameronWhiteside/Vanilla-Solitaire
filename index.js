// document.addEventListener('DOMContentLoaded', () => {

//     document.body.addEventListener('dragstart', handleDragStart)
//     document.body.addEventListener('drop', handleDrop)
//     document.body.addEventListener('dragover', handleOver)

//     // document.body.addEventListener('mousedown', handleCursorGrab)
//     // document.body.addEventListener('dragenter', handleEnter);
//     // document.body.addEventListener('dragleave', handleLeave)
// });

// let obj

// function handleDragStart(e) {
//     obj = e.target
//     if (!obj.closest('.card')) return;
//     if (obj.classList.contains('card')) {
//         obj = obj.firstElementChild;
//     }

//     console.log('DRAGSTART')
//     e.dataTransfer.setData('text/plain', 'SOME DATA')
// }

// function handleDrop(e) {
//     console.log('DROP')
//     let dropzone = e.target;
//     e.preventDefault()
//     dropzone.appendChild(obj)
//     dropzone.classList.remove('over')
// }

// function handleOver(e) {
//     let dropzone = e.target;
//     if (!dropzone.classList.contains('cardslot')) return;
//     e.preventDefault();
//     dropzone.classList.add('over');
// }
