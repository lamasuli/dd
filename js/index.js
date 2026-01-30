import { db } from "./firebase.js";
import { collection, query, where, getDocs } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const searchBtn = document.getElementById("searchBtn");
const addBtn = document.getElementById("addBtn");
const results = document.getElementById("results");

let currentPhone = "";

searchBtn.addEventListener("click", async () => {
  const phone = document.getElementById("phone").value.trim();
  results.innerHTML = "";
  addBtn.style.display = "none";

  if (!phone) return alert("أدخل رقم الجوال");

  currentPhone = phone;

  const q = query(collection(db, "reservations"), where("phone", "==", phone));
  const snap = await getDocs(q);

  if (snap.empty) {
    results.innerHTML = "<p>لا يوجد حجوزات لهذا الرقم</p>";
  } else {
    results.innerHTML = `<p>عدد الحجوزات: ${snap.size}</p>`;
    snap.forEach(doc => {
      const r = doc.data();
      results.innerHTML += `<div class="card">📅 ${r.date}<br>📝 ${r.notes || "-"}</div>`;
    });
  }

  addBtn.style.display = "block";
});

addBtn.addEventListener("click", () => {
  window.location.href = `add.html?phone=${currentPhone}`;
});
