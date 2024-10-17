function fun(num){
    // let count=0;
    while(num<4){
        switch(num){
            case 1:{
              let count=++num;
                return count;
            }
                case 2:{
                    let count=++num;
                    return count;
                }
                    case 3:{
                      let count=++num;
                        return count;
                    }
        }
    }
}
console.log(fun(2))