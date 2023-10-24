let score = 0;

function incrementScore() {
    // スコアを1増やす
    score++;
    
    // スコアを表示
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    // スコアが一定値に達したらメッセージを表示
    if (score === 10) {
        alert('おめでとうございます！スコア10達成！');
    }
    if (score === 50) {
        alert('おめでとうございます！スコア50達成！');
    }
    if (score === 100) {
        alert('おめでとうございます！スコア100達成！');
    }
}