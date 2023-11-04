document.addEventListener('DOMContentLoaded', () => {
    const quoteContainer = document.getElementById('quote-container');
    const quoteText = document.getElementById('quote-text');
    const quoteAuthor = document.getElementById('quote-author');
    const quoteCategory = document.getElementById('quote-category');
    const quoteYear = document.getElementById('quote-year');
    const generateButton = document.getElementById('generate-button');

    const quotes = [
        { text: "人の一生は重荷を負うて、遠き道を行くがごとし急ぐべからず不自由を、常と思えば不足なし", author: "徳川家康", category: "人生", year: "不明" },
        { text: "是非に及ばず！", author: "織田信長", category: "格言", year: 1573 },
        { text: "主人は無理をいうなるものと知れ。", author: "豊臣秀吉", category: "人生", year: "不明" },
    ];

    generateButton.addEventListener('click', generateRandomQuote);

    function generateRandomQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        const randomQuote = quotes[randomIndex];
        quoteText.textContent = randomQuote.text;
        quoteAuthor.textContent = `- ${randomQuote.author}`;
        quoteCategory.textContent = `カテゴリ: ${randomQuote.category}`;
        quoteYear.textContent = `year: ${randomQuote.year}`;
    }
});
