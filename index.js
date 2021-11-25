document.addEventListener('DOMContentLoaded', () => {

    document.body.addEventListener('dragstart', handleDragStart)
    document.body.addEventListener('drop', handleDrop)
    document.body.addEventListener('dragover', handleOver)


    // document.body.addEventListener('mousedown', handleCursorGrab)
    // document.body.addEventListener('dragenter', handleEnter);
    // document.body.addEventListener('dragleave', handleLeave)

});



    function handleDragStart(e) {

    console.log('DRAGSTART')
    e.dataTransfer.setData('draggedID', e.target.id)
    // e.target.remove()

    }

function handleDrop(e) {
    let dropzone = e.target;
    if(!dropzone.classList.contains('cardslot')) return;
    e.preventDefault()

    let droppedItemId = e.dataTransfer.getData('draggedID')
    document.getElementById(droppedItemId).remove()
    dropzone.innerHTML = dropzone.innerHTML += `<div class ="card" id=${droppedItemId} draggable="true"></div>`
    dropzone.classList.remove('over')
    }

function handleOver(e) {
    let dropzone = e.target;
    if(!dropzone.classList.contains('cardslot')) return;
    e.preventDefault();
    dropzone.classList.add('over');
    }
