<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../images/favicon.ico">

    <title>Админ - панель | goodmods.ru</title>

    <link rel="stylesheet" href="css/dashboard/bootstrap.css">

    <!-- Bootstrap 4.0-->
    <link rel="stylesheet" href="css/dashboard/bootstrap-extend.css">

    <!-- theme style -->
    <link rel="stylesheet" href="css/dashboard/master_style.css">

    <!-- MinimalLite Admin skins. choose a skin from the css/skins folder instead of downloading all of them to reduce the load. -->
    <link rel="stylesheet" href="css/dashboard/skins/_all-skins.css">
    <link rel="stylesheet" href="{{ asset('css/lightbox.min.css') }}">
    <script src="{{ asset('js/lightbox-plus-jquery.min.js') }}"></script>
    <script src="{{ asset('js/functions.js') }}"></script>

</head>

<body class="hold-transition skin-green sidebar-mini">
<div class="wrapper">
    <header class="main-header">
        <!-- Logo -->
        <a href="/" class="logo">
            <!-- mini logo for sidebar mini 50x50 pixels -->
            <b class="logo-mini">
                <span class="dark-logo"> GoodMods.ru<img src="" alt="logo"></span>
            </b>
            <!-- logo for regular state and mobile devices -->
            <span class="logo-lg">
		 GoodMods.ru
	  </span>
        </a>
        <!-- Header Navbar: style can be found in header.less -->
        <nav class="navbar navbar-static-top">
            <div class="navbar-custom-menu">
            </div>
        </nav>
    </header>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="main-sidebar">
        <!-- sidebar: style can be found in sidebar.less -->
        <section class="sidebar">
            <!-- sidebar menu: : style can be found in sidebar.less -->
            <ul class="sidebar-menu" data-widget="tree">
                <li class="user-profile treeview">
                    <a href="/profile/{{ $user->id }}">
                        <img src="https://api.icons8.com/download/bc2e75add07ff32fbbe55b371c9f3a03ee46846a/windows8/PNG/512/Users/user_male-512.png" alt="user">
                        <span>{{ $user->name }}</span><br>
                        <span style="color: orangered">@if($user->status == 2) Младший администратор @else Администратор @endif </span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-right pull-right"></i>
            </span>
                    </a>
                    <ul class="treeview-menu">
                        <li><a href="/logout"><i class="fa fa-power-off mr-5"></i>Logout</a></li>
                    </ul>
                </li>
                <li class="header nav-small-cap"></li>
                <li class="active">
                    <a href="/admin">
                        <i class="fa fa-dashboard"></i> <span>Админ - панель</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-right pull-right"></i>
            </span>
                    </a>
                </li>
                <li class="header nav-small-cap"></li>
                <li class="active">
                    <a href="/mod-check">
                        <i class="fa fa-bars"></i><span>Моды на проверку</span>
                        <span class="pull-right-container">
              <i class="fa fa-angle-right pull-right"></i>
            </span>
                    </a>
                </li>
            </ul>
        </section>
    </aside>

    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <section class="content-header">
            <h1>
                Информационная панель
                <small></small>
            </h1>
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#"><i class="fa fa-dashboard"></i> Главная</a></li>
                <li class="breadcrumb-item active">Админ - панель</li>
            </ol>
        </section>

        <!-- Main content -->
        <section class="content">
            <!---//////////////////////--->
            <div class="row">
                <div class="col-12 ">
                    <div class="box">
                        <div class="row no-gutters py-2">

                            <div class="col-sm-6 col-lg-3">
                                <div class="box-body br-1 border-light">
                                    <div class="flexbox mb-1">
                      <span>
                        <i class="ion-person font-size-26"><img src="https://api.icons8.com/download/bc2e75add07ff32fbbe55b371c9f3a03ee46846a/windows8/PNG/512/Users/user_male-512.png" width="10%" alt=""></i><br>
                        Пользователей
                      </span>
                                        <span class="text-primary font-size-40">{{ $all_users }}</span>
                                    </div>
                                    <div class="progress progress-xxs mt-10 mb-0">

                                    </div>
                                </div>
                            </div>


                            <div class="col-sm-6 col-lg-3 hidden-down">
                                <div class="box-body br-1 border-light">
                                    <div class="flexbox mb-1">
                      <span>
                        <i class="ion-document font-size-26"><img src="http://s1.iconbird.com/ico/2014/1/633/w512h5121390856996expensive512.png" width="10%" alt=""></i><br>
                        Модификаций
                      </span>
                                        <span class="text-info font-size-40">{{ $all_mods }}</span>
                                    </div>
                                    <div class="progress progress-xxs mt-10 mb-0">

                                    </div>
                                </div>
                            </div>


                            <div class="col-sm-6 col-lg-3 d-none d-lg-block">
                                <div class="box-body br-1 border-light">
                                    <div class="flexbox mb-1">
                      <span>
                        <i class="ion-information font-size-26"><img src="http://s1.iconbird.com/ico/2014/1/607/w512h5121390848351invisible512.png" width="10%" alt=""></i><br>
                        Просмотров
                      </span>
                                        <span class="text-warning font-size-40">{{ $count_v }}</span>
                                    </div>
                                    <div class="progress progress-xxs mt-10 mb-0">

                                    </div>
                                </div>
                            </div>


                            <div class="col-sm-6 col-lg-3 d-none d-lg-block">
                                <div class="box-body">
                                    <div class="flexbox mb-1">
                      <span>
                        <i class="ion-folder font-size-26"><img src="https://img.icons8.com/windows/420/downloads-folder.png" width="10%" alt=""></i><br>
                        Скачиваний
                      </span>
                                        <span class="text-danger font-size-40">{{ $count_d  }}</span>
                                    </div>
                                    <div class="progress progress-xxs mt-10 mb-0">

                                    </div>
                                </div>
                            </div>


                        </div>
                    </div>
                </div>

            </div>
            <div class="row">
                @foreach($mods as $mod)
                <div class="col-md-12 col-lg-3">
                    <div class="box box-default">
                        <a class="example-image-link" href="/image_mod/{{ $mod->image }}.jpeg" data-lightbox="example-1"><img src="/image_mod/{{ $mod->image }}.jpeg" data-lightbox="image-1" alt="" class="image-mod" title="Нажмите чтобы увеличить"></a>

                        <div class="box-body">
                            <h4 class="box-title">Название: <span style="color:red;">{{ $mod->name }}</span></h4>
                            <p  style="width: auto;">Описание: <span style="color:red;">{{ $mod->description }}</span></p>
                            <p class="box-text">Категория: <span style="color:red;">{{ $mod->category }}</span></p>
                            <form action="/mod-check/confirm" method="get">
                                <input style="display: none;" name="id" value="{{ $mod->category }}">
                                <a href="/mod/download/{{ $mod->id }}/download" class="btn btn-primary">Скачать мод</a>
                            <button type="submit" value="{{ $mod->id }}" name="confirm" class="btn btn-primary">Подтвердить</button>
                            </form>
                        </div>
                    </div>
                </div>
                @endforeach


                </div>
                </aside>

                <div class="control-sidebar-bg"></div>

            </div>
            <script src="/var/www/html/public/js/dashboard/jquery.js"></script>
            <script src="/var/www/html/public/js/dashboard/jquery-jvectormap-2.0.2.min.js"></script>
            <script> $.widget.bridge('uibutton', $.ui.button);</script>
            <script src="/var/www/html/public/js/dashboard/jquery-jvectormap-uk-mill-en.js"></script>
            <script src="/var/www/html/public/js/dashboard/jquery-ui.js"></script>
            <script src="/var/www/html/public/js/dashboard/morris.min.js"></script>
            <script src="/var/www/html/public/js/dashboard/raphael.min.js"></script>
            <script src="js/dashboard/template.js"></script>
            <script src="js/dashboard/dashboard.js"></script>

</body>

</html>
