"use strict";



const DATA = [
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m1.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "8 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f1.png",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m2.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Тетяна",
		"last name": "Мороз",
		photo: "./img/trainers/trainer-f2.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
	},
	{
		"first name": "Сергій",
		"last name": "Коваленко",
		photo: "./img/trainers/trainer-m3.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
	},
	{
		"first name": "Олена",
		"last name": "Лисенко",
		photo: "./img/trainers/trainer-f3.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
	},
	{
		"first name": "Андрій",
		"last name": "Волков",
		photo: "./img/trainers/trainer-m4.jpg",
		specialization: "Бійцівський клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
	},
	{
		"first name": "Наталія",
		"last name": "Романенко",
		photo: "./img/trainers/trainer-f4.jpg",
		specialization: "Дитячий клуб",
		category: "спеціаліст",
		experience: "3 роки",
		description:
			"Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
	},
	{
		"first name": "Віталій",
		"last name": "Козлов",
		photo: "./img/trainers/trainer-m5.jpg",
		specialization: "Тренажерний зал",
		category: "майстер",
		experience: "10 років",
		description:
			"Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
	},
	{
		"first name": "Юлія",
		"last name": "Кравченко",
		photo: "./img/trainers/trainer-f5.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "4 роки",
		description:
			"Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
	},
	{
		"first name": "Олег",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-m6.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "12 років",
		description:
			"Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
	},
	{
		"first name": "Лідія",
		"last name": "Попова",
		photo: "./img/trainers/trainer-f6.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
	},
	{
		"first name": "Роман",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m7.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
	},
	{
		"first name": "Анастасія",
		"last name": "Гончарова",
		photo: "./img/trainers/trainer-f7.jpg",
		specialization: "Басейн",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
	},
	{
		"first name": "Валентин",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-m8.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
	},
	{
		"first name": "Лариса",
		"last name": "Петренко",
		photo: "./img/trainers/trainer-f8.jpg",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "7 років",
		description:
			"Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
	},
	{
		"first name": "Олексій",
		"last name": "Петров",
		photo: "./img/trainers/trainer-m9.jpg",
		specialization: "Басейн",
		category: "майстер",
		experience: "11 років",
		description:
			"Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
	},
	{
		"first name": "Марина",
		"last name": "Іванова",
		photo: "./img/trainers/trainer-f9.jpg",
		specialization: "Тренажерний зал",
		category: "спеціаліст",
		experience: "2 роки",
		description:
			"Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
	},
	{
		"first name": "Ігор",
		"last name": "Сидоренко",
		photo: "./img/trainers/trainer-m10.jpg",
		specialization: "Дитячий клуб",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
	},
	{
		"first name": "Наталія",
		"last name": "Бондаренко",
		photo: "./img/trainers/trainer-f10.jpg",
		specialization: "Бійцівський клуб",
		category: "майстер",
		experience: "8 років",
		description:
			"Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
	},
	{
		"first name": "Андрій",
		"last name": "Семенов",
		photo: "./img/trainers/trainer-m11.jpg",
		specialization: "Тренажерний зал",
		category: "інструктор",
		experience: "1 рік",
		description:
			"Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
	},
	{
		"first name": "Софія",
		"last name": "Мельник",
		photo: "./img/trainers/trainer-f11.jpg",
		specialization: "Басейн",
		category: "спеціаліст",
		experience: "6 років",
		description:
			"Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
	},
	{
		"first name": "Дмитро",
		"last name": "Ковальчук",
		photo: "./img/trainers/trainer-m12.png",
		specialization: "Дитячий клуб",
		category: "майстер",
		experience: "10 років",
		description:
			"Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
	},
	{
		"first name": "Олена",
		"last name": "Ткаченко",
		photo: "./img/trainers/trainer-f12.jpg",
		specialization: "Бійцівський клуб",
		category: "спеціаліст",
		experience: "5 років",
		description:
			"Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
	},
];
//formData learn js
const cloneDATA = DATA.map(item => ({
	"first name": item["first name"],
	"last name": item["last name"],
	photo: item.photo,
	specialization: item.specialization,
	category: item.category,
	experience: item.experience,
	description: item.description,
}));
console.log(cloneDATA);


const trainerContainers = document.querySelector(".trainers-cards__container");
const trainerTemplateCard = document.querySelector("#trainer-card");



const renderCard = function (data) {
	
	trainerContainers.innerHTML = "";

data.forEach((element) => {

	const trainersClone = trainerTemplateCard.content.cloneNode(true); //роблю копію темплейта картки
	const trainerName = trainersClone.querySelector(".trainer__name");
	const trainerPhoto = trainersClone.querySelector(".trainer>img"); //змінюю фото і імʼя на те, що потрібно, з масиву DATA

	trainerName.innerText = element["last name"] + " " + element["first name"];
	// trainerName.classList.ad
	trainerPhoto.src = `${element.photo}`;
	trainerContainers.append(trainersClone); // вставляю готову картку
});
};

