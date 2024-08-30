//TODO: OPTIMIZE CODE TO ADHERE TO DRY!

function matrixMultiplcation(table1,table2,tableOut) {
    console.log("hello wrld")
}

function matrixMultiplcation(table1,table2,tableOut) {
    console.log("hellowrld3!!")
}

$(function() {
    var $addColFirst = $('#addColFirst')
    var $remColFirst = $("#remColFirst")

    var $addrowFirst = $('#addRowFirst')
    var $remRowFirst = $('#remRowFirst')

    var $addColSecond = $('#addColSecond')
    var $remColSecond = $('#remColSecond')

    var $addRowSecond = $('#addRowSecond')
    var $remRowSecond = $('#remRowSecond')

    var $remMatFirst = $('#remMatFirst')
    var $remMatSecond = $('#remMatSecond')

    var firstTableWidth = 3
    var firstTableLength = 3
    var secondTableWidth = 3
    var secondTableLength = 3

    var selectedOperation = $('#operationDropdown').val()

    // console.log("currently selected is " + selectedOperation)

    //Checks to see whether matrix addition or multiplication is selected.
    $('#operationDropdown').on('change', function() {
        selectedOperation = $(this).val();
        console.log("Selected Operation: " + selectedOperation);

        //Turn it into the biggest row/column combo to not lose any data.

        if (selectedOperation == '*') {
            //If more columns in first than rows in second .... add rows in second

            while (firstTableWidth > secondTableLength) {
                $("#secondTable").append("<tr></tr>")
                var i = 0;
                while (i != secondTableWidth) {
                    $("#secondTable tr:last").append(`<td><input type="number" class="form-control"></td>`)
                    i++
                }
                secondTableLength++
            }

            //If more rows in second than columns in first .. add columns to first

            while (secondTableLength >firstTableWidth) {
                $("#firstTable tr").append(`<td><input type="number" class="form-control"></td>`)
                firstTableWidth++
            }
        }

        if (selectedOperation == '+') {
            while (firstTableLength > secondTableLength) {
                //make secondTableLenght equal by adding rows
                $("#secondTable").append("<tr></tr>")
                secondTableLength++
                var i = 0;
                while (i != secondTableWidth) {
                    $("#secondTable tr:last").append(`<td><input type="number" class="form-control"></td>`)
                    i++
                }
            }
            while (secondTableLength > firstTableLength) {
                //Make firstTableLength equal by adding rows
                $("#firstTable").append("<tr></tr>")
                firstTableLength++
                var i = 0;
                while (i != firstTableWidth) {
                    $("#firstTable tr:last").append(`<td><input type="number" class="form-control"></td>`)
                    i++
                }
            }

            while (firstTableWidth > secondTableWidth) {
                //Make secondTableWidth equal by adding columns
                $("#secondTable tr").append(`<td><input type="number" class="form-control"></td>`)
                secondTableWidth++
            }
            while (secondTableWidth > firstTableWidth) {
                //Make firstTableWidth equal by adding columnss
                $("#firstTable tr").append(`<td><input type="number" class="form-control"></td>`)
                firstTableWidth++
            }
        }
    });

    $addColFirst.on('click', function() {
        // console.log("hello")
        if (firstTableWidth != 10) {
            $("#firstTable tr").append(`<td><input type="number" class="form-control"></td>`)
            firstTableWidth++

            if (selectedOperation == '+') {
                $("#secondTable tr").append(`<td><input type="number" class="form-control"></td>`)
                secondTableWidth++
            }

            if (selectedOperation == '*') {
                // add row second
                $("#secondTable").append("<tr></tr>")
                secondTableLength++
                var i = 0;
                while (i != secondTableWidth) {
                    $("#secondTable tr:last").append(`<td><input type="number" class="form-control"></td>`)
                    i++
                }
            }
        } else {
            console.log("too large/small")
        }
    });

    $remColFirst.on('click', function() {
        // console.log("hello")
        if (firstTableWidth != 1) {
            // $("#firstTable tr").append(`<td><input type="number" class="form-control"></td>`)
            $('#firstTable tr td:last-child').remove()
            firstTableWidth--

            if (selectedOperation == '+') {
                $('#secondTable tr td:last-child').remove()
                secondTableWidth--
            }

            if (selectedOperation == '*') {
                //rem row second
                $("#secondTable tr:last").remove();
                secondTableLength--;
            }
        } else {
            console.log("too large/small")
        }
    });



    $addrowFirst.on('click', function() {
        if (firstTableLength != 10) {
            $("#firstTable").append("<tr></tr>")
            firstTableLength++
            if (selectedOperation == '+') {
                $("#secondTable").append("<tr></tr>")
                secondTableLength++
            }
            var i = 0;
            while (i != firstTableWidth) {
                $("#firstTable tr:last").append(`<td><input type="number" class="form-control"></td>`)
                if (selectedOperation == '+') {
                    $("#secondTable tr:last").append(`<td><input type="number" class="form-control"></td>`)
                }
                i++
            }
        }
    });

    $remRowFirst.on('click', function() {
        if (firstTableLength != 1) {
            $("#firstTable tr:last").remove();
            firstTableLength--;
            if (selectedOperation == '+') {
                $("#secondTable tr:last").remove();
                secondTableLength--;
            }
        } 
    });

    //Menu for second matrix

    $addColSecond.on('click', function() {
        // console.log("hello")
        if (secondTableWidth != 10) {
            $("#secondTable tr").append(`<td><input type="number" class="form-control"></td>`)
            secondTableWidth++

            if (selectedOperation == '+') {
                $("#firstTable tr").append(`<td><input type="number" class="form-control"></td>`)
                firstTableWidth++
            }
        } else {
            console.log("too large/small")
        }
    });

    $remColSecond.on('click', function() {
        // console.log("hello")
        if (secondTableWidth != 1) {
            // $("#firstTable tr").append(`<td><input type="number" class="form-control"></td>`)
            $('#secondTable tr td:last-child').remove()
            secondTableWidth--

            if (selectedOperation == '+') {
                $('#firstTable tr td:last-child').remove()
                firstTableWidth--
            }
        } else {
            console.log("too large/small")
        }
    });

    $addRowSecond.on('click', function() {
        if (secondTableLength != 10) {
            $("#secondTable").append("<tr></tr>")
            secondTableLength++
            if (selectedOperation == '+') {
                $("#firstTable").append("<tr></tr>")
                firstTableLength++
            }
            if (selectedOperation == '*') {
                //add column first
                $("#firstTable tr").append(`<td><input type="number" class="form-control"></td>`)
                firstTableWidth++
            }
            var i = 0;
            while (i != secondTableWidth) {
                $("#secondTable tr:last").append(`<td><input type="number" class="form-control"></td>`)
                if (selectedOperation == '+') {
                    $("#firstTable tr:last").append(`<td><input type="number" class="form-control"></td>`)
                }
                i++
            }
        }
    });

    $remRowSecond.on('click', function() {
        if (secondTableLength != 1) {
            $("#secondTable tr:last").remove();
            secondTableLength--;
            if (selectedOperation == '+') {
                $("#firstTable tr:last").remove();
                firstTableLength--;
            }
            if (selectedOperation == '*') {
                //remove column first
                $('#firstTable tr td:last-child').remove()
                firstTableWidth--
            }
        } 
    });

    $remMatFirst.on('click', function() {
        $('#firstTable').find('input').val('');
    });

    $remMatSecond.on('click', function() {
        $('#secondTable').find('input').val('');
    });

    $('#calcOut').on('click', function() { 

        //Clear past output table.
        $("#outputTable").find('tr').remove();

        //Make output matrix size of first matrix length and second matrix width - valid for both addition and multiplication
        var outputLength = 0
        while (outputLength < firstTableLength) {
            $("#outputTable").append("<tr></tr>")
            var i = 0;
            while (i != secondTableWidth) {
                $("#outputTable tr:last").append(`<td><span class="output-cell">0</span></td>`)
                i++
            }
            outputLength++
        }

        $('.outContainer').css("display", "block");
    })
})

