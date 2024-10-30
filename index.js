const faqItems = document.querySelectorAll(".toggle");

faqItems.forEach((item) => {
  const button = item.querySelector(".toggle-button"); // Find the button inside each item

  button.addEventListener("click", () => {
    item.classList.toggle("active");
  });
});

// DROP DOWN
// const dropDowns = Array.from(document.querySelectorAll('#header .services-dropdown'));
//     for (const item of dropDowns) {
//         const onClick = () => {
//         item.classList.toggle('dd-active')
//     }
//     item.addEventListener('click', onClick)
//   }

const dropDowns = Array.from(document.querySelectorAll('#header .services-dropdown'));
for (const item of dropDowns) {
    item.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent page jump
        item.querySelector('.dropdown').classList.toggle('dd-active');
    });
}



// SCROLL EFFECT
window.addEventListener("scroll", () => {
  var header = document.getElementById("header");
  var firstRow = document.getElementById("firstRow");
  var logo = document.getElementById("logo");

  if (window.scrollY > 100) {
    header.classList.add("scroll");
  } else {
    header.classList.remove("scroll");
  }
});

// FAQ
// const faqItems = Array.from(document.querySelectorAll(".toggle"));
// for (const item of faqItems) {
//   const onClick = () => {
//     item.classList.toggle("active");
//   };
//   item.addEventListener("click", onClick);
// }

// Scroll effect

// document.addEventListener("scroll", (e) => {
//   const scroll = document.documentElement.scrollTop;
//   if (scroll > 100) {
//     document.querySelector("body").classList.add("scroll");
//   } else {
//     document.querySelector("body").classList.remove("scroll");
//   }
// });

// DISPLAY AND HIDE DROPDOWN
// // Select the dropdown elements
// const servicesDropdown = document.querySelector('.services-dropdown');
// const dropdownMenu = document.querySelector('.dropdown');

// // Function to show the dropdown
// function showDropdown() {
//   const dropdownMenu = document.querySelector('.dropdown');
//   dropdownMenu.style.opacity = '1';
//   dropdownMenu.style.visibility = 'visible';
//   dropdownMenu.style.transform = 'scaleY(1)';
// }

// // Function to hide the dropdown
// function hideDropdown() {
//   dropdownMenu.style.opacity = '0';
//   dropdownMenu.style.visibility = 'hidden';
//   dropdownMenu.style.transform = 'scaleY(0)';
// }

// // Add event listeners to show the dropdown on hover
// servicesDropdown.addEventListener('mouseenter', showDropdown);
// dropdownMenu.addEventListener('mouseenter', showDropdown);

// // Add event listeners to hide the dropdown when leaving the area
// servicesDropdown.addEventListener('mouseleave', hideDropdown);
// dropdownMenu.addEventListener('mouseleave', hideDropdown);
