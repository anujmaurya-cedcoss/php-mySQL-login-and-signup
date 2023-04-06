// function to validate e-mail
function validateEmail($email) {
    let emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    return emailReg.test($email);
}
function validateName(name) {
    let nameReg = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/;
    return nameReg.test(name);
}
$(document).ready(function () {
    // actions on register button
    $(document).on('click', ".register-btn", function () {
        name1 = $(".form-name").val();
        mail = $(".form-email").val();
        pass = $(".form-pass").val();
        repass = $(".form-repass").val();

        if (!validateName(name1)) {
            // show name error
            $(".form-name").css('border-color', 'red');
            $(".form-email").css('border-color', 'black');
            $(".form-repass").css('border-color', 'black');
        } else if (!validateEmail(mail)) {
            // show e-mail error message
            $(".form-email").css('border-color', 'red');
            $(".form-name").css('border-color', 'black');
            $(".form-repass").css('border-color', 'black');
        } else if (!pass == repass || (pass.length < 1) || (repass.length < 1)) {
            // show password error
            $(".form-repass").css('border-color', 'red');
            $(".form-email").css('border-color', 'black');
            $(".form-name").css('border-color', 'black');
        } else {
            // make an ajax call
            $.ajax({
                type: "POST",
                url: "./db_conn.php",
                data: { 'name': name1, 'mail': mail, 'pass': pass },
                dataType: 'text',
                success: function (result) {
                    window.location.href = "./login.php";
                }
            });
        }
    });

    // actions on login button
    $(document).on('click', '.login-btn', function () {
        mail = $(".login-email").val();
        pass = $(".login-pass").val();
        $.ajax({
            type: "POST",
            url: "./login_check.php",
            data: { 'mail': mail, 'pass': pass },
            dataType: 'text'
        }).done(function (res) {
            window.location.href = "./display_output.php";
        });
    });
});