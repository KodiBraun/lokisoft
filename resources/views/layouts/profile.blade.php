<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8" />
    <title>LokiSoft.ru - Профиль</title>
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
                                <li><a href="/logout"><i class="ti-power-off m-r-10"></i> Выйти</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div> <!-- end container -->
        </div> <!-- end navbar -->
    </div>
    <div class="page-contentbar">
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
                    <div class="col-md-12">
                        <div class="p-0 text-center">
                            <div class="member-card">
                                <div class="thumb-xl member-thumb m-b-10 center-block">
                                    <img src="@if($info_user->image == null) https://diskomir.ru/upload/iblock/daf/daff9848cd628b79d6b268cb827c254d.jpg @else {{$info_user->image }} @endif" class="img-circle img-thumbnail" alt="profile-image">
                                    <i class="mdi mdi-star-circle member-star text-success" title="verified user"></i>
                                </div>
                                <div class="">
                                    <h4 class="m-b-5">{{$info_user->name }} </h4>
                                </div>
                            </div> <!-- end card-box -->
                        </div> <!-- end col -->
                    </div> <!-- end row -->
			<div class="m-t-30">
                            <ul class="nav nav-tabs tabs-bordered">
                                <li class="active">
                                    <a href="#home-b1" data-toggle="tab" aria-expanded="true">
                                       Настройки
                                    </a>
                                </li>
                                <li class="">
                                    <a href="#profile-b1" data-toggle="tab" aria-expanded="false">
                                        Реферальная система
                                    </a>
                                </li>
                            </ul>
                            <div class="tab-content">
                                <div class="tab-pane active" id="home-b1">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <!-- Personal-Information -->
                                            <div class="panel panel-default panel-fill">
                                                <div class="panel panel-default panel-fill">
                                <div class="panel-heading">
                                    <h3 class="panel-title">Редактировать профиль</h3>
                                </div>
                                <div class="panel-body">
                                        <form action="/editprofile" method="POST">
                                            @csrf
                                        <div class="form-group">
                                            <label for="NickName">NickName</label>
                                            <input type="text" id="NickName" class="form-control" placeholder="Loki" name="name" value="{{ $info_user->name }}">
                                        </div>
                                        <div class="form-group">
                                            <label for="image">Картинка профиля</label>
                                            <input type="text" id="image" name="image" class="form-control" placeholder="Ссылка на картинку" value="{{ $info_user->image }}">
                                        </div>
                                        <div class="form-group">
                                            <label for="UID">UID для бота<span> - <a href="https://vk.com/im?media=&sel=-84530099" target="_blank">Напишите "Начать" для получения UID</a></span></label>
                                            <input type="text" placeholder="Введите UID" id="uid" class="form-control" name="uid" value="{{ $info_user->UID }}">
                                        </div>
                                        <button class="btn btn-primary waves-effect waves-light w-md" type="submit">Сохранить</button>
                                    </form>
                                </div>
                            </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="tab-pane" id="profile-b1">
                                    <!-- Personal-Information -->
                                    <div class="panel panel-default panel-fill">
                                     
                                        <div class="panel-body">
                                            <form role="form" action="/activate" method="POST">
						@csrf
                                                <div class="form-group">
                                                    <label for="promo">Активировать реферальный код</label>
                                                    <input type="text" value="@if($info_user->refer == NULL)  @else {{ $info_user->refer }} @endif" name="code" class="form-control" @if($info_user->refer == NULL)  @else readonly @endif >
                                                </div>
                                                <button class="btn btn-primary waves-effect waves-light w-md" type="submit">Активировать</button>
                                            </form>
                                        </div>
  					<div class="panel-heading">
                                            <h2 class="panel-title" style="font-size:30px;">Статистика</h2><br>
					    <h4>Количество рефералов:@if($info_user->refcode == NULL) 0 @else {{ $count_referal->count() }} @endif </h4>
					    <h4>Реферальный баланс: @if($info_user->derivable == NULL) 0 @else {{ $info_user->derivable }} @endif руб. (<a href="https://vk.com/kodikkk" target="_blank">Вывести</a>)</h4>
                                        </div>
					<div class="panel-body">
                                             <form role="form" action="/addpromo" method="POST">
						@csrf
                                                <div class="form-group">
                                                    <label for="promo">Создать реферальный код</label>
                                                    <input type="text" value="@if($info_user->refcode == NULL)  @else {{ $info_user->refcode }} @endif" name="code" class="form-control" @if($info_user->refcode == NULL)  @else readonly @endif >
                                                </div>
                                                <button class="btn btn-primary waves-effect waves-light w-md" type="submit">Сохранить</button>
                                            </form>
					<h4 style="margin-top:3%;">Информация</h4>
					<p>* С каждого пополнения Вашего рефера, Вы получаете 15% на реферальный баланс.<br>
					* Если Вы активируете реферальный код, Вы получаете 20р на основной баланс.<br>
					* Минимальная сумма вывода реферального баланса - 100р.
					</p>
                                        </div>
					
                                    </div>

                                    <!-- Personal-Information -->
                                </div>
                            </div>
                        </div>
                    </div>
                    
            <div class="footer">
                <div>
                    <strong>LokiSoft.ru </strong> - Copyright &copy; 2020
                </div>
            </div> <!-- end footer -->

        </div>
        </div>
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
