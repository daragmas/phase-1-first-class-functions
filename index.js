function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction(){
   return function aFunction(){}
}

const returnsAnAnonymousFunction = () => {
    return ()=>{console.log('boop')}

}