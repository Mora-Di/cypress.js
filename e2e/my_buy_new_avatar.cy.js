describe('Проверка покупки нового аватара', function () {                  
    it('e2e тест на покупку нового аватара для тренера', function () {   // название теста
         cy.visit('https://pokemonbattle.ru/');                          // переходим на сайт
        
         cy.get('.style_1_popup_white_title').contains('Битва покемонов'); // сравнение с текстом
         cy.get('[href="https://id.vk.com/auth?uuid=GBFBV2654u2jhtrRTJS45jw6435454yyt3y4d2354&app_id=51935122&response_type=silent_token&redirect_uri=https://api.pokemonbattle.ru/v2/technical_routes/callback_vk"] > .auth_content_social_icon').should('be.visible'); // кнопка"ВК" виден пользователю
         cy.get('.footer_studio').should('be.visible');                    // лого компании видно пользователю

         cy.get('input[id="k_email"]').type('USER_LOGIN');          // вводим логин
         cy.get('input[id="k_password"]').type('USER_PASSWORD');    // вводим пароль
         cy.get('button[type="submit"]').click();                   // нажимаем кнопку Подтвердить

         cy.wait(500);
         cy.get('.style_1_heading_38_400_pokemon_classic').contains('Покемоны'); // сравнение с текстом
         cy.get('.header_interactive_button_link_to_pokemons > .interactive_button > .wrapper_img > .interactive_button_img').should('be.visible');  // иконка Покебола видна пользователю
         cy.get('.header_card_trainer').click();                                 // Клик в шапке на аву тренера
         cy.wait(500);

         cy.get('.k_mobile > :nth-child(5) > #dropdown > img').click(); // нажимаем кнопку Смена аватара
         cy.get('.pokemon__title').contains('Магазин');                 // сравнение с текстом
         cy.get('.available > button').first().click();                 // кликаем Купить у первого доступного аватара

         cy.get('.card_number').type('1234 2343 4323 4234');          // вводим номер карты
         cy.get('.card_csv').type('125');                             // вводим CVV карты
         cy.get('.card_date').type('1226');                           // вводим срок действия карты
         cy.get('.card_name').type('NAME');                           // вводим имя владельца карты
         cy.wait(500);
         
         cy.get('.style_1_base_button_payment_body button.style_1_base_button_payment:not(.disable)').click();    // нажимаем кнопку Оплатить
         
         cy.get('.payment_header_content_title_h2').contains('Пикачунькофф'); // сравнение с текстом
         cy.get('.threeds_number').type('56456');                             // вводим код подтверждения СМС
         cy.get('.style_1_base_button_payment_body button.style_1_base_button_payment:not(.disable)').click();    // нажимаем кнопку Оплатить

         cy.get('.payment_status_top_title').should('be.visible');               // проверяем видимость сообщения об успешной покупке
         cy.get('.payment_status_top_title').contains('Покупка прошла успешно'); // сравнение с текстом
         cy.get('.style_1_base_link_blue').contains('Вернуться в магазин');      // сравнение с текстом
         cy.get('.style_1_base_link_blue').should('have.css', 'color', 'rgb(85, 137, 241)'); //проверяем цвет кнопки

         cy.get('.style_1_base_link_blue').click();         // нажимаем кнопку Вернуться в магазин
         cy.get('.header_card_trainer').click();            // нажимаем на кнопку тренера, чтобы вернуться в ЛК


        });
 });
