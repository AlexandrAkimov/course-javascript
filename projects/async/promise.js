//Frontend ==> Server ==> DB ==> Server ==> Frontend

console.log('Frontend: Запрашиваю данные с сервера');
console.log('...');

// setTimeout(() => {
//   console.log('Server: Запрашиваю данные с Базы Данных');
//   console.log('...');

//   setTimeout(() => {
//     console.log('БД: Делаю выборку данных и отправляю серверу');
//     console.log('...');

//     setTimeout(() => {
//       console.log('Server: Модифирую данные из БД и отправляю на frontend');
//       console.log('...');

//       setTimeout(() => {
//         console.log('Frontend: Получаю данные с сервера');
//         console.log('...');
//       }, 2000);
//     }, 1000);
//   }, 1000);
// }, 2000);

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Server: Запрашиваю данные с Базы Данных');
    console.log('...');
    resolve();
  }, 2000);
})
  .then(() => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('БД: Делаю выборку данных и отправляю серверу');
        console.log('...');
        const dataFromDB = {
          userName: 'Alex',
          age: 34,
        };
        resolve(dataFromDB);
      }, 1000);
    });
  })
  .then((data) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Server: Модифирую данные из БД и отправляю на frontend');
        console.log('...');
        console.log('Данные из БД', data);
        resolve({ ...data, modified: true });
      }, 2000);
    });
  })
  .then((dataFromServer) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        console.log('Frontend: Получаю данные с сервера');
        console.log('...');
        document.body.innerHTML = `<h1>${dataFromServer.userName}</h1>`;
        resolve();
      }, 1000);
    });
  })
  .catch((error) => {
    console.log('Error', error);
  })
  .finally(() => {
    console.log('Finally');
  });
