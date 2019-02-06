// 1. Условные операторы. Если а – четное посчитать а*б, иначе а+б

function f1_1(a, b) {
    if (a % 2 == 0) {
        a *= b;
        console.log(a);
    }
    else {
        a += b;
        console.log(a);
    }
}

// 2. Условные операторы. Определить какой четверти принадлежит точка с координатами (х,у)

function f1_2() {
    let x = prompt('ВВЕДИТЕ x:', '');
    let y = prompt('ВВЕДИТЕ y:', '');
    if (x == 0 || y == 0) {
        console.log((x == 0 && y == 0) ? 'Центр координат' : 'ось ' + ((x == 0 ? 'Y' : 'X')));
        document.write((x == 0 && y == 0) ? 'Центр координат' : 'ось ' + ((x == 0 ? 'Y' : 'X')));
    }

    else {
        let horizontal = (x > 0 ? [1, 2] : [3, 4]);
        let vertical = (y > 0 ? [1, 4] : [2, 3]);
        horizontal.forEach(el => {
            if (vertical.includes(el)) {
                console.log(el + ' четверть');
                document.write(el + ' четверть');
            }
        });
    }
}

// 3. Условные операторы. Найти суммы только положительных из трех чисел

function f1_3(a, b, c) {
    var sum = 0;

    if (a > 0) {
        sum = sum + a;
    }
    if (b > 0) {
        sum = sum + b;
    }
    if (c > 0) {
        sum = sum + c;
    }
    console.log(sum);
}

// 4. Условные операторы. Посчитать выражение макс(а*б*с, а+б+с)+3

function f1_4() {
    let a = +prompt('Enter a:', '');
    let b = +prompt('Enter b:', '');
    let c = +prompt('Enter c:', '');
    if (a * b * c >= a + b + c) {
        var rez = a * b * c + 3;
        console.log(rez);
        document.write(rez);
    }
    else {
        var rez = (a + b + c) + 3;
        console.log(rez);
        document.write(rez);
    }
}

// 5. Условные операторы. Написать программу определения оценки студента по его рейтингу

function f1_5(studMark) {
    if (studMark >= 0 && studMark <= 19) {
        console.log("Оценка студента F");
    }
    else if (studMark >= 20 && studMark <= 39) {
        console.log("Оценка студента E");
    }
    else if (studMark >= 40 && studMark <= 59) {
        console.log("Оценка студента D");
    }
    else if (studMark >= 60 && studMark <= 74) {
        console.log("Оценка студента C");
    }
    else if (studMark >= 75 && studMark <= 89) {
        console.log("Оценка студента B");
    }
    else if (studMark >= 90 && studMark <= 100) {
        console.log("Оценка студента A");
    }
    else {
        console.log("Введены некорректные данные");
    }
}

// 1. Циклы. Найти сумму четных чисел и их количество в диапазоне от 1 до 99

function f2_1() {
    var sum = 0, quantity = 0;
    for (var i = 0; i < 99; i++) {
        if (i % 2 == 0) {
            sum += i;
            quantity++;
        }
    }
    console.log('Сумма четных чисел в диапазоне от 1 до 99 ==> ', sum);
    console.log('Число четных чисел в диапазоне от 1 до 99 ==> ', quantity);
}

// 2. Циклы. Проверить простое ли число? (число называется простым, если оно делится только само на себя и на 1)

function f2_2() {

    var x = +prompt("Enter number: ");
    if (x < 2) {
        console.log('Введенное число ' + x + ' составное!');
        document.write('Введенное число ' + x + ' составное!');
        return;
    }

    var q = Math.floor(Math.sqrt(x));

    for (var i = 2; i <= q; i++) {
        if (x % i == 0) {
            console.log('Введенное число ' + x + ' составное!');
            document.write('Введенное число ' + x + ' составное!');
            return;
        }
    }

    console.log('Введенное число ' + x + ' простое!');
    document.write('Введенное число ' + x + ' простое!');
    return;
}

// 3. Циклы.Найти корень натурального числа с точностью до целого (рассмотреть вариант последовательного подбора и
// метод бинарного поиска)

