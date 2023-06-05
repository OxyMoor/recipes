const dishesInfo = [
    {
        categoryName: 'breakfast',
        dishesList: 
            [
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Сырники',
                    ingredientsList: [{ingr: 'творог 5%', quant: '400 г'}, {ingr: 'желток', quant: '2 шт.'}, {ingr: 'мука', quant: '2-3 ст.л.'}, {ingr: 'сахар', quant: 'по вкусу'}],
                    note: 'Тесто скатать в колбаску, обвалять в муке, разделить на сырники, каждый обвалять в муке. Жарить с обеих сторон.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Овсяноблин',
                    ingredientsList: [{ingr: 'овсянка', quant: '3 ст.л.'}, {ingr: 'яйцо', quant: '1 шт.'}, {ingr: 'молоко', quant: 'на глаз'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Овсянку залить молоком, дать набухнуть. Добавить яйцо, соль. Жарить на медленном огне с обеих сторон. Сверху полить йогуртом, добавить банан, семечки.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Вареники с творогом',
                    ingredientsList: [{ingr: 'вареники', quant: '-'}],
                    note: 'Поместить в кипящую подсоленную воду, варить 10 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Овсянка с фруктами и орехами',
                    ingredientsList: [{ingr: 'овсянка', quant: '3 ст.л.'}, {ingr: 'молоко', quant: 'на глаз'}, {ingr: 'соль', quant: 'по вкусу'}, {ingr: 'фрукты', quant: 'по вкусу'}, {ingr: 'орехи, семмечки', quant: 'по вкусу'}],
                    note: 'Овсянку залить молоком, добавить соль, фрукты, орешки. Поместить в микроволновку на 50 сек.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
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
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Картофельные дольки',
                    ingredientsList: [{ingr: 'картофель', quant: '3шт'}, {ingr: 'масло растителное', quant: '1 ст.л.'}, {ingr: 'соль', quant: 'по вкусу'}, {ingr: 'специи', quant: 'по вкусу'}],
                    note: 'Картофель порезать на дольки, отварить в течение 3-5 минут. Добавить специи, соль, масло. Выпекать на пергаменте около 20 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Макароны',
                    ingredientsList: [{ingr: 'Макароны', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Без комментариев)'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Тушеные овощи',
                    ingredientsList: [{ingr: 'картофельь', quant: '-'}, {ingr: 'капуста', quant: '-'}, {ingr: 'морковь', quant: '-'}, {ingr: 'лук', quant: '-'}, {ingr: 'любые другие овощи', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Слегка обжарить, затем тушить с водой 20-30 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Гречка',
                    ingredientsList: [{ingr: 'гречка', quant: '1 часть'}, {ingr: 'вода', quant: '1.5 части'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'После закипания варить под крышкой 15 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
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
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Макароны с фаршем/курицей в соусе',
                    ingredientsList: [{ingr: 'макароны', quant: '1/2 пачки'}, {ingr: 'фарш/курица', quant: '1 филе'}, {ingr: 'сметана', quant: '2 ст.л.'}, {ingr: 'соус', quant: '1 ст.л.'}, {ingr: 'мука', quant: '1 ст.л.'}, {ingr: 'вода', quant: '1/2 стакана'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Курицу/фарш слегка обжарить, добавить муку и продолжать обжаривать 1 минуту. Смешать воду, соус и сметану, добавить в сковороду. Тушить 15 минут. Макароны сварить и соединить с мясом.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Фунчоза с курицей и овощами',
                    ingredientsList: [{ingr: 'фунчоза', quant: '1/2 пачки'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'перец болгарский', quant: '1 шт.'}, {ingr: 'курица', quant: '1 филе'}, {ingr: 'чеснок', quant: '1 зубчик'}, {ingr: 'соевый соус', quant: '2 ст.л.'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Овощи и курицу нарезать длинными узкими полосками. Обжарить 15 минут с чесноком и соевым соусом. Фунчозу залить кипятком, заваривать 4 минуты. Соединить фунчозу с мысом и овощами.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Картошка тушеная с курицей',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'курица', quant: '1 филе'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'мука', quant: '1 ст.л.'}, {ingr: 'вода', quant: '1 стакан'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Обжарить курицу несколько минут. Добавить овощи, еще немного обжарить. Добавить муку, перемешать. Добавить воду и тушить 30 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Овощи тушеные с курицей',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'капуста', quant: '1/2 кочана'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'любые другие овощи', quant: '-'}, {ingr: 'вода', quant: '1 стакан'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Обжарить курицу несколько минут. Добавить овощи, еще немного обжарить. Добавить воду и тушить 30 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Плов',
                    ingredientsList: [{ingr: 'рис', quant: '1 часть'}, {ingr: 'вода', quant: '2 части'}, {ingr: 'курица', quant: '1 филе'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'соль, специи', quant: 'по вкусу'}],
                    note: 'Слегка обжарить курицу и овощи, добавить рис и воду. Готовить под крышкой 20 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Гречка по-купечески',
                    ingredientsList: [{ingr: 'гречка', quant: '1 часть'}, {ingr: 'вода', quant: '1.5 части'}, {ingr: 'курица', quant: '1 филе'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'соль, специи', quant: 'по вкусу'}],
                    note: 'Слегка обжарить курицу и овощи, добавить гречку и воду. Готовить под крышкой 15 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Овощная запеканка с курицей',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'перец болгарский', quant: '1 шт.'}, {ingr: 'картофель', quant: '2-3 шт.'}, {ingr: 'сыр', quant: '-'}, {ingr: 'майонез', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'В блюдо для запекания выложить все слоями (слои переммазать майонезом). Сверху посыпать тертым сыром. Выпекать около 1 часа, до готовности картошки.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Вареники с картошкой',
                    ingredientsList: [{ingr: 'Вареники с картошкой', quant: '-'}],
                    note: 'Обжарить на медленном огне с обеих сторон до образования корочки, затем потушить с водой.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Пельмени в соусе',
                    ingredientsList: [{ingr: 'пельмени', quant: '1 упаковка'}, {ingr: 'сметана', quant: '2 ст.л.'}, {ingr: 'соус', quant: '1 ст.л.'}, {ingr: 'вода', quant: '1/2 стакана'}, {ingr: 'сыр', quant: '-'}, {ingr: 'зелень', quant: 'по вкусу'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Обжарить пельмени с обеих сторон. Смешать воду, сметану, соус и влить к пельменям. Тушить около 10 минут. К концу посыпать тертым сыром и зеленью.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Щи',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'капуста', quant: '1/4 кочана'}, {ingr: 'горошек', quant: '3 ст.л.'}, {ingr: 'курица', quant: '2 бедра/1 филе'}, {ingr: 'соль', quant: '1 ст.л. (на нашу кастрюлю)'}],
                    note: 'Приготовить зажарку из лука и моркови. После закипания курицы с картошкой и снятия пенки добавить горошек и капусту. Варить 30 минут. Добавить зажарку.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Борщ>',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'капуста', quant: '1/4 кочана'}, {ingr: 'свекла вареная', quant: '1 шт.'}, {ingr: 'горошек', quant: '3 ст.л.'}, {ingr: 'курица', quant: '2 бедра/1 филе'}, {ingr: 'соль', quant: '1 ст.л. (на нашу кастрюлю)'}],
                    note: 'Приготовить зажарку из лука и моркови. После закипания курицы с картошкой и снятия пенки добавить горошек, свеклу и капусту. Варить 30 минут. Добавить зажарку.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Суп с плавленым сырком',
                    ingredientsList: [{ingr: 'картофель', quant: '3 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'горошек', quant: '3 ст.л.'}, {ingr: 'плавленый сырок', quant: '1/2 упаковки'}, {ingr: 'вермишель', quant: 'жменька'}, {ingr: 'курица', quant: '2 бедра/1 филе'}, {ingr: 'соль', quant: '1 ст.л. (на нашу кастрюлю)'}],
                    note: 'Приготовить зажарку из лука и моркови. После закипания курицы с картошкой и снятия пенки добавить горошек. Варить 30 минут. За 5 минут до готовности добавить вермишель и плавленный сырок. Добавить зажарку.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Луковый суп',
                    ingredientsList: [{ingr: 'лук', quant: '2 шт.'}, {ingr: 'вермишель', quant: '1-2 жменьки'}, {ingr: 'колбаса вареная', quant: '-'}, {ingr: 'плавленый сырок', quant: '1/2 упакоовки'}, {ingr: 'батон для сухариков', quant: '-'}, {ingr: 'соль', quant: '1 ст.л. (на нашу кастрюлю)'}, {ingr: 'сахар', quant: '1 ст.л.'}],
                    note: 'Лук нарезать полукольцами, обжарить до золотистого цвета с сахаром. Колбасу нарезать кубиками. Вермишель варить около 5 минут с колбасой, луком и плавленым сырком. Из батона сделать сухарики или гренки.'
                }
            ]
    },
    {
        categoryName: 'salad',
        dishesList:
            [
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Курица и фасоль',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'фасоль консервированная', quant: '1 банка'}, {ingr: 'сыр', quant: '-'}, {ingr: 'морковь по-корейски', quant: '1/2 упаковки'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Сыр натереть. Курицу отварить, порезать и смешать с остальными ингредиентами. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Курица и чернослив',
                    ingredientsList: [{ingr: 'Курица', quant: '1 филе'}, {ingr: 'яйцо', quant: '1-2 шт.'}, {ingr: 'огурец свежий', quant: '1 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'лук', quant: '1 шт.'}, {ingr: 'чернослив', quant: 'жменька'}, {ingr: 'грецкий орех', quant: '2-3 шт.'}, {ingr: 'укроп', quant: '-'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Курицу и яйца отварить, морковь с луком потушить. Нарезать и смешать ингредиенты. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Винегрет',
                    ingredientsList: [{ingr: 'картофель', quant: '1-2 шт.'}, {ingr: 'свекла вареная', quant: '2 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'огурец соленый', quant: '1-2 шт.'}, {ingr: 'горошек консервированный', quant: '1 банка'}, {ingr: 'лук', quant: '1/2 шт.'}, {ingr: 'масло растительное', quant: '2 ст.л.'}],
                    note: 'Отварить картофель и морковь. Нарезать и смешать ингредиенты. Заправить растительным маслом.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Оливье',
                    ingredientsList: [{ingr: 'картофель', quant: '2-3 шт.'}, {ingr: 'морковь', quant: '1 шт.'}, {ingr: 'яйцо', quant: '1-2 шт.'}, {ingr: 'горошек консервированный', quant: '1 банка'}, , {ingr: 'колбаса вареная/отварная курица', quant: '1 филе'}, , {ingr: 'лук', quant: '1/2 шт.'}, , {ingr: 'майонез', quant: '-'}],
                    note: 'Отварить картофель, морковь, яйцо. Нарезать и смешать ингредиенты. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Крабовый салат без риса',
                    ingredientsList: [{ingr: 'крабовые палочки', quant: '1 упаковка'}, {ingr: 'огурец свежий', quant: '1-2 шт.'}, {ingr: 'кукуруза консервированная', quant: '1 банка'}, {ingr: 'капуста пекинская', quant: '1/4 кочана'}, {ingr: 'яйцо', quant: '1-2 шт.'}, {ingr: 'лук', quant: '1/2 шт.'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Яйцо отварить. Нарезать и смешать ингредиенты. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Курица и капуста',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'капуста', quant: '1/4 кочана'}, {ingr: 'горошек консервированный', quant: '1 банка'}, {ingr: 'сыр', quant: '-'}, {ingr: 'майонез', quant: '-'}],
                    note: 'Курицу отварить, капусту нарезать, сыр натереть. Смешать ингредиенты. Заправить майонезом.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Овощной салат',
                    ingredientsList: [{ingr: 'любые свежие овощи', quant: 'сколько захочется'}, {ingr: 'зелень', quant: '-'}, {ingr: 'лук', quant: '-'}],
                    note: 'Нарезать салат. Заправка - майонез/сметана/масло/йогурт.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Свекла с чесноком и орехами',
                    ingredientsList: [{ingr: 'свекла вареная', quant: '2 шт.'}, {ingr: 'чеснок', quant: '1 зубчик'}, {ingr: 'грецкий орех', quant: '1-2 шт.'}, {ingr: 'майонез', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Свеклу и чеснок натереть. Орех мелко нарезать. Посолить, заправить майонезом.'
                },
            ]
    },
    {
        categoryName: 'protein',
        dishesList:
            [
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Курица тушеная в соусе',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'сметана', quant: '2 ст.л.'}, {ingr: 'соус', quant: '1 ст.л.'}, {ingr: 'мука', quant: '1 ст.л.'}, {ingr: 'вода', quant: '1/2 стакана'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Курицу слегка обжарить, добавить муку и продолжать обжаривать 1 минуту. Смешать воду, соус и сметану, добавить в сковороду. Тушить 15 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Курица жареная в листах магги',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'листы для жарки', quant: '1 упаковка'}],
                    note: 'Филе порезать на плоские стейки, жарить в листах по инструкции.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Рубленные котлетки',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'яйцо', quant: '1 шт.'}, {ingr: 'лук', quant: '1/2 шт.'}, {ingr: 'мука', quant: '2 ст.л.'}, {ingr: 'соль, специи', quant: 'по вкусу'}],
                    note: 'Курицу и лук по возможности мелко порезать, добавить яйцо и муку, посолить. Котлетки выкладывать на сковороду ложкой, обжаривать с каждой стороны по 3-5 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Стрипсы',
                    ingredientsList: [{ingr: 'курица', quant: '1 филе'}, {ingr: 'яйцо', quant: '1 шт.'}, {ingr: 'мука', quant: '-'}, {ingr: 'чипсы без вкуса', quant: 'большая упаковкка'}, {ingr: 'вода', quant: '1/2 ст.'}, {ingr: 'уксус', quant: '1 ст.л.'}, {ingr: 'соевый соус', quant: '1 ст.л.'}, {ingr: 'сахар', quant: '1 ст.л.'}, {ingr: 'соль, паприка', quant: 'по вкусу'}],
                    note: 'Курицу нарезать полосками. Смешать воду, уксус, соевый соус, сахар, соль и специи, замариновать курицу в этой смеси. Куриные кусочки обвалять в муке, затем обмакнуть в яйцо, затем обвалять в крошке из чипсов. Выпекать на пергаменте около 20 минут.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Омлет с помидорами и сыром',
                    ingredientsList: [{ingr: 'яйца', quant: '2-3 шт.'}, {ingr: 'молоко', quant: '-'}, {ingr: 'сыр', quant: '-'}, {ingr: 'помидоры', quant: '1-2 шт.'}, {ingr: 'зелень', quant: '-'}, {ingr: 'соль', quant: 'по вкусу'}],
                    note: 'Помидоры нарезать кубиком, слегка обжарить на сковороде. Взбить яйца с небольшим количеством молока, посолить. Вылить смесь к помидорам. На большом огне помешивать, пока яйцо не схватится. Затем уменьшить огонь, посыпать омлет тертым сыром, готовить под крышкой несколько минут. Посыпать зеленью.'
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
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
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Тосты с авокадо и красной рыбой',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Тосты с творожныым сыром и авокадо',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Тосты с творожным сыром и вялеными томатами',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Тосты с арахисовой пастой и бананом',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Бутерброды со шпротами',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Сырный омлет в лаваше',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Плюшки из слоеного теста',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Пицца',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Хачапури',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Помидоры с сыром и чесноком',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Рулет из лаваша',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Закусочные кексы',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                },
                {
                    imgSrc: './img/dishes/breakfast/test-dish.jpg',
                    title: 'Лепешки с начинкой',
                    ingredientsList: [{ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}, {ingr: '', quant: ''}],
                    note: ''
                }
            ]
    }
]

export default dishesInfo;