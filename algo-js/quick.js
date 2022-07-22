async function findPivot(array,l,r){
    let i = l - 1 ;
    console.log('In partitionLomuto()');
    array[r].style.background='red';
    for(let j = l; j <= r - 1; ++j){
        console.log('In partitionLomuto for j');
        array[j].style.background='yellow';
        await waitforme(delay) ;
        if(parseInt(array[j].style.height) < parseInt(array[r].style.height)){
            console.log('In partitionLomuto for j');
            ++i;
            swap(array[i], array[j]);
            array[i].style.background='orange'; 
            if(i!=j) {
                array[j].style.background='orange';
            }
            await waitforme(delay) ;
        }
        else{
            array[j].style.background='pink' ;
        }    
    }
    ++i;
    await waitforme(delay);
    swap(array[i], array[r]);
    console.log(`i = ${i}`, typeof(i));
    array[r].style.background= 'pink';
    array[i].style.background = 'green';

    await waitforme(delay);

    for(let k = 0; k < array.length; ++k){
        if(array[k].style.background  != 'green')
            array[k].style.background = 'cyan' ;
    }
    return (i);
}

async function quickSortFunc(array,l,r){
    console.log('In quickSort()', `l=${l} r=${r}`, typeof(l), typeof(r));
    if(l < r){
        let pivot_index = await findPivot(array,l,r) ;
        await quickSortFunc(array,l,pivot_index-1); 
        await quickSortFunc(array, pivot_index + 1,r);
    }
    else{
        if (l >= 0 && r >= 0 && l < array.length && r < array.length) {
            array[r].style.background = 'green';
            array[l].style.background = 'green';
        }
    }
}


const quickSortbtn = document.querySelector(".quickSort");
quickSortbtn.addEventListener('click', async function (){ 
    let array = document.querySelectorAll('.bar');
    let l = 0;
    let r = array.length - 1;
    disableSortingBtn();
    disableSizeSliderbtn();
    disableNewArraybtn();
    await quickSortFunc(array, l, r);
    enableSortingBtn();
    enableSizeSliderbtn();
    enableNewArraybtn();
})