// PRELOADER ------------------------------------------------------------------------
// const pageWrapper = document.querySelector(".page-main");
// const preLoader = `<div class="lds-ring"><div></div><div></div><div></div><div></div></div>`;
// 	console.log(pageWrapper);
// 	pageWrapper.insertAdjacentHTML("afterend", preLoader);

// setTimeout(renderCard, 2000, DATA);


// Filter FUNCTION ------------------------------------------------------------------------
const applyFilters = () => {
    const direction = document.querySelector('input[name="direction"]:checked').id;
    const category = document.querySelector('input[name="category"]:checked').id;

	const direction1 = document.querySelector(`[for="${direction}"]`);
	const category1 = document.querySelector(`[for="${category}"]`);

	console.log(direction);
	console.log(direction1.innerText);

    filteredData1 = DATA.filter(trainer => {
        return (direction === 'all-direction' || trainer.specialization.toLowerCase() === direction1.innerText.toLowerCase()) && 
		(category === 'all-category' || trainer.category.toLowerCase() === category1.innerText.toLowerCase());
    });
	let filteredDataJSON = JSON.stringify(filteredData1);
	localStorage.setItem("filteredSafe", filteredDataJSON);
	localStorage.setItem("filteredSafeDirection", document.querySelector('input[name="direction"]:checked').id);

    // Повертаємо початкові дані, якщо фільтри не вибрані
    if (!direction && !category) {
        filteredData1 = [...DATA];
    }
};

const filtersForm = document.querySelector('.filters');
filtersForm.addEventListener('submit', (event) => {
    event.preventDefault();
    applyFilters();
	
    // applySorting(document.querySelector('.sorting__btn--active'));
	trainerContainers.innerHTML = "";
	setTimeout(renderCard, 10, filteredData1);
    // renderCard(filteredData1);
});


const sortingView = document.querySelector(".sorting");
const sidebarView = document.querySelector(".sidebar");

sortingView.hidden = false;
sidebarView.hidden = false;
showPreloader();



let scrollPosition;
let filteredData1 = [...DATA];

const disableScroll = () => {  //функція відключення скролу при модальному вікні
	const body = document.body;
	scrollPosition = window.scrollY;

	body.style.overflow = 'hidden';
	body.style.position = 'fixed';
	body.style.width = '100%';
	body.style.top = `-${scrollPosition}px`;
};

const enableScroll = () => {   //врубаю скрол при закритті модального вікна
	const body = document.body;

	body.style.overflow = '';
	body.style.position = '';
	body.style.width = 'auto';
	body.style.top = '';

	window.scrollTo(0, scrollPosition);
};


const showModalButton = document.querySelector(".trainers-cards__container");
const modalContainer = document.createElement("div");

// MODAL WINDOW ------------------------------------------------------------------------

