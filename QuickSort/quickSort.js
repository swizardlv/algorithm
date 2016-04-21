function sort() {
    var sortString = document.getElementById('preSort').value;
    //var sortString = "12 2 3 24 5";
    var sortArray = sortString.split(' ');
    var length = sortArray.length;
    var array=[];
    for (var i = 0; i <length; i++) {
    	array.push(parseInt(sortArray[i]));
    }
    quickSort(array, 0, length - 1);
   console.log(array);
   document.getElementById('sortResult').innerText=array;
}

function quickSort(array, start, end) {
	if (start>end) {
		return;
	}
    var _start = start;
    var _end = end;
    var base = array[start];
    
    while (_start !== _end) {
        while (array[_end] >= base && _end > _start) {
            _end--;
        }
        while (array[_start] <= base && _end > _start) {
            _start++;
        }
        if (_start<_end) {
        	var temp = array[_start];
        	array[_start] = array[_end];
        	array[_end] = temp;
        }
        
    }
    array[start] = array[_start];
    array[_start] = base;
    console.log(array);
    quickSort(array, start, _start - 1);
    quickSort(array, _start+1, end);
}
