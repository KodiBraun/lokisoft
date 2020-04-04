<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />
    <title>LokiSoft.ru - Скрипты SAMP</title>
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <link rel="shortcut icon" href="assets/images/favicon.ico">
    <!--Morris Chart CSS -->
    <link rel="stylesheet" href="assets/plugins/morris/morris.css">
    <!-- Bootstrap core CSS -->
    <link href="assets/css/bootstrap.min.css" rel="stylesheet">
    <!-- MetisMenu CSS -->
    <link href="assets/css/metisMenu.min.css" rel="stylesheet">
    <!-- Icons CSS -->
    <link href="assets/css/icons.css" rel="stylesheet">
    <!-- Custom styles for this template -->
    <link href="assets/css/style.css" rel="stylesheet">
</head>
<body >
<div id="page-wrapper">
    <!-- Top Bar Start -->
    <div class="topbar">
        <!-- LOGO -->
        <div class="topbar-left">
            <div class="">
               <a href="/main" class="logo">
                    <img src="assets/images/logo.png" width="270"  alt="logo" class="logo-lg " />  
                    <img src="assets/images/logo_sm.png" alt="logo" class="logo-sm hidden" />
                </a>
            </div>
        </div>
        <!-- Top navbar -->
        <div class="navbar navbar-default" role="navigation">
            <div class="container">
                <div class="">
                    <!-- Mobile menu button -->
                    <div class="pull-left">
                        <button type="button" class="button-menu-mobile visible-xs visible-sm">
                            <i class="fa fa-bars"></i>
                        </button>
                        <span class="clearfix"></span>
                    </div>
                    <!-- Top nav left menu -->
		<ul class="nav navbar-nav hidden-sm hidden-xs top-navbar-items">
                        <li><a href="https://vk.me/join/AJQ1d8pacRW_wrgbKFDMZqzX" style="font-size:15pt" >Конференция ВК</a></li>
                    </ul>

                    <!-- Top nav Right menu -->
                    <ul class="nav navbar-nav navbar-right top-navbar-items-right pull-right">
                        <li class="dropdown top-menu-item-xs">
                            <a href="#" data-target="#" class="dropdown-toggle menu-right-item" data-toggle="dropdown" aria-expanded="true">
                                <i class="mdi mdi-bell"></i> <span class="label label-danger">{{ $news->count() }}</span>
                            </a>
                            <ul class="dropdown-menu p-0 dropdown-menu-lg">
                                <!--<li class="notifi-title"><span class="label label-default pull-right">New 3</span>Notification</li>-->
                                <li class="list-group notification-list" style="height: 267px;">
                                    <div class="slimscroll">
                                        <!-- list item-->
                                        @foreach($news as $new)
                                            <a href="javascript:void(0);" class="list-group-item">
                                                <div class="media">
                                                    <div class="media-left p-r-10">
                                                        <em class="fa fa-cog bg-warning"></em>
                                                    </div>
                                                    <div class="media-body">
                                                        <h5 class="media-heading">{{ $new->news }}</h5>
                                                        <p class="m-0">
                                                            <small>{{ $new->description }}</small>
                                                        </p>
                                                    </div>
                                                </div>
                                            </a>
                                        @endforeach
                                    </div>
                                </li>
                            </ul>
                        </li>
                        <li class="dropdown top-menu-item-xs">
                            <a href="" class="dropdown-toggle menu-right-item profile" data-toggle="dropdown" aria-expanded="true"><img src="@if($info_user->image == null) https://diskomir.ru/upload/iblock/daf/daff9848cd628b79d6b268cb827c254d.jpg @else {{$info_user->image }} @endif" alt="user-img" class="img-circle"> </a>
                            <ul class="dropdown-menu">
                                <li><a href="/profile"><i class="ti-user m-r-10"></i>Профиль</a></li>
                                <li><a href="javascript:void(0)"><i class="ti-settings m-r-10"></i>Настройки</a></li>
                                <li><a href="/payment" target="_blank"><i class=" mdi mdi-currency-usd"></i> Баланс: {{ $info_user->balance }}р.</a></li>
                                <li class="divider"></li>
                                <li><a href="{{ route('logout') }}"><i class="ti-power-off m-r-10"></i> Выйти</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div> <!-- end container -->
        </div> <!-- end navbar -->
    </div>
    <div class="page-contentbar">
        <!--left navigation start-->
        <aside class="sidebar-navigation">
            <div class="scrollbar-wrapper">
                <div>
                    <button type="button" class="button-menu-mobile btn-mobile-view visible-xs visible-sm">
                        <i class="mdi mdi-close"></i>
                    </button>
                    <!-- User Detail box -->
                    <div class="user-details">
                        <div class="pull-left">
                            <img src="@if($info_user->image == null) https://diskomir.ru/upload/iblock/daf/daff9848cd628b79d6b268cb827c254d.jpg @else {{$info_user->image }} @endif" alt="" class="thumb-md img-circle">
                        </div>
                        <div class="user-info">
                            <a href="#">{{ $info_user->name }}</a>
                            <p class="text-muted m-0">Баланс: {{ $info_user->balance }} р.<a href="/payment">(Пополнить)</a></p>
                        </div>
                    </div>
                    <!--- End User Detail box -->
                    <!-- Left Menu Start -->
                    <ul class="metisMenu nav" id="side-menu">
                        <li><a href="/main"><i class="ti-home"></i>Главная</a></li>
                        <li><a href="/stealer"> <i class="ti-paint-bucket"></i>Stealer SA:MP</a></li>
                        <li><a href="javascript: void(0);" aria-expanded="true"><i class="ti-spray"></i>Clipper SA:MP<span class="fa arrow"></a>
                            <ul class="nav-second-level nav" aria-expanded="true">
                                <li><a href="/clipper">История переводов</a></li>
                                <li><a href="/settings">Настройка</a></li>
                            </ul>
                        </li>
                        <li><a href="/freeloader"><i class="mdi mdi-arrow-down-bold-hexagon-outline"></i>Loader[LUA FREE]</a></li>
                        <li><a href="/gluer"><i class="ti-share"></i>Склейщик - ASI | SF</a></li>
                        <li><a href="/piar"><i class="mdi mdi-cash"></i>Пиар файлов</a></li>
                    </ul>
                </div>
            </div><!--Scrollbar wrapper-->
        </aside>
        <div id="page-right-content">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12">
                        <div class="card-box widget-inline">
                            <div class="row">
                                <div class="col-lg-3 col-sm-6">
                                    <div class="widget-inline-box text-center">
                                        <h3 class="m-t-10"><i class="text-primary mdi mdi-inbox"></i> <b data-plugin="counterup">@if($info_user->stealer == 0) Не имеется @else {{ $logs->count() }}@endif</b></h3>
                                        <p class="text-muted">Логов Stealer SA:MP</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="widget-inline-box text-center">
                                        <h3 class="m-t-10"><i class="text-custom mdi mdi-currency-usd"></i> <b data-plugin="counterup">@if($info_user->clipper == 0) Не имеется @else {{ $money }}@endif</b></h3>
                                        <p class="text-muted">Получено виртов</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="widget-inline-box text-center">
                                        <h3 class="m-t-10"><i class="text-info mdi mdi-account"></i> <b data-plugin="counterup">@if($info_user->clipper == 0) Не имеется @else {{ $info_user->victims }}@endif</b></h3>
                                        <p class="text-muted">Запусков Clipper SA:MP</p>
                                    </div>
                                </div>

                                <div class="col-lg-3 col-sm-6">
                                    <div class="widget-inline-box text-center b-0">
                                        <h3 class="m-t-10"><i class="text-danger mdi mdi-download"></i> <b data-plugin="counterup">@if($info_user->loader == 0) Не имеется @else {{ $count_loader }}@endif</b></h3>
                                        <p class="text-muted">Загрузок Loader SA:MP</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 class="header-title m-t-0 m-b-20">Скрипты</h4>
                        </div>
                    </div> <!-- end row -->
                    <div class="row">
                        <div class="col-md-4" >
                            <div class="text-center card-box"style="height: 480px">
                                <div class="clearfix"></div>
                                <div class="member-card">
                                    @if($info_user->stealer == 0) <span class="user-badge bg-warning">Не имеется @else <span class="user-badge bg-custom">Куплен @endif</span>
                                    <div class="thumb-xl member-thumb m-b-10 center-block" style="margin-top:10%;">
                                        <img src="assets/images/3.png" class="img-circle img-thumbnail" alt="profile-image">

                                    </div>
                                    <div class="">
                                        <h4 class="m-b-5">Stealer SA:MP</h4>
                                        <p class="text-muted"><mark>Цена: 120р.</mark></p>
                                    </div>
                                    <p class="text-muted font-13">
                                        Функции stealer SA:MP <br>- Обход DarkP1Xel<br>- Обход AVP <br>- Обход /log <br>- Лучшая оптимизация среди стиллеров <br>- Форматы ASI | SF | LUA
                                    </p>
                                    <button type="button" class="btn btn-default btn-sm m-t-10"><a href="/buystealer" class="text-pink" style="color:black">Купить</a></button>
                                    <button type="button" class="btn btn-default btn-sm m-t-10"><a href="/stealer" class="text-pink" style="color:black">Использовать</a></button>
                                    <ul class="social-links list-inline m-t-30">
                                        <li>
                                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Vkontakte Group"><i class="mdi mdi-vk"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-4">
                            <div class="text-center card-box" style="height: 480px">
                                <div class="clearfix"></div>
                                <div class="member-card">
                                    @if($info_user->clipper == 0) <span class="user-badge bg-warning">Не имеется @else <span class="user-badge bg-custom">Куплен до {{ $info_user->date_clipper }} @endif</span>
                                    <div class="thumb-xl member-thumb m-b-10 center-block" style="margin-top:10%;">
                                        <img src="assets/images/2.png" class="img-circle img-thumbnail" alt="profile-image">
                                    </div>
                                    <div class="">
                                        <h4 class="m-b-5">Clipper SA:MP</h4>
                                        <p class="text-muted"><mark>Цена: 150р. в месяц</mark></p>
                                    </div>
                                    <p class="text-muted font-13">
                                        Clipper SA:MP - Это скрипт, с помощью которого, все деньги "Жерты" переводятся на Ваш аккаунт, после того как человек ввел свой пин-код от банка.
                                    </p>
                                    <button type="button" class="btn btn-default btn-sm m-t-10"><a href="/buyclipper" class="text-pink" style="color:black">Купить</a></button>
                                    <button type="button" class="btn btn-default btn-sm m-t-10"><a href="/clipper" class="text-pink" style="color:black">Использовать</a></button>
                                        <button type="button" class="btn btn-default btn-sm m-t-10"><a href="https://youtu.be/2DXAIOaYsQY" class="text-pink" style="color:black">Видео</a></button>
                                    <ul class="social-links list-inline m-t-30">
                                        <li>
                                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Vkontakte Group"><i class="mdi mdi-vk"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-4">
                            <div class="text-center card-box"style="height: 480px">
                                <div class="clearfix"></div>
                                <div class="member-card">
                                    @if($info_user->loader == 0) <span class="user-badge bg-warning">Не имеется @else <span class="user-badge bg-custom">Куплен @endif</span>
                                    <div class="thumb-xl member-thumb m-b-10 center-block" style="margin-top:10%;">
                                        <img src="assets/images/1.png" class="img-circle img-thumbnail" alt="profile-image">
                                    </div>
                                    <div class="">
                                        <h4 class="m-b-5">Loader SA:MP</h4>
                                        <p class="text-muted"><mark>Цена: Бесплатно выдается владельцам Stealer SA:MP.</mark></p>
                                    </div>
                                    <p class="text-muted font-13">
                                        Loader SA:MP - Это скрипт, который подгружается Ваши файлы. Функции: <br>- Подгрузка 3 файлов<br>- Создание копии Loader после запуска<br>- Не отображается в логах антистиллера
                                    </p>

                                    <button type="button" class="btn btn-default btn-sm m-t-10"><a href="/loader" class="text-pink" style="color:black">Использовать</a></button>
                                    <ul class="social-links list-inline m-t-30">
                                        <li>
                                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Vkontakte Group"><i class="mdi mdi-vk"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> <!-- end col -->

                        <div class="col-md-4">
                            <div class="text-center card-box"style="height: 480px">
                                <div class="clearfix"></div>
                                <div class="member-card">
                                    @if($info_user->gluer == NULL) <span class="user-badge bg-warning">Не имеется @else <span class="user-badge bg-custom">Куплен @endif</span>
                                    <div class="thumb-xl member-thumb m-b-10 center-block" style="margin-top:10%;">
                                        <img src="assets/images/4.png" class="img-circle img-thumbnail" alt="profile-image">
                                    </div>
                                    <div class="">
                                        <h4 class="m-b-5">Склейщик ASI | SF</h4>
                                        <p class="text-muted"><mark>Цена: 50р.</mark></p>
                                    </div>
                                    <p class="text-muted font-13">
                                        Склеивает любые файлы, формата ASI и SF.
                                    </p>
                                    <button type="button" class="btn btn-default btn-sm m-t-10"><a href="/gluer" class="text-pink" style="color:black">Купить</a></button>
                                    <button type="button" class="btn btn-default btn-sm m-t-10"><a href="#" class="text-pink" style="color:black">Скачать</a></button>
                                    <ul class="social-links list-inline m-t-30">
                                        <li>
                                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Vkontakte Group"><i class="mdi mdi-vk"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> <!-- end col -->
                        <div class="col-md-4">
                            <div class="text-center card-box"style="height: 480px">
                                <div class="clearfix"></div>
                                <div class="member-card">
                                        <div class="thumb-xl member-thumb m-b-10 center-block" style="margin-top:10%;">
                                        <img src="assets/images/5.png" class="img-circle img-thumbnail" alt="profile-image">
                                    </div>
                                        <div class="">
                                        <h4 class="m-b-5">Пиар файлов</h4>
                                        <p class="text-muted"><mark>Цена: 250р.</mark></p>
                                    </div>
                                        <p class="text-muted font-13">
                                        Пиар файлов происходит на YouTube канале и Loader.
                                    </p>
                                        <button type="button" class="btn btn-default btn-sm m-t-10"><a href="/piar" class="text-pink" style="color:black">Купить</a></button>
                                        <button type="button" class="btn btn-default btn-sm m-t-10"><a href="https://vk.com/id527430089" class="text-pink" style="color:black">Подробнее</a></button>
                                        <ul class="social-links list-inline m-t-30">
                                        <li>
                                            <a title="" data-placement="top" data-toggle="tooltip" class="tooltips" href="" data-original-title="Vkontakte Group"><i class="mdi mdi-vk"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div> <!-- end col -->

                    </div>
                    <!-- end row -->
                    <div class="footer">
                        <div>
                            <strong>LokiSoft.ru </strong> - Copyright &copy; 2020
                        </div>
                    </div> <!-- end footer -->

                </div>
                <!-- End #page-right-content -->

            </div>
            <!-- end .page-contentbar -->
        </div>
        <!-- End #page-wrapper -->

        <!-- js placed at the end of the document so the pages load faster -->
        <script src="assets/js/jquery-2.1.4.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>
        <script src="assets/js/metisMenu.min.js"></script>
        <script src="assets/js/jquery.slimscroll.min.js"></script>

        <!--Morris Chart-->
        <script src="assets/plugins/morris/morris.min.js"></script>
        <script src="assets/plugins/raphael/raphael-min.js"></script>

        <!-- Dashboard init -->
        <script src="assets/pages/jquery.dashboard.js"></script>

        <!-- App Js -->
        <script src="assets/js/jquery.app.js"></script>

</body>
</html>
