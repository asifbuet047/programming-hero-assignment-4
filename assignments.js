function cubeNumber(number) {
    if ((typeof number) == "number") {
        return Math.pow(number, 3);
    } else {
        return 'This is not a number';
    }
}



function matchFinder(string1, string2) {
    if ((typeof string1 == "string") && (typeof string2 == "string")) {
        var lengthOfFirstString = string1.length;
        var lengthOfSecondString = string2.length;
        for (var i = 0; i < lengthOfFirstString; i++) {
            for (var j = 0; j < lengthOfSecondString; j++) {
                if (string1[i + j] == string2[j]) {
                    if (j == (lengthOfSecondString - 1)) {
                        return true;
                    } else {
                        continue;
                    }
                } else {
                    break;
                }
            }
            if (i == (lengthOfFirstString - 1)) {
                return false;
            }
        }
    } else {
        return "Input is not string";
    }
}


function sortMaker(arr) {
    if (arr[0] >= 0) {
        if (arr[1] >= 0) {
            if (arr[0] > arr[1]) {
                return arr;
            } else if (arr[0] == arr[1]) {
                return "equal";
            } else {
                var temp = arr[0];
                arr[0] = arr[1];
                arr[1] = temp;
                return arr;
            }
        } else {
            return 'Invalid Input';
        }

    } else {
        return 'Invalid Input';
    }
}


function findAddress(obj) {
    var street = obj.street;
    var house = obj.house;
    var society = obj.society;

    if ((typeof street) == 'undefined') {
        street = '__';
    }

    if ((typeof house) == 'undefined') {
        house = '__';
    }

    if ((typeof society) == 'undefined') {
        society = '__';
    }

    var result = street + ',' + house + ',' + society;
    return result;
}


function canPay(changeArray, totalDue) {
    if (changeArray.length > 0) {
        var totalMoney = 0;
        for (var i = 0; i < changeArray.length; i++) {
            totalMoney = totalMoney + changeArray[i];
        }
        if (totalMoney >= totalDue) {
            return true;
        } else {
            return false;
        }
    } else {
        return "Please provide valid elements";
    }
}


let address = {
    // street: 10,
    // house: "15A",
    // society: 'Earth Perfect'
};

console.log(canPay([1,1,1,2,2,3],10));


