<?php include( './includes/header.php'); ?>
 

<div class="container">

    <div class="row">

        <div class="col-xs-12">

        <div class="regDataShow">

            <h1>Create Account</h1>

            <form class="registerDataInput" id="validRegister" action="javascript:void(0)">

                <div class="form-group">
                    <label for="emailText">Sexo</label>
                    <div class="boxSelectStyle account">

                        <p class="showSelection"> <span class="qty">SEXO</span> <span class="slsexo"></span> </p>

                        <ul class="listNumbersUl account">

                            <li data-asign="slsexo">Masculino</li>
                            <li data-asign="slsexo">Femenino</li>


                        </ul>
                        <input id="slsexo" type="hidden" value="1">
                    </div>
                </div>





                <div class="form-group">
                    <label for="emailText">E mail</label>
                    <input type="text" id="" name="emailText">
                </div>



                <div class="form-group">
                    <label for="nameText">Nombre</label>
                    <input type="text" id="" name="nameText">
                </div>



                <div class="form-group">
                    <label for="apellidoText">Apellido</label>
                    <input type="text" id="" name="apellidoText">
                </div>





                <div class="form-group">
                    <label for="emailText">Cumpleaños</label>


                    <div class="col-xs-4">


                        <div class="boxSelectStyle account">

                            <p class="showSelection"> <span class="qty">DD</span> <span class="sldia"></span> </p>

                            <ul class="listNumbersUl account">

                                <li data-asign="sldia">01</li>
                                <li data-asign="sldia">02</li>
                                <li data-asign="sldia">03</li>
                                <li data-asign="sldia">04</li>
                                <li data-asign="sldia">05</li>
                                <li data-asign="sldia">06</li>

                            </ul>
                            <input id="sldia" type="hidden" value="1">
                        </div>





                    </div>
                    <div class="col-xs-4">


                        <div class="boxSelectStyle account">

                            <p class="showSelection"> <span class="qty">MM</span> <span class="slmes"></span> </p>

                            <ul class="listNumbersUl account">

                                <li data-asign="slmes">ENERO</li>
                                <li data-asign="slmes">FEBRERO</li>
                                <li data-asign="slmes">MARZO</li>
                                <li data-asign="slmes">ABRIL</li>
                                <li data-asign="slmes">MAYO</li>
                                <li data-asign="slmes">JUNIO</li>

                            </ul>
                            <input id="slmes" type="hidden" value="1">
                        </div>



                    </div>
                    <div class="col-xs-4">


                        <div class="boxSelectStyle account">

                            <p class="showSelection"> <span class="qty">AN</span> <span class="slano"></span> </p>

                            <ul class="listNumbersUl account">

                                <li data-asign="slano">1990</li>
                                <li data-asign="slano">1991</li>
                                <li data-asign="slano">1992</li>
                                <li data-asign="slano">1993</li>
                                <li data-asign="slano">1994</li>
                                <li data-asign="slano">1995</li>

                            </ul>
                            <input id="slano" type="hidden" value="1">
                        </div>



                    </div>
                </div>





                <div class="form-group">
                    <label for="passText">Contraseña</label>
                    <input type="text" id="" name="passText">
                </div>





                <div class="form-group">
                    <label for="passText">Confirmar Contraseña</label>
                    <input type="text" id="" name="passText">
                </div>





                <button class="actionRegisterButtons"> REGISTRARSE </button>





            </form>





        </div>

        </div> <!-- col xs 12 -->

    </div>


</div>
<!-- container -->



<?php include( './includes/footer.php'); ?>