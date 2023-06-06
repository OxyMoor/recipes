// импорт базы данных
import dishesInfo from "./dishes.js";

const tabBtns = Array.from(document.querySelectorAll('.tab-btn'));
const sections = Array.from(document.querySelectorAll('.dishes'));
const modal = document.querySelector('.modal');
// открыть модальное окно
const showModal = (e) => {
    renderModal(getDishCard(e.currentTarget, dishesInfo));
    modal.classList.add('active');

    document.body.style.overflowY = 'hidden';
}
// заакрыть модальное окно
const closeModal = () => {
    modal.classList.remove('active');
    modal.innerHTML = '';

    document.body.style.overflowY = 'unset';
}
// рендер страницы с карточками блюд
const renderDishes = (data) => {
    data.forEach(category => {
        const currentSection = document.querySelector(`.${category.categoryName}`);

        category.dishesList.forEach((dishItem, index) => {
            const dishCard = document.createElement('div');
            dishCard.classList.add('dish-card');
            dishCard.dataset.category = category.categoryName;
            dishCard.dataset.index = index;
            
            const dishImg = document.createElement('div');
            dishImg.classList.add('dish-img');
            dishImg.style.backgroundImage = `url(${dishItem.imgSrc})`;

            const dishHeader = document.createElement('h2');
            dishHeader.classList.add('dish-header');
            dishHeader.textContent = dishItem.title;

            const ingredients = document.createElement('ul');
            ingredients.classList.add('ingredients-list');

            dishItem.ingredientsList.forEach(el => {
                const ingredientsItem = document.createElement('li');
                ingredientsItem.classList.add('ingredients-item');
    
                const ingr = document.createElement('span');

                if (el.ingr.length >  11) {
                    ingr.textContent = el.ingr.slice(0, 12) + '...';
                } else {
                    ingr.textContent = el.ingr;
                }
    
                ingredientsItem.append(ingr);
    
                ingredients.append(ingredientsItem);
            });

            dishCard.append(dishImg);
            dishCard.append(dishHeader);
            dishCard.append(ingredients);
    
            currentSection.append(dishCard);
    
            dishCard.addEventListener('click', showModal);
        });
    });
};
// получить индекс нажатой карточки
const getDishCard = (target, data) => {
    const category = target.dataset.category;
    const index = target.dataset.index;
    let currentCategory;

    data.forEach(el => {
        if (el.categoryName === target.dataset.category) {
            currentCategory = el;
        };
    });

    return currentCategory.dishesList[index];
};
// рендер модального окна
const renderModal = (dish) => {
    const modalCard = document.createElement('div');
    modalCard.classList.add('modal-card');

    const modalHeaderWrap = document.createElement('div');
    modalHeaderWrap.classList.add('modal-header-wrap');

    const modalHeader = document.createElement('h2');
    modalHeader.classList.add('modal-header');
    modalHeader.textContent = dish.title;

    const closeBtn = document.createElement('button');
    closeBtn.classList.add('close-btn');

    const closeBtnImg = document.createElement('img');
    closeBtnImg.classList.add('close-btn-img');
    closeBtnImg.src = './img/icons/close-btn.svg';
    closeBtnImg.alt = 'icon: close';

    const modalImg = document.createElement('div');
    modalImg.classList.add('modal-img');
    modalImg.style.backgroundImage = `url(${dish.imgSrc})`;

    const ingredients = document.createElement('ul');
    ingredients.classList.add('modal-list');

    dish.ingredientsList.forEach(el => {
        const ingredientsItem = document.createElement('li');
        ingredientsItem.classList.add('modal-item');

        const ingr = document.createElement('span');
        ingr.classList.add('ingr-text');
        ingr.textContent = el.ingr;

        const quant = document.createElement('span');
        quant.classList.add('quant-text');
        quant.textContent = el.quant;

        ingredientsItem.append(ingr);
        ingredientsItem.append(quant);

        ingredients.append(ingredientsItem);
    });

    const modalNote = document.createElement('h3');
    modalNote.classList.add('modal-note');
    modalNote.textContent = 'Приготовление:';

    const modalNoteTxt = document.createElement('p');
    modalNoteTxt.classList.add('modal-note-text');
    modalNoteTxt.textContent = dish.note;

    closeBtn.append(closeBtnImg);

    modalHeaderWrap.append(modalHeader);
    modalHeaderWrap.append(closeBtn);

    modalCard.append(modalHeaderWrap);
    modalCard.append(modalImg);
    modalCard.append(ingredients);
    modalCard.append(modalNote);
    modalCard.append(modalNoteTxt);

    modal.append(modalCard);

    closeBtn.addEventListener('click', closeModal);
};

renderDishes(dishesInfo);
// переключение категорий блюд
tabBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        tabBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        e.currentTarget.classList.add('active');

        let sectionClass = btn.dataset.section;
        let activeSection = document.querySelector(`.${sectionClass}`);

        sections.forEach(section => {
            section.classList.remove('active');
        });

        activeSection.classList.add('active');
    });
});
// закрытие модального окна по кнопке "назад"
window.addEventListener('beforeunload', (e) => {
    if (modal.classList.contains('active')) {
        e.preventDefault();
        closeModal();
    }
});
// прелоадер
window.addEventListener('load', () => {
    document.body.classList.add('loaded-hiding');

    window.setTimeout(() => {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded-hiding');
    }, 500);
});
