module.exports = function toReadable (number) {
  
    let units = '';
    let dozen = '';
    let hundreds = '';

    function units_funct (ind) {


        if (number_length > 1 && (number.toString ()[number_length - 2] === '1')) {
            return;
        }


        let number_units = number.toString ()[ind];

        

        switch (number_units) {
            case '0' :
                units = 'zero';
                break;
            case '1' :
                units = 'one';
                break;
            case '2' :
                units = 'two';
                break;
            case '3' :
                units = 'three';
                break;
            case '4' :
                units = 'four';
                break;
            case '5' :
                units = 'five';
                break;
            case '6' :
                units = 'six';
                break;
            case '7' :
                units = 'seven';
                break;
            case '8' :
                units = 'eight';
                break;
            case '9' :
                units = 'nine';
                break;
        }
    }

    function dozen_funct (ind) {
        
        let number_dozen = number.toString ()[ind];
        switch (number_dozen) {
            case '1' :
                switch (number.toString ()[number_length-1]) {
                    case '1' :
                        dozen = 'eleven';
                        break;
                    case '2' :
                        dozen = 'twelve';
                        break;
                    case '3' :
                        dozen = 'thirteen';
                        break;
                    case '4' :
                        dozen = 'fourteen';
                        break;
                    case '5' :
                        dozen = 'fifteen';
                        break;
                    case '6' :
                        dozen = 'sixteen';
                        break;
                    case '7' :
                        dozen = 'seventeen';
                        break;
                    case '8' :
                        dozen = 'eighteen';
                        break;
                    case '9' :
                        dozen = 'nineteen';
                        break;
                    case '0' :
                        dozen = 'ten';
                        break;
                }
                break;
            case '2' :
                dozen = 'twenty';
                break;
            case '3' :
                dozen = 'thirty';
                break;
            case '4' :
                dozen = 'forty';
                break;
            case '5' :
                dozen = 'fifty';
                break;
            case '6' :
                dozen = 'sixty';
                break;
            case '7' :
                dozen = 'seventy';
                break;
            case '8' :
                dozen = 'eighty';
                break;
            case '9' :
                dozen = 'ninety';
                break;
        }
    }
    
    function hundreds_funct () {
        
        let number_hundreds = number.toString ()[0];

        switch (number_hundreds) {
            case '1' :
                hundreds = 'one hundred';
                break;
            case '2' :
                hundreds = 'two hundred';
                break;
            case '3' :
                hundreds = 'three hundred';
                break;
            case '4' :
                hundreds = 'four hundred';
                break;
            case '5' :
                hundreds = 'five hundred';
                break;
            case '6' :
                hundreds = 'six hundred';
                break;
            case '7' :
                hundreds = 'seven hundred';
                break;
            case '8' :
                hundreds = 'eight hundred';
                break;
            case '9' :
                hundreds = 'nine hundred';
                break;
        }
    }
    
    
    //  determine the bit depth of the number

    let number_length = number.toString ().length;
    
    switch (number_length) {
        case 3 :
            hundreds_funct ();
            dozen_funct (1);
            units_funct (2);
            break;
        case 2 :
            dozen_funct (0);
            units_funct (1);
            break;
        case 1 :
            units_funct (0);
            break;
    }
    if (number_length > 1 && units === 'zero') {
        units = '';
    }
    return (hundreds + ' ' + dozen + ' ' + units).trim ().replace(/ +/g, ' ');
}
