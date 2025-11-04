// Form submission alert (simple feedback)
document.querySelector(".contact-form").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Thank you for contacting Sasha Seeds! We will get back to you soon.");
});
<script>
  function openCertificate() {
    document.getElementById("certificate-popup").style.display = "block";
    document.getElementById("popup-img").src = document.getElementById("certificate-img").src;
  }

  function closeCertificate() {
    document.getElementById("certificate-popup").style.display = "none";
  }
</script>
, // FAQ toggle
document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
    const item = button.parentElement;
    item.classList.toggle('active');
  });
});
