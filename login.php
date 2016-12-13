<?php include('./includes/header.php'); ?>


<div class="container">

    <div class="row kitLoginActions">


        <div class="col-xs-12 col-sm-6 brdLogReg">


            <div class="formLoginActions">

                <h3>Sign In</h3>

                <form action="javascript:void(0)" id="formaRegistro">

                    <div class="form-group">
                        <label for="emailText">Email</label>
                        <input type="text" id="" name="emailText">
                    </div>


                    <div class="form-group">
                        <label class="fPasswordInp" for="passwordText">Password <span><a href="./lostPassword.php">Forgot Password?</a></span>
                        </label>
                        <input type="password" id="" name="passwordText">
                    </div>


                    <div class="form-group">
                        <button class="actionLoginButtons">SIGN IN</button>

                        <p class="infoTextLoginTerms">By connecting, you agree to our <a href="">Privacy Policy</a> and
                            <a href="#/">Terms &amp; Conditions</a>. </p>

                    </div>

                </form>


            </div>


        </div>


        <div class="col-xs-12 col-sm-6">


            <div class="createActionLink">

                <h3>Create Account</h3>

                <button onclick="location.href='./register.php';" class="actionLoginButtons">CREATE ACCOUNT</button>


            </div>


        </div>
        <!-- col-xs-6 -->


    </div>


</div>


<?php include('./includes/footer.php'); ?>


<script>
    // SOLO APLICA COMO CAMBIO DE TEXTO INFORMATIVO
    $(".signinBox").text("Bienvenido Luis");  //Simula mensaje bienvenida
    $(".signDemo").text("SIGN OUT"); // Simula mensaje SING OUT
    $(".welcomeMsgMB").text("Bienvenido Sergio");  //Simula mensaje bienvenida 
    //Se dejo en este archivo por que no realiza cambios o funcionalidad especifica
</script>