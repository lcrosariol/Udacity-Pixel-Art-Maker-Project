// Select color input
// Select size input
var height, width, color;

// whtn the user selects a size, call makeGrid()
$('#sizePicker').submit(function (event) {
    //used on a submit button to prevent it from submitting a form
    event.preventDefault();
    //get the values while the button is clicked 
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    //function makeGrid takes parameters of height and width
    makeGrid(height, width);
})

function makeGrid(x, y) {
    //remove any existing table rows, which will remove the table data's as well
    $('tr').remove();
    //loop over the height
    for (var i = 1; i <= x; i++) {
        //create a table row with an id of pixelCanvas for height selected by user
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        //loop over the width submission
        for (var j = 1; j <= y; j++) {
            //add a table data column to the row
            $('#table' + i).append('<td></td>');
        }
    }
    //when user clicks on the cell add color
    $('td').click(function addColor() {
        //get the value of the id of colorPicker and set it to our variable
        color = $('#colorPicker').val();
        // if this cell has a style attribute, 
        if ($(this).attr('style')) {
            //remove the styling
            $(this).removeAttr('style')
            //if not..
        } else {
            //style the cell with the background of the color selected
            $(this).attr('style', 'background-color:' + color);
        }
    })
}