showModalButton.addEventListener("click", (event) => {

	const targetButton = event.target;
	const trainerCardTarget = event.currentTarget;

	document.body.append(modalContainer);
	modalContainer.classList.add("modal-window-container");

	if (targetButton.className === "trainer__show-more") { //умова, що модальне вікно включається тільки при натисканні на кнопки
		// targetButton.style.backgroundColor = "red";

		targetButton.classList.add("active");
		const targetButtonTrainderCard = targetButton.closest(".trainer");
		targetButtonTrainderCard.classList.add("active-modal-card");

		const trainerImg = targetButtonTrainderCard.querySelector("img").src; //пошук фото активної картки в обʼєктах масиву DATA
		const getTrainerObject = DATA.find((el) => {
			if (trainerImg.includes(el.photo.slice(1))) {
				return true;
			}

		});
		console.log(getTrainerObject);

		// console.log(targetButton);
		// console.log(trainerCardTarget);

		const modalWindowTemplate = document.querySelector("#modal-template");

		const modalWindowClone = modalWindowTemplate.content.cloneNode(true); // роблю клон модального вікна

		const trainerModalName = modalWindowClone.querySelector(".modal__name"); // вставляю значення картки в клон
		trainerModalName.innerText = getTrainerObject["last name"] + " " + getTrainerObject["first name"];
		const trainerModalCategory = modalWindowClone.querySelector(".modal__point--category");
		trainerModalCategory.innerText = "Категорія: " + getTrainerObject["category"];
		const trainerModalWorkExp = modalWindowClone.querySelector(".modal__point--experience");
		trainerModalWorkExp.innerText = "Досвід: " + getTrainerObject["experience"];
		const trainerModalSpecialization = modalWindowClone.querySelector(".modal__point--specialization");
		trainerModalSpecialization.innerText = "Напрям тренера: " + getTrainerObject["specialization"];
		const trainerModalDescription = modalWindowClone.querySelector(".modal__text");
		trainerModalDescription.innerText = getTrainerObject["description"];
		const trainerModalImg = modalWindowClone.querySelector(".modal__body>img");
		trainerModalImg.src = getTrainerObject.photo;




		modalContainer.append(modalWindowClone);
		disableScroll();

		const modal = modalContainer.querySelector(".modal");
		const modalBody = modalContainer.querySelector(".modal__body");
		console.log(modal);

		if (modalContainer.className === "modal-window-container") {
			const closeModalButton = document.querySelector(".modal__close");
			const generalClose = document.querySelector(".modal");
			// const closeModalGeneralArea = document.querySelector(".page-wrapper");

			closeModalButton.addEventListener("click", (event) => {
				// const closeTargetButton = event.target;
				modalContainer.innerHTML = ""; //прибираю дітей створеного клона модального вікна
				modalContainer.remove(); //видаляю вікно
				targetButton.classList.remove("active"); //видаляю тег активної кнопки
				enableScroll();
				targetButtonTrainderCard.classList.remove("active-modal-card");
			});

			generalClose.addEventListener("click", function (event) {
				const generalModalClose = event.target;
				const generalCloseCard = generalModalClose.closest(".modal__body");
				if (generalCloseCard) {
					return false;
				};
				// if (event.target !== modalBody && event.target !== document.querySelector(".modal__description") && event.target !== document.querySelector(".modal__body>img") && event.currentTarget === modal) {
				// 	console.log(event.currentTarget);
				// 	console.log(event.target);

				modalContainer.innerHTML = ""; //прибираю дітей створеного клона модального вікна
				modalContainer.remove(); //видаляю вікно
				targetButton.classList.remove("active"); //видаляю тег активної кнопки
				enableScroll();
				targetButtonTrainderCard.classList.remove("active-modal-card");
				// };
			}, true);
		};

	};

});

// SORTING ------------------------------------------------------------------------

const sortingSection = document.querySelector(".sorting");
const sortButton = document.querySelectorAll(".sorting__btn");
console.log(sortButton);

let idAttribute = 3;
sortButton.forEach((sortElement) => {
	sortElement.setAttribute(`data-sort-button-id`, `${sortButton.length - idAttribute}`);
	console.log(sortElement);
	idAttribute = idAttribute - 1;
});

const sortData = (dataAttr, data) => {
	const localData = [...data]; // робимо копію масиву, щоб не міняти оригінал

	switch (dataAttr) {
		case "0": {
			break;
		}

		case "1": {
			localData.sort((a, b) => a["last name"].localeCompare(b["last name"]));
			break;
		}

		case "2": {
			localData.sort((a, b) => parseInt(b.experience) - parseInt(a.experience));
			break;
		}
		
	}
	return localData;
};

sortingSection.addEventListener("click", (event) => {
	
	sortButton.forEach((sortElem) => {
		sortElem.classList.remove("sorting__btn--active");
	});

	const sortTargetButton = event.target;
	
	console.log(sortTargetButton);
	const sortTargetButtonTrainderCard = sortTargetButton.closest(".sorting__btn");
	sortTargetButtonTrainderCard.classList.add("sorting__btn--active");
	console.log(sortTargetButtonTrainderCard.dataset.sortButtonId);
	// обєкт, тип даних, sortButton key: value:id; обєкт-строка і назад, витягнути дата-атрибут. переганяти в обєкт . с фільтрамі теж саме, до строки,її в обєкт, переганяєте,і назад в обєкт, перевіряю локалСторейдж, дивлюся баттон айді навішую клас активу заново
	localStorage.setItem("sortedSafe", sortTargetButtonTrainderCard.dataset.sortButtonId);
	// const filteredTrainers = filterDataSpecialization(filterItem.value, DATA);
	const sortedData = sortData(sortTargetButtonTrainderCard.dataset.sortButtonId, JSON.parse(localStorage.getItem("filteredSafe")));
	renderCard(sortedData);
});

document.addEventListener("DOMContentLoaded", () => { //функція для отримання значення зі сховища про тему цього сайту, підгрузить темну або світлу, відповідно до того, яку юзер вибрав раніше
    function saveFilters () {
		// const savedSortingButton = document.querySelector(".sorting__btn");

		localStorage.getItem("filteredSafe");
		console.log(localStorage.getItem("filteredSafe"));
		let filteredDataJSONParsed = JSON.parse(localStorage.getItem("filteredSafe"));
		localStorage.getItem("filteredSafeDirection");
		console.log(filteredDataJSONParsed);
		console.log(filteredDataJSONParsed);


		sortButton.forEach((sortElem) => {
			sortElem.classList.remove("sorting__btn--active");
			if (sortElem.dataset.sortButtonId === localStorage.getItem("sortedSafe")) {
				sortElem.classList.add("sorting__btn--active");
			};
		});

		const sortedDataSaved = sortData(localStorage.getItem("sortedSafe"), filteredDataJSONParsed);
		renderCard(sortedDataSaved);
    //renderCard(localStorage.getItem("sortedSafe"));
    };
    saveFilters();
});



