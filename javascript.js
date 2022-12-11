let changeMode = () => {
    let mybody = document.body;
    mybody.classList.toggle('mydark')   
}

function loadCoupon(){
    document.getElementById('coupon').style.visibility = 'visible';
    document.getElementById('main').style.opacity='0.2';
}

function closeCoupon(){
    document.getElementById('coupon').style.visibility = 'hidden';
    document.getElementById('main').style.opacity='1';
    let mybody = document.body;
    mybody.classList.toggle('mydark')     
}

// geo location

// let x = document.getElementById('coordinates')
let y = document.getElementById('city')
let z = document.getElementById('weather')

function geolocation() {
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(showPosition)
    }else{
        x.innerText = `location not found`
    }
}
