
function InsertionSort() {
    var table=document.getElementsByClassName('Table');
    var arr1 = [85, 5, 1, 96, 2, 45, 33, 8];
     table[0].textContent = arr1;

    for (var i = 1; i < arr1.length; i++) {
        var pivot = arr1[i];
        var j;
        for (j = i - 1; j >= 0 && arr1[j] > pivot; j--) {
            arr1[j + 1] = arr1[j];
        }
        arr1[j + 1] = pivot;
    }

    var resultTable =  document.getElementsByClassName('resultTable');
    resultTable[0].textContent = arr1;
}





