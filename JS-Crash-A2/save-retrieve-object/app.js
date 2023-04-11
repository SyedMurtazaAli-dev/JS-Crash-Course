       const exampleObj = {
        name: 'murtaza',
        age: 19,
        email: 'syedmurtazaaliofficial@gmail.com'
      };
      function saveObjectToLocalStorage(obj) {
        for (let prop in obj) {
          localStorage.setItem(prop, obj[prop]);
        }
        let newObj = {};
        for (let i = 0; i < localStorage.length; i++) {
          let prop = localStorage.key(i);
          newObj[prop] = localStorage.getItem(prop);
        }

        return newObj;
      }
      const retrievedObj = saveObjectToLocalStorage(exampleObj);
      console.log('Original Object:', exampleObj);
      console.log('Retrieved Object:', retrievedObj);