// PRELOADER ------------------------------------------------------------------------
function showPreloader() {
    window.addEventListener('load', () => {
        const header = document.querySelector(".page-header");
        const preloaderHTML = '<div id="preloader"><img src="./img/preloader2.gif" alt="Loading..."></div>';
        header.insertAdjacentHTML('afterend', preloaderHTML);
        const preloaderElement = document.querySelector("#preloader");

        setTimeout(() => {
            preloaderElement.style.display = 'none';
        }, 2000);
    });
}


// let json = JSON.stringify(student);
// numbers = JSON.parse(numbers);









/* const filteringSection = document.querySelector(".sidebar__filters");
const filterButton = document.querySelectorAll(".filters__submit");
const filterItem = document.querySelector(".filters__input");
const fieldForm = document.querySelector(".sidebar__filters");
const radioButtonInput = document.querySelectorAll(".filters__input");
const firstFilter = document.querySelector(".filters__fieldset");
console.log(radioButtonInput);

firstFilter.classList.add("first_filter");





/* const filterDataCategory = (filterCategory, data) => {
	let filteredData;

	switch (filterCategory) {
		case "all": {
			filteredData = data.filter((elemFilter) => true);
			break;
		}

		case "master": {
			filteredData = data.filter((elemFilter) => elemFilter.category === "МАЙСТЕР");
			break;
		}

		case "specialist": {
			filteredData = data.filter((elemFilter) => elemFilter.category === "СПЕЦІАЛІСТ");
			break;
		}

		case "instructor": {
			filteredData = data.filter((elemFilter) => elemFilter.category === "ІНСТРУКТОР");
			break;
		}
	}

	return filteredData;
}; */



/* fieldForm.addEventListener("submit", (event) => {
	const filterTargetButton = event.target;
	
	if (filterTargetButton.value === "ПОКАЗАТИ") {
		event.preventDefault();
		let filteredTrainers = filterDataSpecialization(filterItem.value, DATA);
		console.log(filterItem.value);
		console.log(filteredTrainers);
	}

	// const filteredData1 = filterData(filterItem.value, DATA);
	// renderCard(sortedData);
}); */








// sortItem.addEventListener("change", (event) => {
// 	const filteredData = filterData(filterItem.value, studentData);
// 	const sortedData = sortData(sortItem.value, filteredData);
  
// 	renderCard(sortedData);
//   });
  
//   filterItem.addEventListener("change", (event) => {
// 	const filteredData = filterData(filterItem.value, studentData);
// 	const sortedData = sortData(sortItem.value, filteredData);
	
// 	renderCard(sortedData);
//   });


/* const sortData = (value, data) => {
	switch (value) {
	  case "nameUp": {
		data.sort((a, b) => a.name.localeCompare(b.name));
		break;
	  }

	  case "nameDown": {
		data.sort((a, b) => b.name.localeCompare(a.name));
		break;
	  }

	  case "ageUp": {
		data.sort((a, b) => a.age - b.age);
		break;
	  }

	  case "ageDown": {
		data.sort((a, b) => b.age - a.age);
		break;
	  }
	}

	return data;
  }


  // FILTER FN -------------------------------------------------------------------------------


  // LISTENERS -------------------------------------------------------------------------------
 

































// let counter = 0;
// let template = document.getElementById('source');
// let output = document.getElementById('output');

// function moreFields() {
//   counter++;

//   let div = document.createElement('div');

//   div.appendChild(
//     template.content.cloneNode(true)
//   );

//   div.innerHTML = div.innerHTML.replaceAll('{i}', counter);

//   output.append(div);
// }

// for (i = 0; i < 3; i++) {
//   moreFields();
// }



/* <script>
  elem.onclick = function() {
	elem.attachShadow({mode: 'open'});

	elem.shadowRoot.append(tmpl.content.cloneNode(true)); // (*)

	elem.shadowRoot.getElementById('message').innerHTML = "Привет из теней!";
  };
</script>
 */


/* 
<script>
  let elem = document.createElement('div');

  // Клонируем содержимое шаблона для того, чтобы переиспользовать его несколько раз
  elem.append(tmpl.content.cloneNode(true));

  document.body.append(elem);
  // Сейчас скрипт из <template> выполнится
</script> */

/* let user = {};

// присваивание значения свойству
user["likes birds"] = true;

// получение значения свойства
alert(user["likes birds"]); // true

// удаление свойства
delete user["likes birds"]; */