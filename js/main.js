// фильтр

let fltrBtn = document.getElementsByClassName('filter-items');
let allBtn = document.getElementById('all');
let allEl = document.getElementsByClassName('works-items');
let brndBtn = document.getElementById('brand');
let dsgnBtn = document.getElementById('design');
let devBtn = document.getElementById('dev');
let stratBtn = document.getElementById('strat');
let brand = 'brand';
let design = 'design';
let development = 'development';
let strategy = 'strategy';

allBtn.onclick = function() {
            remAct();
            console.log(allBtn);
            allBtn.classList.add('act');
            for(let i = 0; i<allEl.length; i++) {
                allEl[i].classList.add('show');
               if(allEl[i].classList.contains('hidden')) {
                    allEl[i].classList.remove('hidden');
                    allEl[i].classList.add('show')
               }
               console.log(allEl[i].className);
            
        }
}

brndBtn.onclick = function() {
   clckBtn(brand, brndBtn)
}

dsgnBtn.onclick = function() {
    clckBtn(design, dsgnBtn);
}

devBtn.onclick = function() {
    clckBtn(development, devBtn);
}

stratBtn.onclick = function() {
    clckBtn(strategy, strat);
}

function clckBtn(x, y) {
    
    remAct();
    console.log(x);
    y.classList.add('act');
    for(let i = 0; i<allEl.length; i++) {
        allEl[i].classList.remove('show');
        allEl[i].classList.remove('hidden');
        if(allEl[i].classList.contains(x)) {
            allEl[i].classList.add('show');
            }
        else{
            allEl[i].classList.add('hidden')
            }
            console.log(allEl[i].className);
        }
}   

let remAct = function() {
    for(let i = 0; i<fltrBtn.length; i++) {
        if (fltrBtn[i].classList.contains('act')) {
            fltrBtn[i].classList.remove('act');
        }
    }
}
// фильтр