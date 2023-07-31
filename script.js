function generatePassword() {
    const length = document.getElementById("length").value;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSymbols = document.getElementById("includeSymbols").checked;
  
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberCharset = "0123456789";
    const symbolCharset = "!@#$%^&*()-_=+[]{}|;:,.<>?";
  
    let password = charset;
    if (includeNumbers) {
      password += numberCharset;
    }
    if (includeSymbols) {
      password += symbolCharset;
    }
  
    let result = "";
    for (let i = 0; i < length; i++) {
      result += password.charAt(Math.floor(Math.random() * password.length));
    }
  
    document.getElementById("password").value = result;
  }
  