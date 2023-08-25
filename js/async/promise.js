const 프로미스 = new Promise(function(성공, 실패) {
    const check = 1;

    if (check) {setTimeout(function() {
        성공();
    }, 1000)}
    else {setTimeout(function(){
            실패();
        }, 1000)
    }
})

프로미스.then(function() {
    console.log("성공");
}).catch(function() {
    console.log("실패");
}).finally(function() {
    console.log("기본실행");
})