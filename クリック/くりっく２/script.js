let score = 0;
let startTime;

function startGame() {
    // ゲーム開始時に開始時間を記録
    startTime = new Date().getTime();

    // ボタンを有効にする
    document.getElementById('clickButton').disabled = false;
    
    // スコアをリセット
    score = 0;
    document.getElementById('score').textContent = `スコア: ${score}`;

    // ゲーム開始メッセージ
    alert('タイムアタックモード - ゲームスタート！クリックしてスコアを上げよう！');
}

function incrementScore() {
    // スコアを1増やす
    score++;
    
    // スコアを表示
    document.getElementById('score').textContent = `スコア: ${score}`;
    
    // ゲームが終了したら経過時間を表示
    if (score === 20) {
        const endTime = new Date().getTime();
        const elapsedTime = (endTime - startTime) / 1000; // 経過時間を秒単位で計算
        alert(`おめでとうございます！スコア20達成！\n経過時間: ${elapsedTime.toFixed(2)}秒`);
        
        // ボタンを無効にする
        document.getElementById('clickButton').disabled = true;
    }
}