// Вариант последовательного подбора

function sqrtChecking(a) {
    var i = 1;
    while (i * i <= a) {
        i++;
    }
    return i - 1;
}

// Метод бинарного поиска
function sqrtBinSearch(a) {
    var i = a;

    while (i * i > a) {
        i /= 2;
    }
    while (i * i < a) {
        i++;
    }
    return Math.round(i);
}


// 4. Циклы. Вычислить факториал числа n. n! = 1*2*…*n-1*n;!

function f2_4() {

    var n = +prompt('Enter number: ', '');

    function factorial(n) {
        return (n != 1) ? n * factorial(n - 1) : 1;
    }

    console.log('Факториал числа ' + n + ' равен: ' + factorial(n));
    document.write('Факториал числа ' + n + ' равен: ' + factorial(n));
}

// 5. Циклы.Посчитать сумму цифр заданного числа

function f2_5(num) {
    var sum = 0, tmp;
    while (num) {
        tmp = num % 10;
        num = (num - tmp) / 10;
        sum += tmp;
    }
    console.log(sum);
}

/* 6. Циклы. Вывести число, которое является зеркальным отображением последовательности цифр заданного числа,
 например, задано число 123, вывести 321. */

function f2_6() {

    var number = prompt('Enter number: ');
    var rezult = number.split('').reverse().join('');
    document.write(rezult);
    console.log(rezult);
}

// 1. Одномерные массивы. Найти минимальный элемент массива

function f3_1() {

    var mas = [];
    var iterator = +prompt('Сколько элементов в массиве ?', '') - 1;
    var maxEl;
    var minEl;

    for (i = 0; i <= iterator; i++) {
        var el = +prompt('Enter number: ', '');
        mas[i] = el;
    }

    minEl = mas[0];
    maxEl = minEl;
    for (i = 0; i < mas.length; ++i) {
        if (mas[i] > maxEl) maxEl = mas[i];
        if (mas[i] < minEl) minEl = mas[i];
    }

    console.log('Минимальный элемент массива - ' + mas + ' ==> ' + minEl);
    document.write('Минимальный элемент массива - ' + mas + ' ==> ' + minEl);
}

// 2. Одномерные массивы. Найти максимальный элемент массива

function f3_2() {
    var mas = [];
    var iterator = +prompt('Сколько элементов в массиве ?', '') - 1;
    var maxEl;
    var minEl;

    for (i = 0; i <= iterator; i++) {
        var el = +prompt('Enter number: ', '');
        mas[i] = el;
    }

    minEl = mas[0];
    maxEl = minEl;
    for (i = 0; i < mas.length; ++i) {
        if (mas[i] > maxEl) maxEl = mas[i];
        if (mas[i] < minEl) minEl = mas[i];
    }

    console.log('Максимальный элемент массива - ' + mas + ' ==> ' + maxEl);
    document.write('Максимальный элемент массива - ' + mas + ' ==> ' + maxEl);
}

// 3. Одномерные массивы. Найти индекс минимального элемента массива

function f3_3() {
    var mas = [];
    var iterator = +prompt('Сколько элементов в массиве ?', '') - 1;
    var maxEl;
    var minEl;

    for (i = 0; i <= iterator; i++) {
        var el = +prompt('Enter number: ', '');
        mas[i] = el;
    }

    var min = Math.min.apply(null, mas);

    console.log('Индекс минимального элемента массива -  ' + mas + ' ==> ' + mas.indexOf(min));
    document.write('Индекс минимального элемента массива -  ' + mas + ' ==> ' + mas.indexOf(min));
}

// 4. Одномерные массивы. Найти индекс максимального элемента массива

function f3_4() {
    var mas = [];
    var iterator = +prompt('Сколько элементов в массиве ?', '') - 1;
    var maxEl;
    var minEl;

    for (i = 0; i <= iterator; i++) {
        var el = +prompt('Enter number: ', '');
        mas[i] = el;
    }

    var max = Math.max.apply(null, mas);

    console.log('Индекс максимального элемента массива -  ' + mas + ' ==> ' + mas.indexOf(max));
    document.write('Индекс максимального элемента массива -  ' + mas + ' ==> ' + mas.indexOf(max));
}

