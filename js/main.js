document.addEventListener('DOMContentLoaded', function () {
    const dropdowns = document.querySelectorAll('.dropdown');

    // Loop through all dropdown elements
    dropdowns.forEach(dropdown => {
        const select = dropdown.querySelector('.select');
        const caret = dropdown.querySelector('.caret');
        const menu = dropdown.querySelector('.menu');
        const options = dropdown.querySelectorAll('.menu li');
        const selected = dropdown.querySelector('.selected');

        // Function to toggle the dropdown menu
        const toggleMenu = () => {
            select.classList.toggle('select-clicked');
            caret.classList.toggle('caret-rotate');
            menu.classList.toggle('menu-open');
        };

        // Add click event listener to the entire select element
        select.addEventListener('click', toggleMenu);

        // Add click event listener to each option
        options.forEach(option => {
            option.addEventListener('click', () => {
             if(selected.classList.contains('nav__selected')){
                selected.innerText = selected.innerText;
             }else{
                selected.innerText = option.innerText;
             }
             select.classList.add("filter-select--checked")
                select.classList.remove('select-clicked');
                caret.classList.remove('caret-rotate');
                menu.classList.remove('menu-open');
                options.forEach(option => {
                    option.classList.remove('active');
                });
                option.classList.add('active');
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search');
    const searchBtn = document.getElementById('searchBtn');
    const searchImg = document.getElementById('searchImg');
    let currentIndex = -1;
    let searchResults = [];
    let removeHighlightTimeout;

    function removeHighlights() {
        const highlightedElements = document.querySelectorAll('.highlight');
        highlightedElements.forEach(el => {
            el.classList.remove('highlight');
        });
    }

    function highlightText(node, searchText) {
        const regex = new RegExp(`(${searchText})`, 'gi');
        node.innerHTML = node.innerHTML.replace(regex, "<span class='highlight'>$1</span>");
    }

    function searchAndHighlight() {
        const searchText = searchInput.value.trim();
        if (!searchText) return;

        removeHighlights();
        clearTimeout(removeHighlightTimeout);
        searchResults = [];
        currentIndex = -1;

        const elements = document.querySelectorAll('body *:not(script):not(style):not(noscript)');
        elements.forEach(el => {
            if (el.children.length === 0 && el.textContent.toLowerCase().includes(searchText.toLowerCase())) {
                highlightText(el, searchText);
                searchResults.push(el);
            }
        });

        if (searchResults.length > 0) {
            currentIndex = 0;
            searchResults[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Удаление выделения через 7 секунд
        removeHighlightTimeout = setTimeout(removeHighlights, 7000);
    }

    searchInput.addEventListener('keydown', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            searchAndHighlight();
        }
    });

    searchBtn.addEventListener('click', function(event) {
        event.preventDefault();
        searchAndHighlight();
    });

    searchImg.addEventListener('click', function(event) {
        event.preventDefault();
        searchAndHighlight();
    });
});

    // Add click event listener to each option


// document.addEventListener('DOMContentLoaded', function () {
//    // Toggle burger__content--active class on burger__img click
//    const burgerImg = document.querySelector('.burger__img');
//    const burgerContent = document.querySelector('.burger__content');
//    const burgerCancel = document.querySelector('.burger__cancel');

//    burgerImg.addEventListener('click', function () {
//        burgerContent.classList.toggle('burger__content--active');
//    });

//    // Remove burger__content--active class on burger__cancel click
//    burgerCancel.addEventListener('click', function () {
//        burgerContent.classList.remove('burger__content--active');
//    });

//    // Toggle burger__links-box--active and burger__item-img--active class on burger__link-item--const click
//    const linkItemConst = document.querySelector('.burger__link-item--const');
//    const linksBox = document.querySelector('.burger__links-box');
//    const itemImg = document.querySelector('.burger__item-img');

//    linkItemConst.addEventListener('click', function () {
//        linksBox.classList.toggle('burger__links-box--active');
//        itemImg.classList.toggle('burger__item-img--active');
//    });

//    // Toggle burger__dropdown classes on burger__dropdown-btn click
//    const dropdownBtn = document.querySelector('.burger__dropdown-btn');
//    const dropdownIcon = document.querySelector('.burger__dropdown-icon');
//    const dropdownArrow = document.querySelector('.burger__arrow');
//    const dropdownList = document.querySelector('.burger__dropdown-list');
//    const dropdownText = document.querySelector('.burger__dropdown-text');

//    dropdownBtn.addEventListener('click', function () {
//        dropdownIcon.classList.toggle('burger__item-img--active');
//        dropdownArrow.classList.toggle('burger__arrow--active');
//        dropdownList.classList.toggle('burger__dropdown-list--active');
//    });

//    // Change burger__dropdown-text on burger__dropdown-item click
//    const dropdownItems = document.querySelectorAll('.burger__dropdown-item');

//    dropdownItems.forEach(function (item) {
//        item.addEventListener('click', function () {
//            const currentText = dropdownText.textContent;
//            dropdownText.textContent = item.textContent;
//            item.textContent = currentText;
//        });
//    });
// });



//slider

var swiper = new Swiper(".mySwiper", {
    loop:true,
    autoplay: {
        delay: 2500,
      },
});

// Функция для обновления классов в зависимости от ширины экрана
function updateClasses() {
    const firstSwiper = document.querySelector('.mySwiper--first');
    const secondSwiper = document.querySelector('.mySwiper--second');
  
    if (window.innerWidth <= 1100) {
      firstSwiper.classList.remove('none');
      secondSwiper.classList.add('none');
    } else {
      firstSwiper.classList.add('none');
      secondSwiper.classList.remove('none');
    }
  }
  
  // Добавление обработчика события при загрузке страницы
  window.addEventListener('load', updateClasses);
  
  // Добавление обработчика события при изменении размера окна
  window.addEventListener('resize', updateClasses);
  

  //tel mask
  mask('[data-tel-input]');
  const phoneInputs = document.querySelectorAll('[data-tel-input]');
phoneInputs.forEach((input)=>{
	input.addEventListener('input', ()=>{
		if (input.value == '+') input.value = '';
	})
	input.addEventListener('blur', ()=>{
		if (input.value == '+') input.value = '';
	})
});


//mail
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    var formData = new FormData(this);

    fetch('send_mail.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.text())
    .then(data => {
        alert('Сообщение отправлено успешно!');
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Произошла ошибка при отправке сообщения.');
    });
});