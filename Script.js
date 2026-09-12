const inquiryForm = document.getElementById("inquiryForm");
const fullNameInput = document.getElementById("fullName");
const goalInput = document.getElementById("goal");
const levelSelect = document.getElementById("level");
const messageTextarea = document.getElementById("message");
const resultBox = document.getElementById("result");

inquiryForm.addEventListener("submit", function (event) {
     event.preventDefault();
     // รับข้อมูลจาก Form มาเก็บเอาไว้เป็นตัวแปร
     const fullName = fullNameInput.value.trim();
     console.log('fullName: ', fullName,);
     const goal = goalInput.value.trim();
     console.log('goal: ', goal,);
     const level = levelSelect.value.trim();
     console.log('level: ', level,);
     const message = messageTextarea.value.trim();
     console.log('message: ', message,);

     // Check ว่า User ส่งข้อมูลมครบหรือไม่
     if (fullName === "" || goal === "" || level === "") {
         resultBox.textContent = "กรุณากรอกชื่อ เป้าหมาย และเลือกระดับพื้นฐานให้ครบก่อนส่ง";
         return;
     }
     let extraMessage = "";
     if (level === "เริ่มจากศูนย์") {
         extraMessage = "คุณสามารถเรียนรู้จากศูนย์ได้";
     }
     // ถ้า User ส่งข้อมูลมาครบ ให้แสดงข้อมูลออกมา
     resultBox.textContent = `new syntax: สวัสดีครับ ${fullName} คุณส่งข้อความมาดังนี้: เป้าหมาย: ${goal} พื้นฐาน: ${level} ข้อความ: ${message} ${extraMessage}`;
});