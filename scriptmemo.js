
function addMemo() {
    const memoInput = document.getElementById("memoInput");
    const memoText = memoInput.value.trim();

    if (memoText === "") {
        alert("Please write something before adding!");
        return;
    }

    const memoList = document.getElementById("memoList");

    const memoItem = document.createElement("div");
    memoItem.className = "memo-item";

 
    const memoTextElement = document.createElement("span");
    memoTextElement.className = "memo-text";
    memoTextElement.textContent = memoText;


    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
        deleteMemo(memoItem);
    };


    memoItem.appendChild(memoTextElement);
    memoItem.appendChild(deleteButton);

   
    memoList.appendChild(memoItem);

 
    memoInput.value = "";
}


function deleteMemo(memoItem) {
    memoItem.classList.add("fadeOut");
    setTimeout(() => {
        memoItem.remove();
    }, 300); 
}
