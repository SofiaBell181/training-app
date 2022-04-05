const btnOne = document.querySelector('#btnOne');
const btnTwo = document.querySelector('#btnTwo');
const btnThree = document.querySelector('#btnThree');
const btnFour = document.querySelector('#btnFour');
const par = document.querySelector('h3');
const mainPar = document.querySelector('h1');
const imageOne = document.querySelector('#one');
const imageTwo = document.querySelector('#two');
const imageThree = document.querySelector('#three');
const imageFour = document.querySelector('#four');
const myVideo = document.querySelector('#myVideo');
const containeDescription = document.querySelector('#container_description');
const description = document.querySelector('#description');
const descriptionTwo = document.querySelector('#descriptionTwo');
const containerVideo = document.querySelector('#container_video');

btnOne.addEventListener('click', selecteProgram);

function selecteProgram() {
    par.textContent = 'Прислушайтесь к себе, пообщайтесь с тренерами и определите важнейшие задачи, которых вы хотите добиться.';
    par.setAttribute('class', 'parStyle');
    imageOne.setAttribute('src', 'https://images.unsplash.com/photo-1627483298235-f3bac2567c1c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    imageOne.setAttribute('class', 'imgStyle');
    imageTwo.style.display = 'block';
    imageThree.style.display = 'block';
    imageFour.style.display = 'block';
    btnOne.textContent = 'Силовые тренировки';
    btnTwo.style.display = 'block';
    btnThree.style.display = 'block';
    btnFour.style.display = 'block';
    btnOne.addEventListener('click', strengthTraining);
    btnTwo.addEventListener('click', functionalTraining);
    btnThree.addEventListener('click', bodyMind);
    btnFour.addEventListener('click', dance);
    gsap.from('#container_par', 1.5, {
        opacity: 0,
        x: 50,
        delay: .7
    })
}

function strengthTraining() {
    par.textContent = 'Силовые тренировки';
    par.setAttribute('class', 'parStyleTwo');
    btnOne.textContent = 'UPPER BODY';
    btnTwo.textContent = 'LOWER BODY';
    btnThree.textContent = 'BARRE SCULPT';
    btnFour.textContent = 'ABS-STRETCHING';
    imageOne.setAttribute('src', 'https://images.pexels.com/photos/3768690/pexels-photo-3768690.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');
    imageTwo.setAttribute('src', 'https://images.unsplash.com/photo-1567598508481-65985588e295?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80')
    imageThree.setAttribute('src', 'barre.png');
    imageFour.setAttribute('src', 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    btnOne.addEventListener ('click', upperBody);
    btnTwo.addEventListener ('click', lowerBody);
    btnThree.addEventListener ('click', barre);
    btnFour.addEventListener ('click', abs);
}

function upperBody() {
    mainPar.textContent = 'UPPER BODY';
    par.textContent = 'Онлайн-тренировка';
    containeDescription.style.display = 'block';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/ESkI_WR1qqc');
    containerVideo.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function lowerBody() {
    mainPar.textContent = 'LOWER BODY';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/ZURzTz4irJQ');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Глубокая прокачка ног, ягодиц, спины и пресса. Главный фокус — развитие координации, равновесия и баланса.<br> Цель тренировки - прийти в форму, сбросить лишний вес, округлить ягодицы, избавиться от «ушек» на бёдрах, укрепить спину и проработать мышцы пресса.'
    descriptionTwo.textContent = 'С собственным весом и простой экипировкой: вместо гантелей можно взять бутылочки с водой, вместо бодибара — хоть простую швабру.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function barre() {
    mainPar.textContent = 'BARRE SCULPT';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/KHAUSLob0cA');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Смесь балета и фитнеса. Интенсивно работает всё тело. Особенно — ягодицы, ноги и руки.<br> Цель тренировки - Быстро прийти в форму, сбросить лишний вес, укрепить мышечный каркас, проработать глубокие мышцы, начать двигаться изящнее и увереннее.'
    descriptionTwo.textContent = 'С собственным весом и простой экипировкой: вместо гантелей можно взять бутылочки с водой, вместо слайдеров и фитнес-мячей — обычные подушки.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function abs() {
    mainPar.textContent = 'ABS-STRETCHING';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/aIt-vTovNuA');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Это класс, состоящий из двух частей: основная часть направлена на проработку мышц спины и брюшного пресса, вторая часть - расслабление, увеличение эластичности мышц, подвижности суставов. Низкая и средняя интенсивность, для всех уровней подготовленности.'
    descriptionTwo.textContent = 'С собственным весом и простой экипировкой: вместо гантелей можно взять бутылочки с водой.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function functionalTraining() {
    par.textContent = 'Функциональные тренировки';
    par.setAttribute('class', 'parStyleTwo');
    btnOne.textContent = 'PILATES';
    btnTwo.textContent = 'FITBOXING';
    btnThree.textContent = 'HIIT';
    btnFour.textContent = 'GRIT CARDIO';
    imageOne.setAttribute('src', 'https://images.pexels.com/photos/6454196/pexels-photo-6454196.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    imageTwo.setAttribute('src', 'https://images.pexels.com/photos/7777269/pexels-photo-7777269.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    imageThree.setAttribute('src', 'https://images.unsplash.com/photo-1627483298606-cf54c61779a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    imageFour.setAttribute('src', 'jump.jpg');
    btnOne.addEventListener ('click', pilates);
    btnTwo.addEventListener ('click', fitboxing);
    btnThree.addEventListener ('click', hiit);
    btnFour.addEventListener ('click', cardio);
    gsap.from('#container_par', 1.5, {
        opacity: 0,
        x: 50,
        delay: .7
    })
}

function pilates() {
    mainPar.textContent = 'PILATES';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/K56Z12XNQ5c');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Полноценная функциональная тренировка для развития силы и баланса с акцентом на удержание мышц спины и пресса.<br> Цель тренировки - укрепление глубоких и поверхностных мышц всего тела, улучшение осанки, эластичности мышц и как следствие визуальное вытяжение и удлинение мышц. Пилатес помогает создать сильный и красивый пресс, подтянутые ноги, упругие ягодицы и правильную осанку. '
    descriptionTwo.textContent = 'С собственным весом и небольшими утяжелителями. Подойдут и гантели, и просто бутылки с водой. Все упражнения делаем вдумчиво, не торопясь.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function fitboxing() {
    mainPar.textContent = 'FITBOXING';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/xSUXMwqZ3z0');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Интенсивная кардио-тренировка с элементами бокса под мощный хип-хоп для стального пресса, динамического сжигания калорий, крепкой спины и молниеносной реакции. <br> Тренировка отлично подходит для тех, кто предпочитает тратить калории в максимальной динамике. На тренировках по боксу повышается координация, выносливость, а так же улучшаются силовые показатели. Все отрицательные эмоции, накопленный стресс и негативные мысли выплеснутся в противостоянии с аква-грушей.'
    descriptionTwo.textContent = 'С собственным весом. Ни боксёрские перчатки, ни груша не понадобятся. Только воображение 😉'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function hiit() {
    mainPar.textContent = 'HIIT';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/Gv6oiZAo7dc');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Интенсивная интервальная тренировка для всего тела. Главный фокус — эффективная сушка и чёткий рельеф. <br> Стать сильнее, выносливее и быстрее, сбросить лишний вес, как следует попотеть — и всё это в очень сжатые сроки.'
    descriptionTwo.textContent = 'Максимально непривычная нагрузка для всех групп мышц — только с собственным весом. Но без бутылки воды не обойтись.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function cardio() {
    mainPar.textContent = 'GRIT CARDIO';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/SDhyfxf81nU');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Интенсивная интервальная тренировка для всего тела. Главный фокус — эффективная сушка и чёткий рельеф. <br> Стать сильнее, выносливее и быстрее, сбросить лишний вес, как следует попотеть — и всё это в очень сжатые сроки.'
    descriptionTwo.textContent = 'Максимально непривычная нагрузка для всех групп мышц — только с собственным весом. Но без бутылки воды не обойтись.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function bodyMind() {
    par.textContent = 'BODY&MIND';
    par.setAttribute('class', 'parStyleTwo');
    btnOne.textContent = 'STRETCHING';
    btnTwo.textContent = 'HATHA YOGA 90';
    btnThree.textContent = 'ЗДОРОВАЯ СПИНА';
    btnFour.textContent = 'SPLIT STRETCH';
    imageOne.setAttribute('src', 'stretching.jpg');
    imageTwo.setAttribute('src', 'https://images.pexels.com/photos/4047042/pexels-photo-4047042.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    imageThree.setAttribute('src', 'https://images.pexels.com/photos/7700189/pexels-photo-7700189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940');
    imageFour.setAttribute('src', 'https://images.pexels.com/photos/3822193/pexels-photo-3822193.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
    btnOne.addEventListener ('click', stretching);
    btnTwo.addEventListener ('click', yoga);
    btnThree.addEventListener ('click', healthyBack);
    btnFour.addEventListener ('click', strech);
    gsap.from('#container_par', 1.5, {
        opacity: 0,
        x: 50,
        delay: .7
    })
}

function stretching() {
    mainPar.textContent = 'STRETCHING';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/CY6QP4ofwx4');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Класс для развития эластичности и силы мышц, формирования красивой осанки, а также — для снятия эмоционального и физического напряжения. <br> Цель тренировки - развить гибкость и координацию, проработать глубокие мышцы всего тела и восстановиться после тяжёлых нагрузок.'
    description.textContent = 'Без опытного тренера даже простая растяжка может быть опасной. Поэтому инструктор подробно рассказывает, как технично выполнять все упражнения.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function yoga() {
    mainPar.textContent = 'HATHA YOGA 90';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/4zgzlzP7zx4');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Хатха-йога — древняя система укрепления организма и достижения баланса между телесным и духовным. Практика направлена на расслабление после стресса, восстановление, а также развитие силы и выносливости. Включает последовательное выполнение статических асан, пранаям и медитаций. Первые отвечают за развитие физического тела, развивают силу и гибкость. Пранаямы (дыхательные упражнения) — это контроль дыхания и, как следствие, эмоций.<br> Медитации дают возможность познать и услышать свое «Я».'
    description.textContent = 'С собственным весом и ковриком. Блоки для йоги и фитнес-резинку можно заменить на увесистые томики Толстого и обычный ремень соответственно.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function healthyBack() {
    mainPar.textContent = 'ЗДОРОВАЯ СПИНА';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/iN6hsEXvoMs');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Тренировка на укрепление мышц спины и позвоночника подойдут вам, если беспокоят боли в спине, вы мало двигаетесь или просто хотите укрепить мышечный корсет. <br> Эффекты программы: укрепление и выравнивание плечевого пояса и рук, улучшение контроля центра, выравнивание осанки. Отличная профилактика скованных и зажатых плеч. '
    description.textContent = 'С собственным весом и фитнес-резинкой — вместо неё можно взять полотенце или обычный ремень.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function strech() {
    mainPar.textContent = 'SPLIT STRETCH';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/Ic68bks6-Wc');
    containerVideo.style.display = 'block';
    description.textContent = 'Формат урока рассчитан на людей, которые хотят сесть на шпагат или приблизиться к этому. Это одно из наиболее эффективных занятий на растяжку. Результат наступает намного быстрее, чем в классическом стретчинге. '
    descriptionTwo.textContent = 'С собственным весом, ковриком, небольшими подушками.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation()
}

function dance() {
    par.textContent = 'DANCE';
    par.setAttribute('class', 'parStyleTwo');
    btnOne.textContent = 'CARDIO DANCE';
    btnTwo.textContent = 'LATINA';
    btnThree.textContent = 'ZUMBA';
    btnFour.textContent = `LADY'S DANCE`;
    imageOne.setAttribute('src', 'https://images.pexels.com/photos/8927179/pexels-photo-8927179.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260');
    imageTwo.setAttribute('src', 'https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')
    imageThree.setAttribute('src', 'zumba.png');
    imageFour.setAttribute('src', 'https://images.unsplash.com/photo-1601643157105-cfbc55da8fab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    btnOne.addEventListener ('click', cardioDance);
    btnTwo.addEventListener ('click', latina);
    btnThree.addEventListener ('click', zumba);
    btnFour.addEventListener ('click', ladyDance);
    gsap.from('#container_par', 1.5, {
        opacity: 0,
        x: 50,
        delay: .7
    })
}

function cardioDance() {
    mainPar.textContent = 'CARDIO DANCE';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/6Ea38Ns1an8?list=PLI37FJmOtrj1R0fTaqRH6XH5BKEudl0Jq');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Интенсивное кардио с танцевальными связками под популярные треки. Главный фокус — выносливость, чувство ритма и, конечно, танцы 💃🏻. <br> Цель тренировки - стать стройнее и подтянутее, проработать глубокие мышцы по всему телу, развить чувство ритма и координацию. Ну и отлично провести время, само собой.'
    descriptionTwo.textContent = 'Твой главный инструмент на этом воркауте — собственное тело. Научись контролировать его во время упражнений и расслабляться в танцевальном ритме. Зато хорошие наушники или мощная акустика будут кстати.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function latina() {
    mainPar.textContent = 'LATINA';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/8DZktowZo_k');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Латиноамериканские танцы славятся своей страстностью, импульсивностью и позитивом. Латиноамериканские танцы - это мамба, сальса, бачата, самба, ча-ча-ча, румба, джайв, меренге, соло латина и другие танцы.<br>Соло латина поможет развить танцевальные навыки, чувство ритма и женственность движений.'
    descriptionTwo.textContent = 'С собственным весом. Бальная экипировка не понадобится. Зато хорошие наушники или мощная акустика будут кстати.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';
    animation();
}

function zumba() {
    mainPar.textContent = 'ZUMBA';
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/RcXteQGL9AA');
    containerVideo.style.display = 'block';
    description.innerHTML = 'это фитнес-программа, состоящая из танцевальных движений под мотивы в стиле латино. Она включает в себя микс из элементов таких активных танцев, как самба, хип-хоп, сальса, меренге, бачата, кумбия, фламенко и некоторых других. <br> Занятия проходят под музыку, движения ритмичны, многообразны и задействуют абсолютно все мышцы тела.'
    descriptionTwo.textContent = 'Основной лозунг методики Zumba звучит так: «Забудьте о тяжелом спорте и изнуряющих тренировках, отправляйтесь на вечеринку и радуйтесь жизни!»..'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none';  
    animation(); 
}

function ladyDance() {
    mainPar.textContent = `LADY'S DANCE`;
    par.textContent = 'Онлайн-тренировка';
    myVideo.setAttribute('src', 'https://www.youtube.com/embed/MtCJZgqybTA');
    containerVideo.style.display = 'block';
    description.innerHTML = 'Танцевальное направление для всех девушек, которые мечтают стать воплощением женственности, чувственности и изящества, хотят научиться пластично двигаться под музыку и выражать свои эмоции в танце. Этот танец для тех, кто хочет раскрыть свою сексуальность и убедиться в своей притягательности. <br> В план занятий не включены серьезные фитнес-упражнения, но и расслабиться не получится: во время тренировки работают все группы мышц. А сама тренировка включает в себя танцевальную разминку, силовой блок, разучивание элементов и объединение их в связку.'
    descriptionTwo.textContent = ' Для удобства понадобятся наколенники. Форма одежды: наколенники (обязательно), туфли (по желанию) или носки.'
    containeDescription.style.display = 'block';
    imageOne.style.display = 'none';
    imageTwo.style.display = 'none';
    imageThree.style.display = 'none';
    imageFour.style.display = 'none';
    btnOne.style.display = 'none';
    btnTwo.style.display = 'none';
    btnThree.style.display = 'none';
    btnFour.style.display = 'none'; 
    animation(); 
}


gsap.from('#head', 1.5, {
    opacity: 0,
    x: -50,
    delay: 1
})

gsap.from('#container_par', 1.5, {
    opacity: 0,
    x: 50,
    delay: 1
})

gsap.from('#container_image', 2.3, {
    opacity: 0,
    delay: 1.7
})

gsap.from('.btn-choose', 1.5, {
    opacity: 0,
    y: 50,
    delay: 1
})
  
  gsap.utils.toArray("button").forEach(button => {
    let hover = gsap.to(button, {duration: .8, boxShadow: '0px 0px 0px 3px #f7f7f7', paused: true, ease: "power1.Out"});
    button.addEventListener("mouseenter", () => hover.play());
    button.addEventListener("mouseleave", () => hover.reverse());
  });

  function animation() {
    gsap.from('.one', 1.5, {
        opacity: 0,
        x: 50,
        delay: 1.7
    })

    gsap.from('.two', 1.5, {
        opacity: 0,
        x: -50,
        delay: 1.7
    })
  }