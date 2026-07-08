function count() {
    let count = 0;
    
    
      function a() {
        count++
        console.log(count)
      }
      return a
}

let b = count()
b()
b()
b()