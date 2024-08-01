let weigthElement = document.querySelector('#weight');
let heightElement = document.querySelector('#height');
let resultElement = document.querySelector('#result');
let dimensionElement = document.querySelector('#dimension');
let calcElement = document.querySelector('#calc');
let resetElement = document.querySelector('#reset')

calcElement.addEventListener('click', function () {
    let weight = Number(weigthElement.value);
    let height = Number(heightElement.value)/ 100;
    let result = Math.round(weight / height ** 2 * 100) / 100;
    let dimension = dimensionElement.value;

    if(height == 0 && weight == 0){
        alert('請輸入身高體重')
        result = '' 
        dimension = ''
    }else if(height == 0){
        alert('請輸入身高')
        result = '' 
        dimension = ''
    }else if(weight == 0){
        alert('請輸入體重')
        result = '' 
        dimension = ''
    }

    if(result < 18.5){
        dimension = '體重過輕'; 
    }else if(result <= 23.99){
        dimension = '健康體位';
    }else if(result <= 26.99){
        dimension = '過重';
    }else if(result <= 29.99){
        dimension = '輕度肥胖';
    }else if(result <= 34.99){
        dimension = '中度肥胖';
    }else if(result >= 35){
        dimension = '重度肥胖';
    }

    resultElement.textContent = result;
    dimensionElement.textContent = dimension;
})

resetElement.addEventListener('click', function(){
    weigthElement.value = '';
    heightElement.value = '';
    resultElement.textContent = '';
    dimensionElement.textContent = '';

})
