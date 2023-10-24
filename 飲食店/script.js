function showDescription(item, description) {
    var descriptionElement = document.getElementById('item-description');
    descriptionElement.innerHTML = '<strong>' + item + '</strong>: ' + description;
  }
  
  // ページ読み込み時に初期化
  window.onload = function () {
    var descriptionElement = document.getElementById('item-description');
    descriptionElement.innerHTML = 'メニューアイテムにマウスを重ねて詳細を表示します。';
  };
  