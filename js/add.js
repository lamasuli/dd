import { db } from "./firebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const phone = new URLSearchParams(window.location.search).get("phone");
const saveBtn = document.getElementById("saveBtn");

saveBtn.addEventListener("click", async () => {
  const date = document.getElementById("date").value;
  const notes = document.getElementById("notes").value;

  if (!date) return alert("اختر تاريخ");

  try {
    await addDoc(collection(db, "reservations"), {
      phone,
      date,
      notes,
      createdAt: new Date()
    });

    alert("✅ تم إضافة الحجز");
    window.location.href = "index.html";
  } catch (err) {
    console.error("خطأ عند حفظ الحجز:", err);
    alert("❌ حدث خطأ أثناء الحفظ");
  }
});
