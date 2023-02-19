// Слова, які можуть бути використані в грі
const words = [
    'крокодил',
    'лев',
    'тигр',
    'вовк',
    'медведь',
    'мавпа',
    'зебра',
    'кіт',
    'собака',
    'кінь'
  ];
  
  // Вибрати випадкове слово з масиву
  let randomIndex = Math.floor(Math.random() * words.length);
  let word = words[randomIndex];
  
  // Перетворити слово в масив букв
  let letters = word.split('');
  
  // Знайти контейнер для слова та категорії
  let wordContainer = document.querySelector('.word-container');
  wordContainer.querySelector('.category').textContent = 'Категорія: Тварини';
  
  // Замінити кожну літеру слова на пустий проміжок
  for (let i = 0; i < letters.length; i++) {
    letters[i] = '_';
  }
  
  // Вивести слово в контейнер
  wordContainer.querySelector('.word').textContent = letters.join(' ');
  
  // Знайти форму та результат
  let guessForm = document.querySelector('#guess-form');
  let resultContainer = document.querySelector('.result-container');
  
  // Встановити обробник подій для відправки форми
  guessForm.addEventListener('submit', function(event) {
    event.preventDefault();
  
    let guessInput = document.querySelector('#guess');
    let guess = guessInput.value.toLowerCase();
    
    if (guess === word) {
      resultContainer.querySelector('.result').textContent = 'Вірно!';
    } else {
      resultContainer.querySelector('.result').textContent = 'Спробуйте ще раз!';
    }
    
    guessInput.value = '';
  });