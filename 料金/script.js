document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculate");
  const courseSelect = document.getElementById("course");
  const hoursInput = document.getElementById("hours");
  const customPriceInput = document.getElementById("customPrice");
  const totalAmountWithFeeDisplay = document.getElementById("totalAmountWithFee");
  const totalAmountWithoutFeeDisplay = document.getElementById("totalAmountWithoutFee");

  let totalPrice = 0;

  function updateTotal() {
      const systemFee = (totalPrice * 0.02).toFixed(2); // 2%のシステム利用料金を計算
      const totalAmountWithFee = (totalPrice + parseFloat(systemFee)).toFixed(2); // システム利用料金を含む合計金額を計算
      const totalAmountWithoutFee = totalPrice.toFixed(2); // システム利用料金を含まない合計金額を計算
      totalAmountWithFeeDisplay.textContent = `${totalAmountWithFee}円`;
      totalAmountWithoutFeeDisplay.textContent = `${totalAmountWithoutFee}円`;
  }

  function calculate() {
      const selectedCourse = courseSelect.value;
      const customPrice = parseFloat(customPriceInput.value) || 0;

      // コース料金を設定
      if (selectedCourse === "first-hour") {
          totalPrice = 1980; // 初めの一杯からコース（最初の1時間）
      } else if (selectedCourse === "alcohol") {
          totalPrice = 2750; // 飲み放題（アルコール）
          // 延長時間に応じて追加料金を計算
          totalPrice += (parseInt(hoursInput.value) - 1) * 2200;
      } else if (selectedCourse === "soft-drink") {
          totalPrice = 2530; // 飲み放題（ソフトドリンク）
          // 延長時間に応じて追加料金を計算
          totalPrice += (parseInt(hoursInput.value) - 1) * 2200;
      }

      // カスタム料金を適用
      totalPrice += customPrice;

      updateTotal();
  }

  calculateButton.addEventListener("click", function () {
      calculate();
  });

  // 「初めの一杯からコース」が選択された場合、経過時間の入力を無効にする
  courseSelect.addEventListener("change", function () {
      if (courseSelect.value === "first-hour") {
          hoursInput.disabled = true;
      } else {
          hoursInput.disabled = false;
      }
  });

  // 最初の計算
  updateTotal();
});
