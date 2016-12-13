<?php include( './includes/header.php'); ?>



<div class="container">

    <div class="resume_cart">

        <div class="row topNavActionsCart"> 

            <div class="col-xs-12 col-sm-6">
                <h1 class="carTitleBag">YOUR SHOPPING BAG</h1>
            </div>

            <div class="col-xs-12 col-sm-6">
                <button onclick="location.href='./co.php';" class="classicButton cartSendAction"> CHECKOUT </button>
            </div>

        </div>


        <div class="row guide_titles hidden-xs">
            <div class="col-xs-8">
                <h4>PRODUCTO</h4>
            </div>
            <div class="col-xs-2">
                <h4>CANT</h4>
            </div>
            <div class="col-xs-2">
                <h4>TOTAL</h4>
            </div>
        </div>



<!-- producto -->
        <div class="row showp">
            <div class="col-xs-8">

                <div class="row">
                    <div class="col-xs-4">
                        <a href="./product_detail.php"><img class="img-responsive" src="./images/catalog/c_1.jpg" alt="">
                        </a>
                    </div>
                    <div class="col-xs-8">
                        <div class="r_title">
                            <h2>PREMIUM DOCKERS® ALPHA STRETCH KHAKI, SLIM TAPERED</h2>
                            <ul class="more_info">
                                <li>
                                    <p>Size: <span class="cblack"> 31W X 30L </span>
                                    </p>
                                </li>
                                <li>
                                    <p>Color: <span class="cblack"> Nightwatch Blue  </span>
                                    </p>
                                </li>
                                <li><strike>$2,500.00</strike><span class="cblack"> $1300.00 </span> </li>
                                <li><small>Style #  182010037</small> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="edit_actions">
                    <li class="removeActionLink"><a class="removeFromCart" href="#/">Remover</a></li>
                </ul>

            </div>

            <div class="col-xs-4 col-sm-2 txtRightMq">

                <strong class="ex-bold hidden-sm hidden-md hidden-lg"> 1,300.00 </strong>

                <div class="boxSelectStyle">

                    <p class="showSelection"> <span class="qty">QTY</span> <span class="itemCart1">1</span> </p>

                    <ul class="listNumbersUl">
                        <li data-asign="itemCart1">1</li>
                        <li data-asign="itemCart1">2</li>
                        <li data-asign="itemCart1">3</li>
                        <li data-asign="itemCart1">4</li>
                        <li data-asign="itemCart1">5</li>
                        <li data-asign="itemCart1">6</li>
                    </ul>
                    <input id="itemCart1" type="hidden" value="1"> <!-- recibe valor seleccionado --> 
                </div>

            </div>

            <div class="col-xs-2 hidden-xs"> <strong class="ex-bold"> 1,300.00 </strong> </div>

        </div>
<!-- /producto -->








<!-- producto -->
        <div class="row showp">
            <div class="col-xs-8">

                <div class="row">
                    <div class="col-xs-4">
                        <a href="./product_detail.php"><img class="img-responsive" src="./images/catalog/c_2.jpg" alt="">
                        </a>
                    </div>
                    <div class="col-xs-8">
                        <div class="r_title">
                            <h2>PREMIUM DOCKERS® ALPHA STRETCH KHAKI, SLIM TAPERED</h2>
                            <ul class="more_info">
                                <li>
                                    <p>Size: <span class="cblack"> 31W X 30L </span>
                                    </p>
                                </li>
                                <li>
                                    <p>Color: <span class="cblack"> Nightwatch Blue  </span>
                                    </p>
                                </li>
                                <li><strike>$2,200.00</strike><span class="cblack"> $1100.00 </span> </li>
                                <li><small>Style #  182010037</small> </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <ul class="edit_actions">
                    <li class="removeActionLink"><a class="removeFromCart" href="#/">Remover</a></li>
                </ul>

            </div>

            <div class="col-xs-4 col-sm-2 txtRightMq">

                <strong class="ex-bold hidden-sm hidden-md hidden-lg"> 1,100.00 </strong>

                <div class="boxSelectStyle">

                    <p class="showSelection"> <span class="qty">QTY</span> <span class="itemCart1">1</span> </p>

                    <ul class="listNumbersUl">
                        <li data-asign="itemCart1">1</li>
                        <li data-asign="itemCart1">2</li>
                        <li data-asign="itemCart1">3</li>
                        <li data-asign="itemCart1">4</li>
                        <li data-asign="itemCart1">5</li>
                        <li data-asign="itemCart1">6</li>
                    </ul>
                    <input id="itemCart1" type="hidden" value="1"> <!-- recibe valor seleccionado --> 
                </div>

            </div>

            <div class="col-xs-2 hidden-xs"> <strong class="ex-bold"> 1,100.00 </strong> </div>

        </div>
<!-- /producto -->





        <div class="row resumeCartPrc">

            <div class="col-xs-12 col-sm-6">

                <div class="inputPromoCode">

                    <h3>Enter Promotional Code</h3>

                    <form action="./">
                        <div class="inputMail">
                            <input class="promoCodeCart" type="text" placeholder="">
                            <button class="sendPromoCode">APPLY</button>
                        </div>
                    </form>

                </div>

            </div>



            <div class="col-xs-12 col-sm-6">
                <div class="row">

                    <div class="col-xs-6 txtRight priceFinalCart">

                        <span>50% En La Segunda</span>
                        <span>SUBTOTAL</span>
                        <span>ENVÍO*</span>
                        <span class="totalPrc">TOTAL</span>

                    </div>

                    <div class="col-xs-6 txtRight priceFinalCart">

                        <span>- 1,100 MXN</span>
                        <span>  2,400 MXN</span>
                        <span>Gratis</span>
                        <span class="totalPrc">$ 2,400.00</span>

                    </div>

                </div>
            </div>

        </div>





        <div class="row topNavActionsCart"> 

            <div class="col-xs-12 col-sm-6">
                <h3 class="carTitleBag"><a href="./catalog.php"><img src="./images/default/continue_arrow.png" alt="">CONTINUE SHOPPING</a></h3>
            </div>

            <div class="col-xs-12 col-sm-6">
                <button onclick="location.href='./co.php';" class="classicButton cartSendAction"> CHECKOUT </button>
            </div>

        </div>





    </div>



</div>


<?php include( './includes/footer.php'); ?>