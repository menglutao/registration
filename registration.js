// remove jquery from this funtion check strength
// refactor the code of checkStrength function to make it into a pure function
//Add some basic test cases

function IsEmail(email) {
  var regex =
    /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  /*In the regular expression ([a-zA-Z0-9]{2,4})+, the character set [a-zA-Z0-9] must appear between 2 and 4 times consecutively*/
  return regex.test(email);
}

// Check password if contains certain characters or not and return the result
function checkPassword(password) {
  let strength = 0;
  const length = password.length;
  const hasLowerCase = /[a-z]+/.test(password);
  const hasUpperCase = /[A-Z]+/.test(password);
  const hasNumber = /([0-9])+/.test(password);
  const hasSpecialChar = /([!,%,&,@,#,$,^,*,?,_,~])+/.test(password);
  // console.log(length, hasLowerCase, hasUpperCase, hasNumber, hasSpecialChar)
  const passwordResult = {
    length,
    hasLowerCase,
    hasUpperCase,
    hasNumber,
    hasSpecialChar,
  };
  return passwordResult;
}

// Calculate the strength of the password
function calculateStrength(passwordResult) {
  let strength = 0;
  if (passwordResult.length > 7) {
    strength += 1;
  }
  if (passwordResult.hasLowerCase) {
    strength += 1;
  }
  if (passwordResult.hasUpperCase) {
    strength += 1;
  }
  if (passwordResult.hasNumber) {
    strength += 1;
  }
  if (passwordResult.hasSpecialChar) {
    strength += 1;
  }
  return strength;
}

// Check the strength of the password
function checkStrength(strength) {
  return strength > 4;
}

// Update the UI of the password strength
function updatePasswordStrengthUI(passwordResult) {
  if (passwordResult.length > 7) {
    $("#length").addClass("valid");
  } else {
    $("#length").removeClass("valid");
  }
  if (passwordResult.hasLowerCase) {
    $("#lowercase").addClass("valid");
  } else {
    $("#lowercase").removeClass("valid");
  }
  if (passwordResult.hasUpperCase) {
    $("#uppercase").addClass("valid");
  } else {
    $("#uppercase").removeClass("valid");
  }
  if (passwordResult.hasNumber) {
    $("#decimal").addClass("valid");
  } else {
    $("#decimal").removeClass("valid");
  }

  if (passwordResult.hasSpecialChar) {
    $("#special").addClass("valid");
  } else {
    $("#special").removeClass("valid");
  }
}

$(document).ready(function () {
  $("#email").blur(function () {
    var email = $("#email").val();
    if (IsEmail(email) == false) {
      $("#sign-up").attr("disabled", true);
    } else {
      $("#sign-up").attr("disabled", false);
    }
  });
  $("#password").keyup(function () {
    var password = $("#password").val();
    console.log(password);
    const passwordResult = checkPassword(password);
    const strength = calculateStrength(passwordResult);
    updatePasswordStrengthUI(passwordResult);
    if (checkStrength(strength) == false) {
      $("#sign-up").attr("disabled", true);
    } else {
      $("#sign-up").attr("disabled", false);
    }
  });
});
