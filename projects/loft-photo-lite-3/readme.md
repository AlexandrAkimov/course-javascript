## Страница входа и листалка фотографий

### Часть 1

Возьмите за основу свой вариант `model.js` и `pages.js`, которые вы делали на предыдущих неделях.

В [model.js](model.js) реализуйте:
- возможность логиниться в ВК (в методе `login`)
- возможность получать список друзей (в методе `init`)
- возможность получать список фотографий друга (в методе `getFriendPhotos`)

С этого момента, метод getNextPhoto модели должен опираться не на файлы `friends.json` и `photos.json`, а на данные из ВК

> В методе init получите список друзей и сохраните их в какой-нибудь внешней переменной или в свойстве модели
> 
> В методе getFriendPhotos уже реализована базовая логика кеширования фотографий, чтобы каждый раз заново не загружать фото друга, для которого вы уже получали список фото. Вам необходимо только написать код для получения самих фото из ВК

Имейте в виду, что у каждой фотографии в ВК есть свойство `sizes`, которое содержит список одних и тех же изображений, но разного размера.
Вам необходимы изображения с шириной не менее `360px`.
Попробуйте вывести значения свойства `sizes` в консоль или воспользуйтесь отладчиком, чтобы посмотреть содержимое свойства.

Страница входа находится в [loginPage.js](loginPage.js) и уже умеет вызывать нужные методы модели при нажатии на кнопку `Войти`.

Страница входа открывается автоматически (см. файл [index.js](index.js)).

### Часть 2

В файле [mainPage.js](mainPage.js) содержится код главной страницы.

Здесь вам необходимо реализовать листалку фотографий.
Главная страницы уже содержит реализованный метод `getNextPhoto`, который вызывает метод `getNextPhoto` из модели и затем передает результат в метод `setFriendAndPhoto`.
Его-то вам и нужно реализовать самостоятельно.
Смысл метода `setFriendAndPhoto` в том, чтобы получить информацию о фото (`id` и `url`) и владельце фото и установить эту информацию в соответствующие элементы на странице.

Далее реализуйте листалку фото.
Листалка можно работать либо вверх-вниз, либо влево-вправо (выберите что вам большое нравится).
Вы можете обработать как события `mousedown`/`mouseup`, так и события `touchstart`/`touchend`.

> События touchstart/touchend будут работать только на touch-устройствах или в режиме эмуляции. Для включения режима эмуляции воспользуйтесь панелью DevTool в браузере.
> 
> Все обработчики событий пишите в методе handleEvents