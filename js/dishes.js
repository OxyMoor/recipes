const dishesInfo = [
    {
        categoryName: 'breakfast',
        dishesList: 
            [
                {
                    imgSrc: './img/dishes/breakfast/sirniki.jpg',
                    title: 'Сырники',
                    ingredientsList: [{ingr: 'творог 5%', quant: '400 г'}, {ingr: 'желток', quant: '2 шт.'}, {ingr: 'мука', quant: '2-3 ст.л.'}, {ingr: 'сахар', quant: 'по вкусу'}],
                    note: 'Тесто скатать в колбаску, обвалять в муке, разделить на сырники, каждый обвалять в муке. Жарить с обеих сторон.'
                },
                {
                    imgSrc: './img/dishes/breakfast/ovsyanoblin.jpg',
                    title: 'Овсяноблин',
                    ingredientsList: [{ingr: 'овсянка', quant: '3 ст.л.'}, {ingr: 'яйцо', quant: '1 шт.'}, {ingr: 'молоко', quant: 'на глаз'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Овсянку залить молоком, дать набухнуть. Добавить яйцо, соль. Жарить на медленном огне с обеих сторон. Сверху полить йогуртом, добавить банан, семечки.'
                },
                {
                    imgSrc: './img/dishes/breakfast/vareniki-s-tvorogom.jpg',
                    title: 'Вареники с творогом',
                    ingredientsList: [{ingr: 'вареники с творогом', quant: '-'}],
                    note: 'Поместить в кипящую подсоленную воду, варить 10 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/ovsyanka-s-fruktami.jpg',
                    title: 'Овсянка с фруктами и орехами',
                    ingredientsList: [{ingr: 'овсянка', quant: '3 ст.л.'}, {ingr: 'молоко', quant: 'на глаз'}, {ingr: 'соль', quant: 'по вкусу'}, {ingr: 'фрукты', quant: 'по вкусу'}, {ingr: 'орехи, семмечки', quant: 'по вкусу'}],
                    note: 'Овсянку залить молоком, добавить соль, фрукты, орешки. Поместить в микроволновку на 50 сек.'
                },
                {
                    imgSrc: './img/dishes/breakfast/blini-s-tvorogom.jpg',
                    title: 'Блины с творогом',
                    ingredientsList: [{ingr: 'молоко', quant: '500 мл'}, {ingr: 'яйцо', quant: '2 шт.'}, {ingr: 'мука', quant: '150 г'}, {ingr: 'соль', quant: 'щепотка'}, {ingr: 'сахар', quant: '1 ч.л.'}, {ingr: 'масло растительное', quant: '2 ст.л.'}, {ingr: 'творог', quant: '300 г'}, {ingr: 'желток', quant: '1 шт.'}],
                    note: 'Молоко должно быть теплым. Смешать молоко, яйца, муку, соль, сахар, масло. Дать тесту постоять 30 мин. Для наинки смешать творог и желток. Завернуть блины и еще раз обжарить.'
                }
            ]
    },
    {
        categoryName: 'garnish',
        dishesList:
            [
                {
                    imgSrc: './img/dishes/garnish/kartofelnie-dolki.jpg',
                    title: 'Картофельные дольки',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'масло растителное', quant: '1 ст.л.'}, {ingr: 'соль', quant: 'по вкусу'}, {ingr: 'специи', quant: 'по вкусу'}],
                    note: 'Картофель порезать на дольки, отварить в течение 3-5 минут. Добавить специи, соль, масло. Выпекать на пергаменте около 20 минут.'
                },
                {
                    imgSrc: './img/dishes/garnish/makaroni.jpg',
                    title: 'Макароны',
                    ingredientsList: [{ingr: 'Макароны', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Варить в подсоленной воде около 10-12 минут.'
                },
                {
                    imgSrc: './img/dishes/garnish/tushenie-ovoschi.jpg',
                    title: 'Тушеные овощи',
                    ingredientsList: [{ingr: 'картофель', quant: '-'}, {ingr: 'капуста', quant: '-'}, {ingr: 'морковь', quant: '-'}, {ingr: 'лук', quant: '-'}, {ingr: 'любые другие овощи', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Слегка обжарить, затем тушить с водой 20-30 минут.'
                },
                {
                    imgSrc: './img/dishes/garnish/grechka.jpg',
                    title: 'Гречка',
                    ingredientsList: [{ingr: 'гречка', quant: '1 часть'}, {ingr: 'вода', quant: '1.5 части'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'После закипания варить под крышкой 15 минут.'
                },
                {
                    imgSrc: './img/dishes/garnish/ris.jpg',
                    title: 'Рис',
                    ingredientsList: [{ingr: 'рис', quant: '1 чсать'}, {ingr: 'вода', quant: '2 части'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'После закипания варить под крышкой 15-20 минут.'
                },
            ]

    },
    {
        categoryName: 'dinner',
        dishesList:
            [
                {
                    imgSrc: './img/dishes/dinner/makaroni-s-kuritsei-v-souse.jpg',
                    title: 'Макароны с фаршем/курицей в соусе',
                    ingredientsList: [{ingr: 'макароны', quant: '1/2 пачки'}, {ingr: 'фарш/курица', quant: '1 филе'}, {ingr: 'сметана', quant: '2 ст.л.'}, {ingr: 'соус', quant: '1 ст.л.'}, {ingr: 'мука', quant: '1 ст.л.'}, {ingr: 'вода', quant: '1/2 стакана'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Курицу/фарш слегка обжарить, добавить муку и продолжать обжаривать 1 минуту. Смешать воду, соус и сметану, добавить в сковороду. Тушить 15 минут. Макароны сварить и соединить с мясом.'
                },
                {
                    imgSrc: './img/dishes/dinner/funchosa-s-ovoschami-i-kuritsei.jpg',
                    title: 'Фунчоза с курицей и овощами',
                    ingredientsList: [{ingr: 'фунчоза', quant: '1/2 пачки'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'перец болгарский', quant: '1 шт.'}, {ingr: 'курица', quant: '1 филе'}, {ingr: 'чеснок', quant: '1 зубчик'}, {ingr: 'соевый соус', quant: '2 ст.л.'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Овощи и курицу нарезать длинными узкими полосками. Обжарить 15 минут с чесноком и соевым соусом. Фунчозу залить кипятком, заваривать 4 минуты. Соединить фунчозу с мясом и овощами.'
                },
                {
                    imgSrc: './img/dishes/dinner/kartoshka-tushenaya-s-kuritsei.jpg',
                    title: 'Картошка, тушеная с курицей',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'курица', quant: '1 филе'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'мука', quant: '1 ст.л.'}, {ingr: 'вода', quant: '1 стакан'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Обжарить курицу несколько минут. Добавить овощи, еще немного обжарить. Добавить муку, перемешать. Добавить воду и тушить 30 минут.'
                },
                {
                    imgSrc: './img/dishes/dinner/tushenie-ovoschi-s-kuritsei.jpg',
                    title: 'Овощи, тушеные с курицей',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'капуста', quant: '1/2 кочана'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'любые другие овощи', quant: '-'}, {ingr: 'вода', quant: '1 стакан'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Обжарить курицу несколько минут. Добавить овощи, еще немного обжарить. Добавить воду и тушить 30 минут.'
                },
                {
                    imgSrc: './img/dishes/dinner/plov.jpg',
                    title: 'Плов',
                    ingredientsList: [{ingr: 'рис', quant: '1 часть'}, {ingr: 'вода', quant: '2 части'}, {ingr: 'курица', quant: '1 филе'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'соль, специи', quant: 'по вкусу'}],
                    note: 'Слегка обжарить курицу и овощи, добавить рис и воду. Готовить под крышкой 20 минут.'
                },
                {
                    imgSrc: './img/dishes/dinner/grechka-po-kupecheski.jpg',
                    title: 'Гречка по-купечески',
                    ingredientsList: [{ingr: 'гречка', quant: '1 часть'}, {ingr: 'вода', quant: '1.5 части'}, {ingr: 'курица', quant: '1 филе'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'соль, специи', quant: 'по вкусу'}],
                    note: 'Слегка обжарить курицу и овощи, добавить гречку и воду. Готовить под крышкой 15 минут.'
                },
                {
                    imgSrc: './img/dishes/dinner/zapekanka-ovoschnaya-s-kuritsei.jpg',
                    title: 'Овощная запеканка с курицей',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'перец болгарский', quant: '1 шт.'}, {ingr: 'картофель', quant: '2-3 шт.'}, {ingr: 'сыр', quant: '-'}, {ingr: 'майонез', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'В блюдо для запекания выложить все слоями (слои переммазать майонезом). Сверху посыпать тертым сыром. Выпекать около 1 часа, до готовности картошки.'
                },
                {
                    imgSrc: './img/dishes/dinner/vareniki-s-kartoshkoi.jpg',
                    title: 'Вареники с картошкой',
                    ingredientsList: [{ingr: 'Вареники с картошкой', quant: '-'}],
                    note: 'Обжарить на медленном огне с обеих сторон до образования корочки, затем потушить с водой.'
                },
                {
                    imgSrc: './img/dishes/dinner/pelmeni-v-souse.jpg',
                    title: 'Пельмени в соусе',
                    ingredientsList: [{ingr: 'пельмени', quant: '1 упаковка'}, {ingr: 'сметана', quant: '2 ст.л.'}, {ingr: 'соус', quant: '1 ст.л.'}, {ingr: 'вода', quant: '1/2 стакана'}, {ingr: 'сыр', quant: '-'}, {ingr: 'зелень', quant: 'по вкусу'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Обжарить пельмени с обеих сторон. Смешать воду, сметану, соус и влить к пельменям. Тушить около 10 минут. К концу посыпать тертым сыром и зеленью.'
                },
                {
                    imgSrc: './img/dishes/dinner/schi.jpg',
                    title: 'Щи',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'капуста', quant: '1/4 кочана'}, {ingr: 'горошек', quant: '3 ст.л.'}, {ingr: 'курица', quant: '2 бедра/1 филе'}, {ingr: 'соль', quant: '1 ст.л.'}, {ingr: 'вода', quant: '2 л'}],
                    note: 'Приготовить зажарку из лука и моркови. После закипания курицы с картошкой и снятия пенки добавить горошек и капусту. Варить 30 минут. Добавить зажарку.'
                },
                {
                    imgSrc: './img/dishes/dinner/borsch.jpg',
                    title: 'Борщ',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'капуста', quant: '1/4 кочана'}, {ingr: 'свекла вареная', quant: '1 шт.'}, {ingr: 'горошек', quant: '3 ст.л.'}, {ingr: 'курица', quant: '2 бедра/1 филе'}, {ingr: 'соль', quant: '1 ст.л.'}, {ingr: 'вода', quant: '2 л'}],
                    note: 'Приготовить зажарку из лука и моркови. После закипания курицы с картошкой и снятия пенки добавить горошек, свеклу и капусту. Варить 30 минут. Добавить зажарку.'
                },
                {
                    imgSrc: './img/dishes/dinner/sup-s-plavlenim-sirkom.jpg',
                    title: 'Суп с плавленым сырком',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'горошек', quant: '3 ст.л.'}, {ingr: 'плавленый сырок', quant: '1/2 упаковки'}, {ingr: 'вермишель', quant: 'жменька'}, {ingr: 'курица', quant: '2 бедра/1 филе'}, {ingr: 'соль', quant: '1 ст.л.'}, {ingr: 'вода', quant: '2 л'}],
                    note: 'Приготовить зажарку из лука и моркови. После закипания курицы с картошкой и снятия пенки добавить горошек. Варить 30 минут. За 5 минут до готовности добавить вермишель и плавленный сырок. Добавить зажарку.'
                },
                {
                    imgSrc: './img/dishes/dinner/lukovii-sup.jpg',
                    title: 'Луковый суп',
                    ingredientsList: [{ingr: 'лук', quant: '2 шт.'}, {ingr: 'вермишель', quant: '1-2 жменьки'}, {ingr: 'колбаса вареная', quant: '-'}, {ingr: 'плавленый сырок', quant: '1/2 упакоовки'}, {ingr: 'батон для сухариков', quant: '-'}, {ingr: 'соль', quant: '1 ст.л.'}, {ingr: 'сахар', quant: '1 ст.л.'}, {ingr: 'вода', quant: '2 л'}],
                    note: 'Лук нарезать полукольцами, обжарить до золотистого цвета с сахаром. Колбасу нарезать кубиками. Вермишель варить около 5 минут с колбасой, обжареным луком и плавленым сырком. Из батона сделать сухарики или гренки.'
                }
            ]
    },
    {
        categoryName: 'salad',
        dishesList:
            [
                {
                    imgSrc: './img/dishes/salad/kuritsa-s-fasolyu.jpg',
                    title: 'Курица и фасоль',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'фасоль консервированная', quant: '1 банка'}, {ingr: 'сыр', quant: '-'}, {ingr: 'морковь по-корейски', quant: '1/2 упаковки'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Сыр натереть. Курицу отварить, порезать и смешать с остальными ингредиентами. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/salad/kuritsa-s-chernoslivom.jpg',
                    title: 'Курица и чернослив',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'яйцо', quant: '1-2 шт.'}, {ingr: 'огурец свежий', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'чернослив', quant: 'жменька'}, {ingr: 'грецкий орех', quant: '2-3 шт.'}, {ingr: 'укроп', quant: '-'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Курицу и яйца отварить, морковь с луком потушить. Нарезать и смешать ингредиенты. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/salad/vinegret.jpg',
                    title: 'Винегрет',
                    ingredientsList: [{ingr: 'картофель', quant: '1-2 шт.'}, {ingr: 'свекла вареная', quant: '2 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'огурец соленый', quant: '1-2 шт.'}, {ingr: 'горошек консервированный', quant: '1 банка'}, {ingr: 'лук', quant: '1/2 шт.'}, {ingr: 'масло растительное', quant: '-'}],
                    note: 'Отварить картофель и морковь. Нарезать и смешать ингредиенты. Заправить растительным маслом.'
                },
                {
                    imgSrc: './img/dishes/salad/olivye.jpg',
                    title: 'Оливье',
                    ingredientsList: [{ingr: 'картофель', quant: '2-3 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'яйцо', quant: '1-2 шт.'}, {ingr: 'горошек консервированный', quant: '1 банка'}, , {ingr: 'колбаса вареная/отварная курица', quant: '1 филе'}, , {ingr: 'лук', quant: '1/2 шт.'}, , {ingr: 'майонез', quant: '-'}],
                    note: 'Отварить картофель, морковь, яйцо. Нарезать и смешать ингредиенты. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/salad/krabovii-bez-risa.jpg',
                    title: 'Крабовый салат без риса',
                    ingredientsList: [{ingr: 'крабовые палочки', quant: '1 упаковка'}, {ingr: 'огурец свежий', quant: '1-2 шт.'}, {ingr: 'кукуруза консервированная', quant: '1 банка'}, {ingr: 'капуста пекинская', quant: '1/4 кочана'}, {ingr: 'яйцо', quant: '1-2 шт.'}, {ingr: 'лук', quant: '1/2 шт.'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Яйцо отварить. Нарезать и смешать ингредиенты. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/salad/kuritsa-s-kapustoi-i-goroshkom.jpg',
                    title: 'Курица и капуста',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'капуста', quant: '1/4 кочана'}, {ingr: 'горошек консервированный', quant: '1 банка'}, {ingr: 'сыр', quant: '-'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Курицу отварить, капусту нарезать, сыр натереть. Смешать ингредиенты. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/salad/ovoschnoi.jpg',
                    title: 'Овощной салат',
                    ingredientsList: [{ingr: 'любые свежие овощи', quant: '-'}, {ingr: 'зелень', quant: '-'}, {ingr: 'лук', quant: '-'}],
                    note: 'Нарезать салат. Заправка - майонез/сметана/масло/йогурт.'
                },
                {
                    imgSrc: './img/dishes/salad/svekla-s-chesnokom.jpg',
                    title: 'Свекла с чесноком и орехами',
                    ingredientsList: [{ingr: 'свекла вареная', quant: '2 шт.'}, {ingr: 'чеснок', quant: '1 зубчик'}, {ingr: 'грецкий орех', quant: '1-2 шт.'}, {ingr: 'майонез', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Свеклу и чеснок натереть. Орех мелко нарезать. Посолить, заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/salad/tunets-s-avokado.jpg',
                    title: 'Салат с тунцом',
                    ingredientsList: [{ingr: 'тунец консервированный', quant: '150 г'}, {ingr: 'авокадо', quant: '1/2 шт.'}, {ingr: 'томат', quant: '100 г'}, {ingr: 'огурец', quant: '100 г'}, {ingr: 'греческий йогурт', quant: '2-3 ст.л.'}, {ingr: 'соевый соус', quant: '1/2 ч.л.'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Тунец размять вилкой, овощи нарезать. Для заправки смешать греческий йогурт и соевый соус.'
                }
            ]
    },
    {
        categoryName: 'protein',
        dishesList:
            [
                {
                    imgSrc: './img/dishes/protein/kuritsa-tushenaya-v-souse.jpg',
                    title: 'Курица в соусе',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'сметана', quant: '2 ст.л.'}, {ingr: 'соус', quant: '1 ст.л.'}, {ingr: 'мука', quant: '1 ст.л.'}, {ingr: 'вода', quant: '1/2 стакана'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Курицу слегка обжарить, добавить муку и продолжать обжаривать 1 минуту. Смешать воду, соус и сметану, добавить в сковороду. Тушить 15 минут.'
                },
                {
                    imgSrc: './img/dishes/protein/kuritsa-v-listah.jpg',
                    title: 'Курица, жаренная в листах магги',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'листы для жарки', quant: '1 упаковка'}],
                    note: 'Филе порезать на стейки, жарить в листах по инструкции.'
                },
                {
                    imgSrc: './img/dishes/protein/rublenie-kotletki.jpg',
                    title: 'Рубленые котлетки',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'яйцо', quant: '1 шт.'}, {ingr: 'лук', quant: '1/2 шт.'}, {ingr: 'мука', quant: '2 ст.л.'}, {ingr: 'соль, специи', quant: 'по вкусу'}],
                    note: 'Курицу и лук по возможности мелко порезать, добавить яйцо и муку, посолить. Котлетки выкладывать на сковороду ложкой, обжаривать с каждой стороны по 3-5 минут.'
                },
                {
                    imgSrc: './img/dishes/protein/stripsi.jpg',
                    title: 'Стрипсы',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'яйцо', quant: '1 шт.'}, {ingr: 'мука', quant: '-'}, {ingr: 'чипсы без вкуса', quant: 'большая упаковкка'}, {ingr: 'вода', quant: '1/2 ст.'}, {ingr: 'уксус', quant: '1 ст.л.'}, {ingr: 'соевый соус', quant: '1 ст.л.'}, {ingr: 'сахар', quant: '1 ст.л.'}, {ingr: 'соль, паприка', quant: 'по вкусу'}],
                    note: 'Курицу нарезать полосками. Смешать воду, уксус, соевый соус, сахар, соль и специи, замариновать курицу в этой смеси. Куриные кусочки обвалять в муке, затем обмакнуть в яйцо, затем обвалять в крошке из чипсов. Выпекать на пергаменте около 20 минут.'
                },
                {
                    imgSrc: './img/dishes/protein/omlet-s-tomatami-i-sirom.jpg',
                    title: 'Омлет с помидорами и сыром',
                    ingredientsList: [{ingr: 'яйцо', quant: '2-3 шт.'}, {ingr: 'молоко', quant: '-'}, {ingr: 'сыр', quant: '-'}, {ingr: 'помидоры', quant: '1-2 шт.'}, {ingr: 'зелень', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Помидоры нарезать кубиком, слегка обжарить на сковороде. Взбить яйца с небольшим количеством молока, посолить. Вылить смесь к помидорам. На большом огне помешивать, пока яйцо не схватится. Затем уменьшить огонь, посыпать омлет тертым сыром, готовить под крышкой несколько минут. Посыпать зеленью.'
                },
                {
                    imgSrc: './img/dishes/protein/yaitso-pashot.jpg',
                    title: 'Яйцо',
                    ingredientsList: [{ingr: 'яйцо', quant: '-'}],
                    note: 'Яйцо можно сварить как есть, сварить в пашотнице или пожарить.'
                },
            ]
    },
    {
        categoryName: 'snack',
        dishesList:
            [
                {
                    imgSrc: './img/dishes/snack/tosti-s-riboi.jpg',
                    title: 'Тосты с авокадо и красной рыбой',
                    ingredientsList: [{ingr: 'хлеб', quant: '2 куска'}, {ingr: 'авокадо', quant: '1/2 шт.'}, {ingr: 'красная рыба', quant: '2-4 ломтика'}, {ingr: 'творожный сыр', quant: '-'}, {ingr: 'лимонный сок', quant: 'несколько капель'}, {ingr: 'соль, перец', quant: 'по вкусу'}],
                    note: 'Хлеб поджарить. Авокадо растолочь в пюре, сбрызнуть лимонным соком, посолить, поперчить. Намазать на хлеб творожный сыр, пюре, сверху выложить красную рыбу.'
                },
                {
                    imgSrc: './img/dishes/snack/tosti-s-avokado.jpg',
                    title: 'Тосты с творожным сыром и авокадо',
                    ingredientsList: [{ingr: 'хлеб', quant: '2 куска'}, {ingr: 'авокадо', quant: '1/2 шт.'}, {ingr: 'творожный сыр', quant: '-'}, {ingr: 'лимонный сок', quant: 'несколько капель'}, {ingr: 'соль, перец', quant: 'по вкусу'}],
                    note: 'Хлеб поджарить. Авокадо растолочь в пюре, сбрызнуть лимонным соком, посолить, поперчить. Намазать на хлеб творожный сыр, пюре.'
                },
                {
                    imgSrc: './img/dishes/snack/tosti-s-tomatami.jpg',
                    title: 'Тосты с творожным сыром и вялеными томатами',
                    ingredientsList: [{ingr: 'хлеб', quant: '2 куска'}, {ingr: 'вяленые томаты', quant: '-'}, {ingr: 'творожный сыр', quant: '-'}],
                    note: 'Хлеб поджарить. Намазать на хлеб творожный сыр, сверху выложить вяленые томаты.'
                },
                {
                    imgSrc: './img/dishes/snack/tosti-s-bananom.jpg',
                    title: 'Тосты с арахисовой пастой и бананом',
                    ingredientsList: [{ingr: 'хлеб', quant: '2 куска'}, {ingr: 'банан', quant: '1 шт.'}, {ingr: 'арахисовая паста', quant: '1 ст.л.'}],
                    note: 'Хлеб поджарить, смазать арахисовой пастой. Сверху выложить нарезанный банан.'
                },
                {
                    imgSrc: './img/dishes/snack/buterbrody-so-shprotami.jpg',
                    title: 'Бутерброды со шпротами',
                    ingredientsList: [{ingr: 'батон', quant: '-'}, {ingr: 'шпроты', quant: '1 банка'}, {ingr: 'огурец свежий/соленый', quant: '1 шт.'}, {ingr: 'чеснок', quant: '1 зубчик'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Батон поджарить, натереть чесноком, смазать майонезом. Сверху выложить шпроты и нарезанный огурец.'
                },
                {
                    imgSrc: './img/dishes/snack/sirnii-omlet-s-lavashom.jpg',
                    title: 'Сырный омлет в лаваше',
                    ingredientsList: [{ingr: 'яйцо', quant: '2 шт.'}, {ingr: 'лаваш круглый', quant: '1 шт.'}, {ingr: 'сыр', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Взбить яйца, вылить на сковороду. Сверху сразу накрыть лавашом. Через несколько минут, когда яйцо схватится, перевернуть. Посыпать сверху (на яйцо) сыром, готовить под крышкой до готовности яйца.'
                },
                {
                    imgSrc: './img/dishes/snack/sloenye-ruletiki.jpg',
                    title: 'Рулетики из слоеного теста',
                    ingredientsList: [{ingr: 'тесто слоеное', quant: '1 упаковка'}, {ingr: 'колбаса', quant: '-'}, {ingr: 'сыр', quant: '-'}, {ingr: 'кетчуп', quant: '-'},  {ingr: 'майонез', quant: '-'}],
                    note: 'Тесто смазать кетчупом и майонезом. Сверху равномерно выложить колбасу и сыр. Скатать в колбаску, затем разделить на булочки. Выпекать около 30 минут.'
                },
                {
                    imgSrc: './img/dishes/snack/pitsa.jpg',
                    title: 'Пицца',
                    ingredientsList: [{ingr: 'тесто дрожжевое', quant: '1 упаковка'}, {ingr: 'Колбаса', quant: '-'}, {ingr: 'сыр', quant: '-'}, {ingr: 'кетчуп', quant: '-'}, {ingr: 'майонез', quant: '-'}, {ingr: 'томаты (вяленые или свежие)', quant: 'опционально'}, {ingr: 'болгарский перец', quant: 'опционально'}, {ingr: 'лук', quant: 'опционально'}, {ingr: 'маслины', quant: 'опционально'}],
                    note: 'Раскатать тесто, смазать кетчупом и майонезом, выложить начинку и посыпать тертым сыром. Выпекать около 30 минут.'
                },
                {
                    imgSrc: './img/dishes/snack/hachapuri.jpg',
                    title: 'Хачапури',
                    ingredientsList: [{ingr: 'творог', quant: '250 г'}, {ingr: 'масло сливочное', quant: '150 г'}, {ingr: 'мука', quant: '1.5 ст.'}, {ingr: 'сахар', quant: '1/2 ст.л.'}, {ingr: 'сода', quant: '1/2 ч.л.'}, {ingr: 'сыр адыгейский', quant: '150 г'}, {ingr: 'сметана', quant: '2 ст.л.'}, {ingr: 'зелень', quant: 'пучок'}, {ingr: 'соль, специи', quant: 'по вкусу'}],
                    note: 'Для теста смешать творог, масло, соду, сахар и муку. Раскатать 2 пласта. Для начинки смешать адыгейский сыр, 1 ст.л. сметаны, зелень, специи. Начинку выложить между двумя пластами теста, защипнуть края. Сверху смазать оставшейся сметаной, посыпать щепоткой соли. Запекать 40 имнут.'
                },
                {
                    imgSrc: './img/dishes/snack/pomidori-s-sirom.jpg',
                    title: 'Помидоры с сыром и чесноком',
                    ingredientsList: [{ingr: 'помидор', quant: '2-3 шт.'}, {ingr: 'сыр', quant: '-'}, {ingr: 'чеснок', quant: '1 зубчик'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Натереть чеснок и сыр на мелкой терке, смешать с майонезом. Намазать смесь на нарезанные помидоры.'
                },
                {
                    imgSrc: './img/dishes/snack/rulet-iz-lavasha.jpg',
                    title: 'Рулет из лаваша',
                    ingredientsList: [{ingr: 'лаваш прямоугольный', quant: '2 листа'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'яйцо', quant: '1-2 шт.'}, {ingr: 'крабовые палочки', quant: '1 упаковка'}, {ingr: 'чеснок', quant: '1-2 зубчика'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Яйца отварить, натереть. Из лука и моркови приготовить зажарку. Крабовые палочки мелко нарезать. Чеснок натереть на мелкой терке, смешать с майонезом, смазать один лист лаваша. На него выложить яйца и крабовые палочки. На сухой лист выложить зажарку. Один лист положить поверх другого и свернуть в рулет.'
                },
                {
                    imgSrc: './img/dishes/snack/zakusochnie-keksi.jpg',
                    title: 'Закусочные кексы',
                    ingredientsList: [{ingr: 'яйцо', quant: '2 шт.'}, {ingr: 'масло сливочное', quant: '2 ст.л.'}, {ingr: 'мука', quant: '3 ст.л.'}, {ingr: 'сода', quant: 'щепотка'}, {ingr: 'соль', quant: 'щепотка'}, {ingr: 'сахар', quant: 'щепотка'}, {ingr: 'колбаса', quant: '-'}, {ingr: 'сыр твердый', quant: '-'}, {ingr: 'сыр адыгейский', quant: '-'}, {ingr: 'зелень', quant: '-'}],
                    note: 'Для теста смешать яйца, масло, муку, соду, соль, сахар. Колбасу и сыры порезать маленьким кубиком, зелень порубить мелко, смешать с тестом. Разложить по формочкам, выпекать 25 минут.'
                },
                {
                    imgSrc: './img/dishes/snack/lepeshki-s-kartoshkoi.jpg',
                    title: 'Лепешки с начинкой',
                    ingredientsList: [{ingr: 'вода', quant: '200 мл'}, {ingr: 'масло растительное', quant: '4 ст.л.'}, {ingr: 'соль', quant: '2 ч.л.'}, {ingr: 'мука', quant: '~350 г'}, {ingr: 'картофель', quant: '1-2 шт.'}, {ingr: 'зелень', quant: 'пучок'}, {ingr: 'масло сливочное', quant: '2 ч.л.'}],
                    note: 'Замешать тесто из воды, растительного масла, соли и муки. Для начинки отварить картофель, сделать из него пюре, добавить сливочное масло и нарезанную зелень. Разделить тесто на части, раскатать каждую часть и завернуть в нее начинку. Обжарить лепешки с обеих сторон.'
                },
                {
                    imgSrc: './img/dishes/snack/domashniy-mayoanez.jpg',
                    title: '*Домашний майонез',
                    ingredientsList: [{ingr: 'яйцо', quant: '1 шт'}, {ingr: 'масло растительное', quant: '~250 мл'}, {ingr: 'соль', quant: '1/4 ч.л.'}, {ingr: 'сахар', quant: '1 ч.л.'}, {ingr: 'горчица', quant: '1 ч.л.'}, {ingr: 'уксус', quant: '2 ч.л.'}],
                    note: 'Все ингредиенты взбить миксером, постепенно добавляя масло до желаемой консистенции (чем больше масла, тем гуще майонез).'
                }
            ]
    },
    {
        categoryName: 'dessert',
        dishesList:
            [
                {
                    imgSrc: './img/dishes/dessert/pesochnoe-pechenie-s-vareniem.jpg',
                    title: 'Печенье песочное',
                    ingredientsList: [{ingr: 'масло сливочное', quant: '120 г'}, {ingr: 'желток', quant: '2 шт.'}, {ingr: 'сахар', quant: '30 г'}, {ingr: 'соль', quant: 'щепотка'}, {ingr: 'сода', quant: 'щепотка'}, {ingr: 'мука', quant: '250 г'}, {ingr: 'варенье', quant: '-'}],
                    note: 'В мягкое масло добавить сахар, соль, соду, желтки и взбить. Добавить муку. Можно раскатать большим пластом и смазать вареньем или же сделать маленькие печеньки. Выпекать в зависимости от размера печенья 10-30 минут.'
                },
                {
                    imgSrc: './img/dishes/dessert/pechenie-snikers.jpg',
                    title: 'Печенье сникерс',
                    ingredientsList: [{ingr: 'масло сливочное', quant: '170 г'}, {ingr: 'мука', quant: '1 ст.'}, {ingr: 'сахар', quant: '4 ст.л.'}, {ingr: 'сгущенка', quant: '400 г'}, {ingr: 'кокосовая стружка', quant: '-'}, {ingr: 'шоколад', quant: '1/2 плитки'}],
                    note: 'Для основы смешать 120 г масла, муку и сахар. Раскатать пластом и выпекать 15-20 минут. Для крема растопить в кастрюле 50 г масла, влить сгущенку и поварить на медленном огне 5-8 минут до загустения. Затем добавить кокосовую стружку. На основу вылить крем, поставить в холодильник на 30 минут. Шоколад растопить и полить печенье сверху. Снова охладить.'
                }
            ]
    }
]

export default dishesInfo;