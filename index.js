function turnWordAround(){
    const stringUser = document.getElementById('string-input').value

    console.log(stringUser)
    let revStringUser = ''

    for (let cont = stringUser.length - 1; cont >= 0 ; cont--) {
        revStringUser += stringUser.charAt(cont)
    }
    
    document.getElementById('result').innerHTML = revStringUser  
}
