for(i = 1; i < 10; i++){
    temp = ""
    for(j = 1; j <= i; j++){
        temp += `${i}*${j}=${i*j} `
    }
    console.log(temp)
}