// 5. Одномерные массивы. Посчитать сумму элементов массива с нечетными индексами

function f3_5() {

    var mas = [];
    var iterator = +prompt('Сколько элементов в массиве ?', '') - 1;
    var summ = 0;

    for (i = 0; i <= iterator; i++) {
        var el = +prompt('Enter number: ', '');
        mas[i] = el;
    }

    for (i = 0; i < mas.length; i++) {
        if (mas.indexOf(mas[i]) % 2 != 0) {
            summ += mas[i];
        }
    }

    console.log(summ);

}

// 6. Одномерные массивы. Сделать реверс массива (массив в обратном направлении)

function f3_6() {
    var mas = [];
    var iterator = +prompt('Сколько элементов в массиве ?', '') - 1;

    for (i = 0; i <= iterator; i++) {
        var el = +prompt('Enter number: ', '');
        mas[i] = el;
    }

    console.log('Реверс массива -  ' + mas + ' ==> ' + mas.reverse());
    document.write('Реверс массива -  ' + mas + ' ==> ' + mas.reverse());
}

// 7. Одномерные массивы. Посчитать количество нечетных элементов массива.

function f3_7() {

    var mas = [];
    var iterator = +prompt('Сколько элементов в массиве ?', '') - 1;
    var summ = 0;

    for (i = 0; i <= iterator; i++) {
        var el = +prompt('Enter number: ', '');
        mas[i] = el;
    }

    for (i = 0; i < mas.length; i++) {
        if (mas[i] % 2 != 0) {
            summ++;
        }
    }

    console.log(summ);

}


// 8. Одномерные массивы. Поменять местами первую и вторую половину массива, например, для массива 1 2 3 4,
// результат 3 4 1 2

function f3_8() {

    var mas = [];
    var mas1 = [];
    var mas2 = [];
    var masRez = [];

    var iterator = +prompt('Сколько элементов в массиве ?', '') - 1;

    for (i = 0; i <= iterator; i++) {
        var el = +prompt('Enter number: ', '');
        mas[i] = el;
    }

    for (i = 0; i < mas.length / 2; i++) {
        mas1[i] = mas[i];
    }

    var masL = Math.floor(mas.length / 2);

    if (mas.length % 2 == 0) {
        for (i = masL, j = 0; i < mas.length; i++, j++) {

            mas2[j] = mas[i];
        }
    } else {
        for (i = masL + 1, j = 0; i < mas.length; i++, j++) {

            mas2[j] = mas[i];
        }
    }

    masRez = [...mas2, ...mas1];

    console.log('Замена местами половин массива -  ' + masRez + ' ==> ' + mas);
    document.write('Замена местами половин массива -  ' + masRez + ' ==> ' + mas);
}


// 9. Одномерные массивы. Отсортировать массив (пузырьком (Bubble), выбором (Select), вставками (Insert))

// bubble

function bubbleSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        for (var j = 0; j < n - 1 - i; j++) {
            if (arr[j + 1] < arr[j]) {
                var t = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = t;
            }
        }
    }
    console.log(arr);
}

// SelectSort

function selectionSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[j] < arr[min])
                min = j;
        }
        var t = arr[min];
        arr[min] = arr[i];
        arr[i] = t;
    }
    console.log(arr);
}

// InsertSort

function insertionSort(arr) {
    var n = arr.length;
    for (var i = 0; i < n; i++) {
        var v = arr[i], j = i - 1;
        while (j >= 0 && arr[j] > v) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = v;
    }
    console.log(arr);
}

// 10. Одномерные массивы. Отсортировать массив (Quick, Merge, Shell, Heap)

// quick

function QuickSort(arr, left = 0, right = arr.length - 1) {
    let len = arr.length,
        index;

    if (len > 1) {

        index = partition(arr, left, right);

        if (left < index - 1) {
            QuickSort(arr, left, index - 1);
        }

        if (index < right) {
            QuickSort(arr, index, right);
        }

    }
    document.write(arr);
    return arr;

}

