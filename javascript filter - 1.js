function searchNames( logins ){
  let arrayFileted=logins.filter(filterFunction)
  function filterFunction(string){
    let [name, Email]=string
    if(name.endsWith('_'))
      return [name,Email]
  }
  return arrayFileted
}
