function checkSeat() {

    //First take in values from the HTML input fields and parse them as integers

    let seat1 = parseInt(document.getElementById("1").value);
    let seat2 = parseInt(document.getElementById("2").value);
    let seat3 = parseInt(document.getElementById("3").value);
    let seat4 = parseInt(document.getElementById("4").value);
    let seat5 = parseInt(document.getElementById("5").value);
    let seat6 = parseInt(document.getElementById("6").value);
    let seat7 = parseInt(document.getElementById("7").value);
    let seat8 = parseInt(document.getElementById("8").value);
    let seat9 = parseInt(document.getElementById("9").value);
    let seat10 = parseInt(document.getElementById("10").value);
    let seat11 = parseInt(document.getElementById("11").value);
    let seat12 = parseInt(document.getElementById("12").value);
    let seat13 = parseInt(document.getElementById("13").value);
    let seat14 = parseInt(document.getElementById("14").value);
    let seat15 = parseInt(document.getElementById("15").value);
    let seat16 = parseInt(document.getElementById("16").value);
    let seat17 = parseInt(document.getElementById("17").value);
    let seat18 = parseInt(document.getElementById("18").value);
    let seat19 = parseInt(document.getElementById("19").value);
    let seat20 = parseInt(document.getElementById("20").value);
    let seat21 = parseInt(document.getElementById("21").value);
    let seat22 = parseInt(document.getElementById("22").value);
    let seat23 = parseInt(document.getElementById("23").value);
    let seat24 = parseInt(document.getElementById("24").value);
    let seat25 = parseInt(document.getElementById("25").value);
    let seat26 = parseInt(document.getElementById("26").value);
    let seat27 = parseInt(document.getElementById("27").value);
    let seat28 = parseInt(document.getElementById("28").value);
    let seat29 = parseInt(document.getElementById("29").value);
    let seat30 = parseInt(document.getElementById("30").value);
    let seat31 = parseInt(document.getElementById("31").value);
    let seat32 = parseInt(document.getElementById("32").value);
    let seat33 = parseInt(document.getElementById("33").value);
    let seat34 = parseInt(document.getElementById("34").value);
    let seat35 = parseInt(document.getElementById("35").value);
    let seat36 = parseInt(document.getElementById("36").value);

    //arrange them into rows of arrays

    let row1 = [seat1, seat2, seat3, seat4, seat5, seat6];
    let row2 = [seat7, seat8, seat9, seat10, seat11, seat12];
    let row3 = [seat13, seat14, seat15, seat16, seat17, seat18];
    let row4 = [seat19, seat20, seat21, seat22, seat23, seat24];
    let row5 = [seat25, seat26, seat27, seat28, seat29, seat30];
    let row6 = [seat31, seat32, seat33, seat34, seat35, seat36];

    //form a universal array of all the arrays
    let rows = [row1, row2, row3, row4, row5, row6];

    //bind the values entered to the display area
    for (let x = 0; x <= 5; x++) {
        document.getElementById("p0" + x + "").innerHTML = row1[x];

        //make the front row blue since all the seats there can "see" the stage
        document.getElementById("p0" + x + "").style.color = "blue";
    }
    for (x = 0; x <= 5; x++) {
        document.getElementById("p1" + x + "").innerHTML = row2[x];
    }
    for (x = 0; x <= 5; x++) {
        document.getElementById("p2" + x + "").innerHTML = row3[x];
    }
    for (x = 0; x <= 5; x++) {
        document.getElementById("p3" + x + "").innerHTML = row4[x];
    }
    for (x = 0; x <= 5; x++) {
        document.getElementById("p4" + x + "").innerHTML = row5[x];
    }
    for (x = 0; x <= 5; x++) {
        document.getElementById("p5" + x + "").innerHTML = row6[x];
    }

    // check if a seat is higher than the one in front of it...

    for (let i = 1; i <= 5; i++) {
        for (let j = 0; j <= 5; j++) {
            if (rows[i][j] > rows[i - 1][j]) {
                document.getElementById("p" + i + j + "").style.color = "blue";
                document.getElementById("returnValue").innerHTML = "Return Value: TRUE";
                //If it is lower...
            } else {
                document.getElementById("p" + i + j + "").style.color = "red";
                document.getElementById("returnValue").innerHTML = "Return Value: FALSE";
            }
        }
    }


}