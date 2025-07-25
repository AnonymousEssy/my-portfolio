<script>
  function validateForm() {
    let name = document.forms["contactForm"]["name"].value;
    if (name == "") {
      alert("Please enter your name.");
      return false;
    }
  }
</script>
