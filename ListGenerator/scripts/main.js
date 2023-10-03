// Массив для хранения данных обучающихся
const students = [];

// Функция для добавления нового ученика в таблицу
function addStudentToTable(student) {
    const table = document.getElementById("studentsTable");
    const row = table.insertRow();

    const properties = ["id", "name", "birthdate", "class", "schoolNumber", "parentName", "addressPhone", "snils"];

    for (let i = 0; i < properties.length; i++) {
        const cell = row.insertCell();
        cell.innerHTML = student[properties[i]];
    }
}

// Функция для генерации случайного числа в заданном диапазоне
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Функция для генерации случайного ФИО для мальчика
function generateRandomBoyName() {
    const firstNames = ["Рамзан", "Абу6акар", "Адам", "Али", "Алихан", "Анзор" , "Апти" , "Арби" , "Ахмед" , "Аюб" , "Байсангур" , "Бекхан" , "Беслан " , "Бувайсар" , "Валид" , "Ваха" , "Вахид" , "Везирхан" , "Гайрбек" , "Дауд" , "Джабраил" , "Джамбулат" , "Дукхваха" , "Зайнди" , "Зелим" , "Заурбек" , "Зубаир", "Ибрагим" , "Идрис" , "Иса" , "Ислам" , "Казбек" , "Керим" , "Леча" , "Майрбек" , "Малик" , "Мовсар" , "Мурад" , "Муслим" , "Муса" , "Олхазар" , "Рамзан" , "Ризван" , "Руслан" , "Рустам" , "Салавди" , "Сулиман" , "Сурхо" , "Тимур" , "Хусейн" , "Шамиль" , "Шерип" , "Элимхан" , "Юсуп" , "Юнус" , "Якуб"];
    const lastNames = ["Рамзанов", "Абу6акаров", "Адамов", "Алиев", "Алиханов", "Анзоров" , "Аптиев" , "Арбиев" , "Ахмедов" , "Аюбов" , "Авторханов" , "Айдамиров" , "Арсанов" , "Вахаев" , "Вахидов" , "Басаев" , "Бексултанов" , "Дудаев" , "Гелаев" , "Гакаев" , "Гадаев" , "Висаитов" , "Делимханов" , "Закриев", "Кагерманов" , "Курбанов" , "Лорсанов" , "Магомадов" , "Мазаев" , "Межидов" , "Муртазалиев" , "Орцуев" , "Расулов" , "Рашидов" , "Садаев" , "Салманов" , "Сатуев" , "Хаджиев" , "Хазматов" , "Хизриев" , "Чатаев" , "Шамханов" , "Шитаев" , "Шовхалов" , "Эдиев" , "Эдилов" , "Эстемиров" , "Эльмурзаев" , "Юсупов" , "Яндарбиев" , "Банкуров" , "Юшаев", "Садулаев"];
    const middleNames = ["Рамзан", "Абу6акарович", "Адамович", "Алиевич", "Алиханович", "Анзорович" , "Аптиевич" , "Арбиевич" , "Ахмедович" , "Аюбович" , "Байсангурович" , "Бекханович" , "Бесланович " , "Бувайсарович" , "Валидович" , "Вахаевич" , "Вахидович" , "Везирханович" , "Гайрбекович" , "Даудович" , "Джабраилович" , "Джамбулат" , "Дукхвахович" , "Зайндиевич" , "Рустамович" , "Заурбекович" , "Зубаирович", "Ибрагимович" , "Идрисович" , "Исаевич" , "Исламович" , "Казбекович" , "Керимович" , "Русланович" , "Сайханович" , "Маликович" , "Мовсарович" , "Мурадович" , "Муслим" , "Мусаевич" , "Олхазурович" , "Рамзанович" , "Ризванович" , "Русланович" , "Рустамович" , "Салавдиевич" , "Сулиманович" , "Сурхоевич" , "Тимурович" , "Хусейнович" , "Висханович" , "Шерипович" , "Амирханович" , "Юсупович" , "Юнусович" , "Якубович"];

    const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
    const middleName = middleNames[getRandomInt(0, middleNames.length - 1)];

    return `${lastName} ${firstName} ${middleName}`;
}

