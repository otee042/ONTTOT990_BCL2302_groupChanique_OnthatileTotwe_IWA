import {TABLES, COLUMNS, state, createOrderData, updateDragging } from "./data.js";
import { createOrderHtml, html, moveToColumn, updateDraggingHtml} from "./view.js";
/**
 * A handler that fires when a user drags over any element inside a column. In
 * order to determine which column the user is dragging over the entire event
 * bubble path is checked with `event.path` (or `event.composedPath()` for
 * browsers that don't support `event.path`). The bubbling path is looped over
 * until an element with a `data-area` attribute is found. Once found both the
 * active dragging column is set in the `state` object in "data.js" and the HTML
 * is updated to reflect the new column.
 *
 * @param {Event} event
 */
const handleDragOver = (event) => {
    event.preventDefault();
    const path = event.path || event.composedPath()
    let column = null
    for (const element of path) {
        const { area } = element.dataset
        if (area) {
            column = area
            break;
        }
    }
    if (!column) return
    updateDragging({ over: column })
    updateDraggingHtml({ over: column })
};
//This function is an event handler, which is called when a draggable element is first dragged.
//It sets the dragged variable to the dragged element.
let dragged;
const handleDragStart = (event) => {
     dragged = event.target;
};


function handleDragDrop (event) {
    event.target.append(dragged);
}
const handleDragEnd = (event) => {
     const background = event.target.closest("section");
     background.style.backgroundColor = "";
};

//The handleHelpToggle function shows the overlay by setting its display style to "block"
const handleHelpToggle = (event) => {
    html.help.overlay.style.display = "block"
};

// handleHelpCancel function hides it by setting its display style to "none"
const handleHelpCancel = (event) => {
    html.help.overlay.style.display = "none"
    html.other.add.focus()                  // The latter function also sets the focus to the "add" button in the application.
}
const handleAddToggle = (event) => {
    html.add.overlay.style.display = "block"
    html.other.add.focus()
}
const handleAddCancel = () => {
    html.add.overlay.style.display = "none"
    html.other.add.focus()
};

//This line defines the function handleAddSubmit and specifies that it takes an event object as its argument.
const handleAddSubmit = (event) => {
    event.preventDefault();                 // prevents the default behavior of the form, which is to refresh the page upon submission.
    const overlay = html.add.overlay;       // getting reference to an overlay element with the id "overlay" from the html object that is imported from the view.js file.
    const formData = new FormData(event.target);            //The event.target property refers to the form element that triggered the event.
    const data = Object.fromEntries(formData);              //converts the form data into an object using the Object.fromEntries() method.
    const newData = createOrderData(data);                  //creating new order data by passing the form data object to the createOrderData() function, which is imported from the data.js file.
    const htmlData = createOrderHtml(newData);                 // creates an HTML representation of the new order data by passing the new order data object to the createOrderHtml() function, which is imported from the view.js file.
    const append = document.querySelector('[data-area="ordered"]');
    event.target.reset();           // resets the form to its default state by resetting all of its values.
    overlay.close();                //closing the overlay element by setting its display property to "none".
    append.appendChild(htmlData);           // appending the new HTML order data to the append element using the appendChild() method.
};

const handleEditToggle = (event) => {
    const overlay = html.edit.overlay;
    const cancelButton = html.edit.cancel;
    const input = html.edit.title;
    const select = html.edit.table;
    const option = html.edit.column;

    //checking if the event.target has a data-id attribute. If it does, it shows the overlay; otherwise, it does nothing.
    event.target.dataset.id ? overlay.show() : undefined;
    // sets the id variable to the value of the data-id attribute of the event.target. If the attribute doesn't exist, the value is set to undefined.
    const id = event.target.dataset.id ? event.target.dataset.id : undefined;
    input.value = event.target.dataset.id                           //set the value of the input and select elements based on the data-id attribute of the event.target
    input.value = event.target.dataset.id                           //If the attribute exists, the values of the input and select elements are set to the text content of specific child elements of the event.target
        ? event.target.querySelector(".order__title").textContent       //otherwise, the values are set to undefined.
        : undefined;
    select.value = event.target.dataset.id
        ? event.target.querySelector(".order__value").textContent
        : undefined;
    let section = document.querySelector(`[data-id="${id}"]`);
    option.value = section ? section.closest("section").dataset.area : "";
    if (event.target === cancelButton) {
        overlay.close();
    }
    html.edit.delete.id = id;            //the id property of the delete object in the html.edit namespace to the value of the id variable.
};


const handleEditSubmit = (event) => {
    event.preventDefault();
    const idRemove = html.edit.delete.id;
    const orderDelete = document.querySelector(`[data-id="${idRemove}"]`);
    orderDelete.remove();
    const overlay = html.edit.overlay;
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    const newData = createOrderData(data);
    const htmlData = createOrderHtml(newData);
    const appended = document.querySelector(`[data-area="${newData.column}"]`);
    appended.appendChild(htmlData);
    event.target.reset();
    overlay.close();
}
const handleDelete = (event) => {
    const idToBeDeleted = html.edit.delete.id;
    const orderToBeDeleted = document.querySelector(
        `[data-id="${idToBeDeleted}"]`
    );
    const overlay = html.edit.overlay;
    orderToBeDeleted.remove();
    overlay.close();
}
html.add.cancel.addEventListener('click', handleAddCancel)
html.other.add.addEventListener('click', handleAddToggle)
html.add.form.addEventListener('submit', handleAddSubmit)
html.other.grid.addEventListener('click', handleEditToggle)
html.edit.cancel.addEventListener('click', handleEditToggle)
html.edit.form.addEventListener('submit', handleEditSubmit)
html.edit.delete.addEventListener('click', handleDelete)
html.help.cancel.addEventListener('click', handleHelpCancel)
html.other.help.addEventListener('click', handleHelpToggle)
for (const htmlArea of Object.values(html.area)) {
   htmlArea.addEventListener('dragover', handleDragOver)
   htmlArea.addEventListener('dragstart', handleDragStart)
   htmlArea.addEventListener('drop', handleDragDrop)
   htmlArea.addEventListener('dragend', handleDragEnd)
};



