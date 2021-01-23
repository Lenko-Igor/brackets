module.exports = function check(str, bracketsConfig) {
  if(str.length%2 === 0){
    let arr = [];
    
    [...str].forEach((e,i) => {
      bracketsConfig.forEach(elem => {
        if(elem[0] !== elem[1]){
          if(e === elem[0]){
            arr.push(e);
          } else if(e === elem[1]){
            if(arr[arr.length - 1] === elem[0]){
              arr.pop();
            } else {
              arr.push(e);
            }
          }
        } else {
          if(e === elem[0]){
            (arr[arr.length-1] === e && arr.length !== 0)? arr.pop() : arr.push(e);
          }
        }

      })
    })
    
    return (arr.length === 0);
  }else{
    return false;
  }
}
