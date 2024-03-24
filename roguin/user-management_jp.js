
function createUser() {
    var newUsername = document.getElementById("newUsername").value;
    var newPassword = document.getElementById("newPassword").value;

    // ユーザー情報をローカルストレージに保存
    localStorage.setItem(newUsername, newPassword);
    alert("ユーザーが作成されました: " + newUsername);
}

function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // ユーザー情報をローカルストレージから取得
    var storedPassword = localStorage.getItem(username);

    if(password === storedPassword) {
        // ログイン成功
        alert("ユーザー " + username + " でのログインに成功しました");
    } else {
        // ログイン失敗
        alert("認証情報が無効です");
    }
}
