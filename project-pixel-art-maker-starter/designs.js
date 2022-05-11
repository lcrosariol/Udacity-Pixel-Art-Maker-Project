// add event on click (submit button)
document.getElementById("sizePicker").addEventListener("submit", function(event){
    //prevents page refresh
    event.preventDefault();
    //remove any existing table rows, which will remove the table data's as well
    document.getElementById("pixelCanvas").innerHTML = "";
    //gets height value
    const inputHeight = document.getElementById("inputHeight").value;
    //gets width value
    const inputWidth = document.getElementById("inputWidth").value;
    //makes the grid, passes selected height and width needed
    makeGrid(inputHeight, inputWidth);
});

//makeGrid function makes the grid
function makeGrid(inputHeight, inputWidth) {

    const colorPicker = document.getElementById("colorPicker");
    // iterate over the rows and columns and add them to the grid
    for (var i = 0; i < inputHeight; i++) {
        //insert rows
        var row = pixelCanvas.insertRow(i);
            for (var j = 0; j < inputWidth; j++){
                //insert cells
                let cell = row.insertCell(j);
                //add selected color to the cell
                cell.addEventListener("click", function(event) {
                    event.target.style.backgroundColor = colorPicker.value;
                });
            };
    };
};

