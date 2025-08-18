describe ('Проверка авторизации', function () {

   it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сатй
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяем цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); // нажали на кнопку

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // сравнениие в текстом
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка"крестик" виден пользователю
    })


it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сатй
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяем цвет кнопки

        cy.get('#mail').type('german@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio'); //ввели неверный пароль
        cy.get('#loginButton').click(); // нажали на кнопку

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // сравнениие в текстом
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка"крестик" виден пользователю
    })

it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сатй
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяем цвет кнопки

        cy.get('#mail').type('negerman@dolnikov.ru'); // ввели неверный логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажали на кнопку

        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // сравнениие в текстом
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка"крестик" виден пользователю
    })

it('Проблема валидации (Логин без @)', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сатй
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяем цвет кнопки

        cy.get('#mail').type('germandolnikov.ru'); // ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); //ввели верный пароль
        cy.get('#loginButton').click(); // нажали на кнопку

        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // сравнениие в текстом
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка"крестик" виден пользователю
    })

it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сатй
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяем цвет кнопки

        cy.get('#forgotEmailButton').click(); // нажали на кнопку "Забыли пароль"
        cy.get('#mailForgot').type('german@dolnikov.ru'); // ввели почту для восстановления
        cy.get('#restoreEmailButton').click(); // нажали на кнопку "Отправить код"

        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // сравнениие в текстом
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка"крестик" виден пользователю
    })

    it('успех авторизации при вводе логина в разном регистре', function () {
        cy.visit('https://login.qa.studio/'); // зашли на сатй
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); //проверяем цвет кнопки

        cy.get('#mail').type('GerMan@dolnikov.ru'); // ввели логин
        cy.get('#pass').type('iLoveqastudio1'); //ввели пароль
        cy.get('#loginButton').click(); // нажали на кнопку

        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // сравнениие в текстом
        cy.get('#messageHeader').should('be.visible'); // текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // кнопка"крестик" виден пользователю
    })


})
