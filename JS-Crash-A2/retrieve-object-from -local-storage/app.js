function retrieveFromLocalStorage(key) {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : null;
  }  
/*   const myObject = JSON.parse(localStorage.getItem("myKey"));
  console.log(myObject); */