// Функция для генерации случайного ФИО для девочки
function generateRandomGirlName() {
    const firstNames = ["Айна", "Бирлант", "Зайна", "Зухра", "Иман", "Йаха", "Камила", "Мадина", "Макка", "Малика", "Марьям", "Раяна", "Селима", "Самира", "Сацита", "Хава", "Хадижат", "Хадия", "Ясмина", "Яхита", "Айна", "Тамара", "Эльза", "Аниса", "Селима", "Марет", "Мадина", "Асет", "Карина", "Халима", "Фатима", "Петимат", "Амира"];
    const lastNames = ["Рамзанова", "Абу6акарова", "Адамова", "Алиева", "Алиханова", "Анзорова" , "Аптиева" , "Арбиева" , "Ахмедова" , "Аюбова" , "Авторханова" , "Айдамирова", "Арсанова" , "Вахаева" , "Вахидова" , "Басаева" , "Бексултанова" , "Дудаева" , "Гелаева" , "Гакаева" , "Гадаева" , "Висаитова" , "Делимханова" , "Закриева", "Кагерманова", "Курбанова" , "Лорсанова" , "Магомадова" , "Мазаева" , "Межидова" , "Муртазалиева" , "Орцуева", "Расулова" , "Рашидова" , "Садаева" , "Салманова" , "Сатуева" , "Хаджиева" , "Хазматова" , "Хизриева" , "Чатаева" , "Шамханова" , "Шитаева" , "Шовхалова" , "Эдиева" , "Эдилова" , "Эстемирова" , "Эльмурзаева" , "Юсупова" , "Яндарбиева" , "Банкурова" , "Юшаева", "Садулаева"];
    const middleNames = ["Рамзановна", "Абу6акарововна", "Адамововна", "Алихановна", "Анзоровна" , "Аптиевна" , "Арбиевна" , "Ахмедовна" , "Аюбовна" , "Байсангуровна" , "Бекхановна" , "Беслановна" , "Бувайсаровна" , "Валидовна" , "Вахаевна" , "Вахидовна" , "Везирхановна" , "Гайрбековна" , "Даудовна" , "Джабраиловна" , "Джамбулатовна" , "Дукхваховна" , "Зайндиевна", "Заурбековна" , "Зубаировна", "Ибрагимовна" , "Идрисовна" , "Исаевна" , "Исламовна" , "Казбековна" , "Керимовна" , "Руслановна" , "Сайханововна" , "Маликовна" , "Мовсаровна" , "Мурадовна" , "Муслимовна" , "Мусаевна" , "Олхазуровна" , "Салавдиевна" , "Сулимановна" , "Сурхоевна" , "Тимуровна" , "Хусейновна" , "Висхановна" , "Шериповна" , "Амирханововна" , "Юсупововна" , "Юнусововна" , "Якубовна"];

    const firstName = firstNames[getRandomInt(0, firstNames.length - 1)];
    const lastName = lastNames[getRandomInt(0, lastNames.length - 1)];
    const middleName = middleNames[getRandomInt(0, middleNames.length - 1)];

    return `${lastName} ${firstName} ${middleName}`;
}

// Функция для генерации случайного ФИО в зависимости от пола
function generateRandomNameByGender(gender) {
    if (gender === 'male') {
        return generateRandomBoyName();
    } else if (gender === 'female') {
        return generateRandomGirlName();
    }
}

// Функция для генерации случайного ФИО родителя
function generateRandomParentName(gender) {
    return generateRandomNameByGender(gender === 'female' ? 'female' : 'female');
}

// Функция для генерации случайной даты рождения
function generateRandomBirthdate() {
    const year = getRandomInt(2008  , 2010);
    const month = getRandomInt(1, 12);
    const day = getRandomInt(1, 28); // Упрощаем до 28-го числа
    return `${day}.${month}.${year}`;
}

// Функция для генерации случайного класса
function generateRandomClass() {
    const yearInfo = getRandomInt(2008  , 2010);
    const currentYear = new Date().getFullYear();
    const classInfo = (currentYear - yearInfo - 6);
    return classInfo;
}

// Функция для генерации случайного номера школы
function generateRandomSchoolNumber() {
    const schoolNumber = [42, 56, 61, 7, 14, 60, 46]; // список школ.
    const randomNumber = Math.floor(Math.random() * schoolNumber.length);
    let randomValue = schoolNumber[randomNumber];
    return randomValue;
}

// Функция для генерации случайного домашнего адреса и контактного телефона
function generateRandomAddressPhone() {
    const cities = ["Грозный"];
    const streets = ["Расковой", "Мичурина", "Хмельницкого", "Кабардинская", "Коммунистическая", "Бульвар Дудаева", "Лорсанова" , "Трудовая " , "Державина " , "Октябрьская" , "Макбекская " , "Мира" , "Р. Люксембург" , "Пушкина" , "Первомайская" , "Революции" , "Айдамирова" , "Дагестанская" , "Тимурсултанова" , "Таманская" , "Цветочная" , "Кирова" , "Садаева" , "Мухаммеда-Али" , "Шабаева" , "Аллаудина" , "Ассиновская" , "Сайханова" , "Ульянова"];
    const houseNumber = getRandomInt(1, 100);
    const phoneNumber = `8${getRandomInt(900, 999)}-${getRandomInt(100, 999)}-${getRandomInt(1000, 9999)}`;

    const city = cities[getRandomInt(0, cities.length - 1)];
    const street = streets[getRandomInt(0, streets.length - 1)];

    return `г. ${city}, ул. ${street}, д. ${houseNumber}, тел. ${phoneNumber}`;
}

// Функция для генерации случайного СНИЛСа
function generateRandomSnils() {
    return `${getRandomInt(120, 140)}-${getRandomInt(100, 999)}-${getRandomInt(100, 999)} ${getRandomInt(10, 99)}`;
}


// Функция для генерации нового ученика и добавления его в таблицу
function generateNewStudent() {
    const gender = Math.random() < 0.5 ? 'male' : 'female'; // Случайно выбираем пол

    

    const newStudent = {
        id: students.length + 1,
        name: generateRandomNameByGender(gender),
        birthdate: generateRandomBirthdate(),
        class: generateRandomClass(),
        schoolNumber: generateRandomSchoolNumber(),
        parentName: generateRandomParentName(gender), // Генерируем родителя другого пола
        addressPhone: generateRandomAddressPhone(),
        snils: generateRandomSnils()
    };

    addStudentToTable(newStudent);
    students.push(newStudent);
    

    

}

// Обработчик события для кнопки "Генерировать новых обучающихся"

document.getElementById("generateButton").addEventListener("click", generateNewStudent);


document.getElementById("generateButton15").addEventListener("click", function() {
    for (let i = 0; i < 15; i++) {
        generateNewStudent();
    }
});