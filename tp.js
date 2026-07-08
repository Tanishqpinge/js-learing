function add() {
    let a = 10;
    function b(){
         console.log(a)
    }
    return b;
}

const fn = add();
fn();