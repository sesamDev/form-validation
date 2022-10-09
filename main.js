class FormValidation {
  static emailInput = document.getElementById("inputEmail");
  static passwordInput = document.getElementById("inputPassword");
  static passwordRepeatInput = document.getElementById("inputPasswordRepeat");
  static zipcodeInput = document.getElementById("inputZipcode");
  static countryInput = document.getElementById("inputCountry");
  static submitBtn = document.getElementById("submitBtn");
  static emailErrorMsg = " ";
  static passwordErrorMsg = " ";
  static passwordRepeatErrorMsg = " ";
  static zipcodeErrorMsg = " ";
  static countryErrorMsg = " ";

  static initValidation() {
    this.inputListners();
  }

  static allFieldsValid() {
    this.emailValid();
    this.passwordValid();
    this.repeatedPasswordValid();
  }
  static emailValid() {
    if (this.emailInput.value === "") {
      this.emailErrorMsg = "Email is required";
      return false;
    }
    // Check for "@""
    if (!/@/.test(this.emailInput.value)) {
      this.emailErrorMsg = "Missing @";
      return false;
    }
    // Check for "@*"
    if (!/@[a-zA-Z0-1]/.test(this.emailInput.value)) {
      this.emailErrorMsg = "Missing domain after @";
      return false;
    }
    // Check for ".*"
    if (!/(?=@).\w+\.\w+/.test(this.emailInput.value)) {
      this.emailErrorMsg = "Missing top level domain eg. '.com'";
      return false;
    }
    // "*@"
    if (!/.(?=@)/.test(this.emailInput.value)) {
      this.emailErrorMsg = "Missing characters before @";
      return false;
    } else {
      this.emailErrorMsg = "";
      return true;
    }
  }
  static passwordValid() {
    if (this.passwordInput.value === "") {
      this.passwordErrorMsg = "Password is required";
      return false;
    }
    // Min length is 8 characters
    if (!/.{8}/.test(this.passwordInput.value)) {
      this.passwordErrorMsg = "Minimum password length is 8";
      return false;
    }
    // Must contain a special character
    if (!/[ !"#$%&'\(\)*\+,-.\/:;<=>?@\[\]^_`{\|}~]/.test(this.passwordInput.value)) {
      this.passwordErrorMsg = 'Must contain a special character eg. "!"#$%&"';
      return false;
    }
    // Must contain a digit
    if (!/[0-9]/.test(this.passwordInput.value)) {
      this.passwordErrorMsg = "Must contain a digit";
      return false;
    }
    // Must contain lowercase letter
    if (!/[a-z]/.test(this.passwordInput.value)) {
      this.passwordErrorMsg = "Must contain a lowercase letter";
      return false;
    }
    // Must contain uppercase letter
    if (!/[A-Z]/.test(this.passwordInput.value)) {
      this.passwordErrorMsg = "Must contain a uppercase letter";
      return false;
    } else {
      return true;
    }
  }

  static repeatedPasswordValid() {
    if (this.passwordRepeatInput.value == "") {
      this.passwordRepeatErrorMsg = "Repeat password";
      return false;
    }
    if (this.passwordInput.value !== this.passwordRepeatInput.value || this.passwordRepeatInput.value == "") {
      this.passwordRepeatErrorMsg = "Passwords do not match";
      return false;
    } else {
      return true;
    }
  }

  static zipcodeValid() {
    if (this.zipcodeInput.value === "") {
      this.zipcodeErrorMsg = "Zipcode is required";
      return false;
    }
    if (!/[0-9]{5}/.test(this.zipcodeInput.value)) {
      this.zipcodeErrorMsg = "Must contain 5 digits eg. 12345";
      return false;
    } else {
      return true;
    }
  }

  static countryValid() {
    if (this.countryInput.value === "") {
      this.countryErrorMsg = "Country is required";
      return false;
    }
    if (/[0-9 !"#$%&'\(\)*\+,-.\/:;<=>?@\[\]^_`{\|}~]/.test(this.countryInput.value)) {
      this.countryErrorMsg = "Can only contain letters";
      return false;
    }
    if (!/[a-zA-Z\.]{4}/.test(this.countryInput.value)) {
      this.countryErrorMsg = "Minimum letters is four";
      return false;
    } else {
      return true;
    }
  }

  static showError(element, errorMsg) {
    console.log(element.classList.remove("hide"));
    element.innerText = errorMsg;
  }
  static hideError(element) {
    element.classList.add("hide");
    element.innerText = "";
  }

  static inputListners() {
    this.emailInput.addEventListener("input", (e) => {
      if (this.emailValid()) {
        this.hideError(e.target.previousElementSibling);
      }
      if (!this.emailValid()) {
        this.showError(e.target.previousElementSibling, this.emailErrorMsg);
      }
    });
    this.passwordInput.addEventListener("input", (e) => {
      if (this.passwordValid()) {
        this.hideError(e.target.previousElementSibling);
      }
      if (!this.passwordValid()) {
        this.showError(e.target.previousElementSibling, this.passwordErrorMsg);
      }
    });
    this.passwordRepeatInput.addEventListener("input", (e) => {
      if (this.repeatedPasswordValid()) {
        this.hideError(e.target.previousElementSibling);
      }
      if (!this.repeatedPasswordValid()) {
        this.showError(e.target.previousElementSibling, this.passwordRepeatErrorMsg);
      }
    });
    this.zipcodeInput.addEventListener("input", (e) => {
      if (this.zipcodeValid()) {
        this.hideError(e.target.previousElementSibling);
      }
      if (!this.zipcodeValid()) {
        this.showError(e.target.previousElementSibling, this.zipcodeErrorMsg);
      }
    });
    this.countryInput.addEventListener("input", (e) => {
      if (this.countryValid()) {
        this.hideError(e.target.previousElementSibling);
      }
      if (!this.countryValid()) {
        this.showError(e.target.previousElementSibling, this.countryErrorMsg);
      }
    });
    this.submitBtn.addEventListener("click", () => {
      console.log("Submit");
      this.allFieldsValid();
    });
  }
}

FormValidation.initValidation();
