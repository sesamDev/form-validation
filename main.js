class FormValidation {
  static emailInput = document.getElementById("inputEmail");
  static passwordInput = document.getElementById("inputPassword");
  static passwordRepeatInput = document.getElementById("inputPasswordRepeat");
  static zipcodeInput = document.getElementById("inputZipcode");
  static countryInput = document.getElementById("inputCountry");
  static submitBtn = document.getElementById("submitBtn");
  static errorMsg = "";
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
      return console.log("Email is required");
    }
    // Check for "@""
    if (!/@/.test(this.emailInput.value)) {
      return console.log("Missing @");
    }
    // Check for "@*"
    if (!/@[a-zA-Z0-1]/.test(this.emailInput.value)) {
      return console.log("Missing domain after @");
    }
    // Check for ".*"
    if (!/(?=@).\w+\.\w+/.test(this.emailInput.value)) {
      return console.log("Missing top level domain eg. '.com'");
    }
    // "*@"
    if (!/.(?=@)/.test(this.emailInput.value)) {
      return console.log("Missing characters before @");
    }
  }
  static passwordValid() {
    // Min length is 8 characters
    if (!/.{8}/.test(this.passwordInput.value)) {
      return console.log("Minimum password length is 8");
    }
    // Must contain a special character
    if (!/[ !"#$%&'\(\)*\+,-.\/:;<=>?@\[\]^_`{\|}~]/.test(this.passwordInput.value)) {
      return console.log('Must contain a special character eg. "!"#$%&"');
    }
    // Must contain a digit
    if (!/[0-9]/.test(this.passwordInput.value)) {
      return console.log("Must contain a digit");
    }
    // Must contain lowercase letter
    if (!/[a-z]/.test(this.passwordInput.value)) {
      return console.log("Must contain a lowercase letter");
    }
    // Must contain uppercase letter
    if (!/[A-Z]/.test(this.passwordInput.value)) {
      return console.log("Must contain a uppercase letter");
    }
  }

  static repeatedPasswordValid() {
    if (this.passwordRepeatInput.value == "") {
      return console.log("Repeat password");
    }
    if (this.passwordInput.value !== this.passwordRepeatInput.value || this.passwordRepeatInput.value == "") {
      return console.log("Passwords do not match");
    }
  }

  static inputListners() {
    this.emailInput.addEventListener("input", () => {
      this.emailValid();
    });
    this.passwordInput.addEventListener("input", () => {
      this.passwordValid();
    });
    this.passwordRepeatInput.addEventListener("input", () => {
      this.repeatedPasswordValid();
    });
    this.zipcodeInput.addEventListener("input", () => {
      console.log("zipcode input");
    });
    this.countryInput.addEventListener("input", () => {
      console.log("country input");
    });
    this.submitBtn.addEventListener("click", () => {
      console.log("Submit");
      this.allFieldsValid();
    });
  }
}

FormValidation.initValidation();
