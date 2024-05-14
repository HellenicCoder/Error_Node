const error  = new Error('somthing wrong here')

throw new Error('i am error object')

const {CustomError} = require('./CustomError')
throw new CustomError('you have a great error here please fix it !')

function doSomthing(){
    console.log('im from do somthing!')
}

// doSomthing()
try{
  doSomthing()
}catch(e){
    console.log('there is an error!')
    console.log(e)
}
