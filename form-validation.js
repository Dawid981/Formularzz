
(function () {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
      .forEach(function (form) {
        form.addEventListener('submit', function (event) {
          if (!form.checkValidity()) {
            event.preventDefault()
            event.stopPropagation()
          }
  
          form.classList.add('was-validated')
        }, false)
      })
    })() 

    function myFunction() {
        
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var Adres = document.getElementById("Address").value;
        var datebirth = document.getElementById("datebirth").value;
        var Miasto = document.getElementById("City").value;
      

        if(firstName == 0 || lastName == 0 || Adres == 0 || datebirth  == 0 || City == 0) {
            alert("Nie podałeś danych");
        }

        else {

            alert("Twoje dane: " + "\n" +
            "Imie: " + firstName + "\n" +
            "Nazwisko: " + lastName + "\n" +
            "Adres: " + Adres + "\n" +
            "Data urodzenia: " + datebirth + "\n" +
            "Miasto: " + Miasto + "\n" +
            "Zaszczepiony: " + form.zaszczepiony.value)
        }
    }
      
