function calculateBMI() {
  const weight = document.getElementById("weight").value;
  const height = document.getElementById("height").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;

  if (!weight || !height || !age || !gender) {
    alert("Mohon isi semua kolom.");
    return;
  }

  const heightInMeters = height / 100;
  const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

  let resultText = `BMI Anda adalah ${bmi}. `;
  let adviceText = "";

  if (bmi < 18.5) {
    resultText += "Anda termasuk dalam kategori kekurangan berat badan.";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    resultText += "Anda memiliki berat badan ideal.";
  } else if (bmi >= 25 && bmi <= 29.9) {
    resultText += "Anda termasuk dalam kategori kelebihan berat badan.";
  } else {
    resultText += "Anda termasuk dalam kategori obesitas.";
  }

  if (bmi >= 23 && bmi <= 25) {
    adviceText =
      "Anda berada dalam kategori overweight atau berat badan berlebih. Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga. Jika BMI Anda berada dalam kategori ini, maka Anda dianjurkan untuk menurunkan berat badan hingga batas normal.";
  }

  document.getElementById("bmiResult").innerText = resultText;
  document.getElementById("bmiAdvice").innerText = adviceText;
}

document.getElementById("nutritionConsult").onclick = function () {
  alert("Fitur Konsultasi Ahli Gizi Via Aplikasi akan segera tersedia.");
};

document.getElementById("nutritionRegister").onclick = function () {
  alert("Fitur Registrasi Online Ahli Gizi akan segera tersedia.");
};

document.getElementById("doctorConsult").onclick = function () {
  alert("Fitur Konsultasi Dokter Via Aplikasi akan segera tersedia.");
};

document.getElementById("doctorRegister").onclick = function () {
  alert("Fitur Registrasi Online Sekarang akan segera tersedia.");
};