function partition(arr, left, right) {
    let middle = Math.floor((right + left) / 2),
        pivot = arr[middle],
        i = left,
        j = right;

    while (i <= j) {


        while (arr[i] < pivot) {
            i++;
        }


        while (arr[j] > pivot) {
            j--;
        }


        if (i <= j) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
            i++;
            j--;
        }
    }

    return i;

}

// Merge

var unsortedArr = [340, 1, 3, 3, 76, 23, 4, 12, 122, 7642, 646];

function merge(leftArr, rightArr) {
    var sortedArr = [];
    while (leftArr.length && rightArr.length) {
        if (leftArr[0] <= rightArr[0]) {
            sortedArr.push(leftArr[0]);
            leftArr = leftArr.slice(1)
        } else {
            sortedArr.push(rightArr[0]);
            rightArr = rightArr.slice(1)
        }
    }
    while (leftArr.length)
        sortedArr.push(leftArr.shift());
    while (rightArr.length)
        sortedArr.push(rightArr.shift());
    return sortedArr;
}

function mergesort(arr) {
    if (arr.length < 2) {
        return arr;
    }
    else {
        var midpoint = parseInt(arr.length / 2);
        var leftArr = arr.slice(0, midpoint);
        var rightArr = arr.slice(midpoint, arr.length);
        return merge(mergesort(leftArr), mergesort(rightArr));
    }
}

//console.log('This should be the sorted array!')
//console.log(mergesort(unsortedArr));


// Shell

function shellSort(arr) {
    var increment = arr.length / 2;
    while (increment > 0) {
        for (i = increment; i < arr.length; i++) {
            var j = i;
            var temp = arr[i];

            while (j >= increment && arr[j - increment] > temp) {
                arr[j] = arr[j - increment];
                j = j - increment;
            }

            arr[j] = temp;
        }

        if (increment == 2) {
            increment = 1;
        } else {
            increment = parseInt(increment * 5 / 11);
        }
    }
    return arr;
}

//console.log(shellSort(unsortedArr));

// Heap
function Heap() {

    var array_length;

    function heap_root(input, i) {
        var left = 2 * i + 1;
        var right = 2 * i + 2;
        var max = i;

        if (left < array_length && input[left] > input[max]) {
            max = left;
        }

        if (right < array_length && input[right] > input[max]) {
            max = right;
        }

        if (max != i) {
            swap(input, i, max);
            heap_root(input, max);
        }
    }

    function swap(input, index_A, index_B) {
        var temp = input[index_A];

        input[index_A] = input[index_B];
        input[index_B] = temp;
    }

    function heapSort(input) {

        array_length = input.length;

        for (var i = Math.floor(array_length / 2); i >= 0; i -= 1) {
            heap_root(input, i);
        }

        for (i = input.length - 1; i > 0; i--) {
            swap(input, 0, i);
            array_length--;


            heap_root(input, 0);
        }
    }

    heapSort(unsortedArr);
    console.log(unsortedArr);
    document.write(heapSort(unsortedArr));

}

// 1. Функции. Получить строковое название дня недели по номеру дня.

function f4_1dayOfTheWeek(dayNumber) {

    if (dayNumber < 1 || dayNumber > 7) {
        console.log("Задано неверное значение");
    }
    return ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота", "Воскресенье"][dayNumber - 1];

}


// 2. Функции. Найти расстояние между двумя точками в двухмерном декартовом пространстве.

function f4_2Decart() {

    var x1 = +prompt('Enter x1: ', '');
    var y1 = +prompt('Enter y1: ', '');
    var x2 = +prompt('Enter x2: ', '');
    var y2 = +prompt('Enter y2: ', '');
    var a = x1 - x2;
    var b = y1 - y2;

    var c = Math.sqrt(a * a + b * b);

    console.log('Расстояние между точками: ' + c);
    document.write('Расстояние между точками: ' + c);

}