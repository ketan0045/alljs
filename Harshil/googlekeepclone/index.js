const addButton = document.querySelector(".add");

const addNotes = () => {
    const note = document.createElement("div");
    note.classList.add("note");

    const htmlDaata = `
    <div class="operation">
            <button class="edit"><i class="fas fa-edit"></i></button>
            <button class="delete"><i class="fas fa-trash-alt"></i></button>
         </div>

     <div class="main"></div>
        <textarea class=""></textarea>
     </div> `

    note.insertAdjacentHTML("afterbegin", htmlDaata);

    const addBtn = note.querySelector(".edit");
    const deleteBtn = note.querySelector(".delete");
    const mainDiv = note.querySelector(".main");
    const textarea = note.querySelector("textarea");


    deleteBtn.addEventListener("click", () => {
        note.remove();
    })
    document.body.appendChild(note);

    // document.body.appendChild(note); HEre perform some tash


}

addButton.addEventListener("click", () => addNotes());