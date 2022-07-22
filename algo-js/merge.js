async function merge(array, low, mid, high) {
    const n1 = mid - low + 1;
    const n2 = high - mid;
    let left = new Array(n1);
    let right = new Array(n2);

    for (let i = 0; i < n1; i++) {
        await waitforme(delay);
        array[low + i].style.background = 'orange';
        left[i] = array[low + i].style.height;
    }
    for (let i = 0; i < n2; i++) {
        await waitforme(delay);
        array[mid + 1 + i].style.background = 'yellow';
        right[i] = array[mid + 1 + i].style.height;
    }
    await waitforme(delay);
    let i = 0, j = 0, k = low;
    while (i < n1 && j < n2) {
        await waitforme(delay);
        if (parseInt(left[i]) <= parseInt(right[j])) {
            if ((n1 + n2) === array.length) {
                array[k].style.background = 'green';
            }
            else {
                array[k].style.background = 'lightgreen';
            }

            array[k].style.height = left[i];
            i++;
            k++;
        }
        else {
            if ((n1 + n2) === array.length) {
                array[k].style.background = 'green';
            }
            else {
                array[k].style.background = 'lightgreen';
            }
            array[k].style.height = right[j];
            j++;
            k++;
        }
    }
    while (i < n1) {
        await waitforme(delay);
        if ((n1 + n2) === array.length) {
            array[k].style.background = 'green';
        }
        else {
            array[k].style.background = 'lightgreen';
        }
        array[k].style.height = left[i];
        i++;
        k++;
    }
    while (j < n2) {
        await waitforme(delay);
        if ((n1 + n2) === array.length) {
            array[k].style.background = 'green';
        }
        else {
            array[k].style.background = 'lightgreen';
        }
        array[k].style.height = right[j];
        j++;
        k++;
    }
}
async function mergeSortFunc(array, l, r) {
    if (l >= r) {
        return;
    }
    const m = l + Math.floor((r - l) / 2);
    await mergeSortFunc(array, l, m);
    await mergeSortFunc(array, m + 1, r);
    await merge(array, l, m, r);
}

const mergeSortbtn = document.querySelector(".mergeSort");
mergeSortbtn.addEventListener('click', async function () {
    let array = document.querySelectorAll('.bar');
    let l = 0;
    let r = parseInt(array.length) - 1;
    disableSortingBtn();
    disableSizeSliderbtn();
    disableNewArraybtn();
    await mergeSortFunc(array, l, r);
    enableSortingBtn();
    enableNewArraybtn();
    enableSizeSliderbtn();

});