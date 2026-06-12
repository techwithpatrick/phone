const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const targetId = this.getAttribute('href');
    const target = document.querySelector(targetId);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Booking form -> WhatsApp
const bookingForm = document.getElementById('bookingForm');

if (bookingForm) {
  bookingForm.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('custName').value;
    const phone = document.getElementById('custPhone').value;
    const service = document.getElementById('service').value;
    const technician = document.getElementById('technician').value;
    const date = document.getElementById('bookDate').value;
    const time = document.getElementById('bookTime').value;

    const message =
      Hi Anna! I'd like to book an appointment.\n +
      Name: ${name}\n +
      Phone: ${phone}\n +
      Service: ${service}\n +
      Technician: ${technician}\n +
      Date: ${date}\n +
      Time: ${time}\n +
      I understand a ₦10,000 booking fee is required to confirm my slot.;

    const url = https://wa.me/2347042695981?text=${encodeURIComponent(message)};
    window.open(url, '_blank');
  });
}