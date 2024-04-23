function prime(...nums) {
    let result = "";
    for (let num of nums) {
        let flag = true;
        let i = 2;
        while (flag == true) {
            if (num <= 1) {
                result += `${num} no es primo\n`;
                flag = false;
            } else if (num > i) {
                if (num % i === 0) {
                    result += `${num} no es primo\n`;
                    flag = false;
                }
            } else {
                result += `${num} es primo\n`;
                flag = false;
            }    
            i++;
        }
    }
    return console.log(result);
}