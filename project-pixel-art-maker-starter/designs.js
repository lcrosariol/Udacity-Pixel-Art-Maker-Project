// add event on click (submit button)
document.getElementById("sizePicker").addEventListener("submit", function(event){
    //prevents page refresh
    event.preventDefault();
    //gets height value
    const inputHeight = document.getElementById("inputHeight").value;
    //gets width value
    const inputWidth = document.getElementById("inputWidth").value;
    makeGrid(inputHeight, inputWidth);
});


function makeGrid(inputHeight, inputWidth) {
    //remove any existing table rows, which will remove the table data's as well
    pixelCanvas.innerHTML= "";
    let colorPicker = document.getElementById("colorPicker");
    // iterate over the rows and columns and add them to the grid
    for (var i = 0; i < inputHeight; i++) {
        var row = pixelCanvas.insertRow(i);
            for (var j = 0; j < inputWidth; j++){
                let cell = row.insertCell(j);
                //add selected color to the cell
                cell.addEventListener("click", function(event) {
                    event.target.style.backgroundColor = colorPicker.value;
                });
            };
    };
};
