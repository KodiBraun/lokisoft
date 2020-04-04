<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />
    <title>LokiSoft.ru - Пиар файлов</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />

    <link rel="shortcut icon" href="assets/images/favicon.ico">

    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- MetisMenu CSS -->
    <link href="assets/css/metisMenu.min.css" rel="stylesheet">
    <!-- Icons CSS -->
    <link href="assets/css/icons.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="assets/css/style.css" rel="stylesheet">

</head>
<body>
<!-- HOME -->
<section>
    <div class="container">
        <div class="row">
            <div class="col-sm-12">

                <div class="wrapper-page">

                    <div class="m-t-40 card-box">
                        <div class="text-center">
                            <h2 class="text-uppercase m-t-0 m-b-30">
                                <a href="/main" class="text-success">
                                   
                                </a>
                            </h2>
                            <!--<h4 class="text-uppercase font-bold m-b-0">Sign In</h4>-->
                        </div>
                        <div class="account-content">
                            <div class="text-center m-b-20">
                                <div class="m-b-20">

                                </div>

                                <p class="text-muted m-b-0 font-13 line-h-24">Пиар любых файлов, после пополнения баланса, загрузите Ваш файл на любой файлообменник и вставьте ссылку в поле, после нажмите купить.<br>После пиара, Вам придет уведомление Вконтакте, если Вы подключите бота в настройках <a href="/profile">профиля</a>.</p>
                                <p class="text-muted"><mark>Цена: 250р.</mark></p>

                            </div>

                            <form class="form-horizontal" action="/buypiar" method="POST" enctype="multipart/form-data">
                                @csrf
                                <div class="form-group m-b-20">
                                    <div class="col-xs-12">
                                        <label for="password">Текущий баланс: {{ $info_user->balance }}р.</label>
                                        <input class="form-control" type="text" id="text" required="" placeholder="Ссылка на файл" name="file">
                                    </div>
                                </div>
                                <div class="form-group account-btn text-center m-t-10">
                                    <div class="col-xs-12">
                                        <button class="btn btn-lg btn-primary btn-block" type="submit">Купить</button>
                                    </div>
                                </div>
                            </form>
                            <div class="clearfix"></div>
                        </div>
                    </div>
                    <div class="row m-t-50">
                        <div class="col-sm-12 text-center">
                            <p class="text-muted">Нет средств?<a href="pages-login.html" class="text-dark m-l-5"> Пополнить</a></p>
                        </div>
                    </div>
                </div>
                <!-- end wrapper -->
            </div>
        </div>
    </div>
</section>
<!-- END HOME -->

<!-- js placed at the end of the document so the pages load faster -->
<script src="assets/js/jquery-2.1.4.min.js"></script>
<script src="assets/js/bootstrap.min.js"></script>
<script src="assets/js/metisMenu.min.js"></script>
<script src="assets/js/jquery.slimscroll.min.js"></script>

<!-- App Js -->
<script src="assets/js/jquery.app.js"></script>

</body>
</html>