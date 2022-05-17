const horaP = document.getElementById('hora')
const minutosP = document.getElementById('minutos')
const ceroP = document.getElementById('cero')
let hora
let minutos

function obtenerHora(){
    const fecha = new Date()
    const horaTotal = fecha.toLocaleTimeString('es-es', {timeStyle:'short'})
    let arr = horaTotal.split(':')
    hora = arr[0]
    minutos = arr[1]
    horaP.textContent = romanos(hora)
    minutosP.textContent = romanos(minutos)
    if(hora === '00' || minutos === '00'){
        ceroP.style.display = 'block';
    }else{
        ceroP.style.display = 'none';
    }

}

setInterval(obtenerHora, 1000)


function romanos(n){
    
    if (n === '00'){
        return '0'
    }
    else if(n === '01'){
        return 'I'
    }
    else if(n === '02'){
        return 'II'
    }
    else if(n === '03'){
        return 'III'
    }
    else if(n === '04'){
        return 'IV'
    }
    else if(n === '05'){
        return 'V'
    }
    else if(n === '06'){
        return 'VI'
    }
    else if(n === '07'){
        return 'VII'
    }
    else if(n === '08'){
        return 'VIII'
    }
    else if(n === '09'){
        return 'IX'
    }
    else if(n === '10'){
        return 'X'
    }
    else if(n === '11'){
        return 'XI'
    }
    else if(n === '12'){
        return 'XII'
    }
    else if(n === '13'){
        return 'XIII'
    }
    else if(n === '14'){
        return 'XIV'
    }
    else if(n === '15'){
        return 'XV'
    }
    else if(n === '16'){
        return 'XVI'
    }
    else if(n === '17'){
        return 'XVII'
    }
    else if(n === '18'){
        return 'XVIII'
    }
    else if(n === '19'){
        return 'XIX'
    }
    else if(n === '20'){
        return 'XX'
    }
    else if(n === '21'){
        return 'XXI'
    }
    else if(n === '22'){
        return 'XXII'
    }
    else if(n === '23'){
        return 'XXIII'
    }
    else if(n === '24'){
        return 'XXIV'
    }
    else if(n === '25'){
        return 'XXV'
    }
    else if(n === '26'){
        return 'XXVI'
    }
    else if(n === '27'){
        return 'XXVII'
    }
    else if(n === '28'){
        return 'XXVIII'
    }
    else if(n === '29'){
        return 'XXIX'
    }
    else if(n === '30'){
        return 'XXX'
    }
    else if(n === '31'){
        return 'XXXI'
    }
    else if(n === '32'){
        return 'XXXII'
    }
    else if(n === '33'){
        return 'XXXIII'
    }
    else if(n === '34'){
        return 'XXXIV'
    }
    else if(n === '35'){
        return 'XXXV'
    }
    else if(n === '36'){
        return 'XXXVI'
    }
    else if(n === '37'){
        return 'XXXVII'
    }
    else if(n === '38'){
        return 'XXXVIII'
    }
    else if(n === '39'){
        return 'XXXIX'
    }
    else if(n === '40'){
        return 'XL'
    }
    else if(n === '41'){
        return 'XLI'
    }
    else if(n === '42'){
        return 'XLII'
    }
    else if(n === '43'){
        return 'XLIII'
    }
    else if(n === '44'){
        return 'XLIV'
    }
    else if(n === '45'){
        return 'XLV'
    }
    else if(n === '46'){
        return 'XLVI'
    }
    else if(n === '47'){
        return 'XLVII'
    }
    else if(n === '48'){
        return 'XLVIII'
    }
    else if(n === '49'){
        return 'XLIX'
    }
    else if(n === '50'){
        return 'L'
    }
    else if(n === '51'){
        return 'LI'
    }
    else if(n === '52'){
        return 'LII'
    }
    else if(n === '53'){
        return 'LIII'
    }
    else if(n === '54'){
        return 'LIV'
    }
    else if(n === '55'){
        return 'LV'
    }
    else if(n === '56'){
        return 'LVI'
    }
    else if(n === '57'){
        return 'LVII'
    }
    else if(n === '58'){
        return 'LVIII'
    }
    else if(n === '59'){
        return 'LIX'
    }
}
