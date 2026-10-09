import "./style.css";

const WA = "966500608088";
const wa = (text) => `https://wa.me/${WA}?text=${encodeURIComponent(text)}`;

// mobile nav toggle
const btn = document.querySelector("[data-nav-toggle]");
const menu = document.querySelector("[data-mobile-menu]");
btn?.addEventListener("click", () => {
  menu?.classList.toggle("hidden");
  menu?.classList.toggle("flex");
});
menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  menu.classList.add("hidden");
  menu.classList.remove("flex");
}));

// product order buttons -> WhatsApp with prefilled message
document.querySelectorAll("[data-order]").forEach((el) => {
  el.href = wa(`السلام عليكم، أبغى أطلب ${el.dataset.order} من ذبايح ابن عويش`);
  el.target = "_blank";
});

// city cards -> WhatsApp with city
document.querySelectorAll("[data-city]").forEach((el) => {
  el.href = wa(`السلام عليكم، أنا في ${el.dataset.city} وأبغى أطلب ذبيحة`);
  el.target = "_blank";
});

// current year in footer
document.querySelectorAll("[data-year]").forEach((el) => (el.textContent = String(new Date().getFullYear())));
