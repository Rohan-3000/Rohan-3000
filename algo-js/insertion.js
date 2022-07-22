async function insertionSortFunc(){
    let arrayelement = document.querySelectorAll(".bar");
    arrayelement[0].style.background = 'white';
    for(let i = 1; i < arrayelement.length; i++){
        let = j = i - 1, key = arrayelement[i].style.height;
        arrayelement[i].style.background = 'blue';

        await waitforme(delay);

        while(j >= 0 && (parseInt(arrayelement[j].style.height) > parseInt(key))){
            arrayelement[j].style.background = "blue";
            arrayelement[j + 1].style.height = arrayelement[j].style.height;
            j--;

            await waitforme(delay);

            for(let k = i; k >= 0; k--){
                arrayelement[k].style.background = 'green';
            }
        }

        arrayelement[j + 1].style.height = key;
        arrayelement[i].style.background = 'green';
    }
}
const insertionSortButton = document.querySelector('.insertionSort');
insertionSortButton.addEventListener('click', async function(){
    disableSortingBtn();
    disableSizeSliderbtn();
    disableNewArraybtn();
    await insertionSortFunc();
    enableSortingBtn();
    enableNewArraybtn();
    enableSizeSliderbtn();
})
