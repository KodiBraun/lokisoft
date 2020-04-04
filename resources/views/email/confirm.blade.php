</html>
<!doctype html>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>

    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

    <title>Responsive Email Template</title>

    <style type="text/css">
        .ReadMsgBody {width: 100%; background-color: #ffffff;}
        .ExternalClass {width: 100%; background-color: #ffffff;}
        body	 {width: 100%; background-color: #ffffff; margin:0; padding:0; -webkit-font-smoothing: antialiased;font-family: Georgia, Times, serif}
        table {border-collapse: collapse;}

        @media only screen and (max-width: 640px)  {
            .deviceWidth {width:440px!important; padding:0;}
            .center {text-align: center!important;}
        }

        @media only screen and (max-width: 479px) {
            .deviceWidth {width:280px!important; padding:0;}
            .center {text-align: center!important;}
        }

    </style>
</head>

<body leftmargin="0" topmargin="0" marginwidth="0" marginheight="0" style="font-family: Georgia, Times, serif">
<p>Чтобы подтвердить почту, надмите на кнопку "Подтвердить"</p>
<a href="{{ route('confirm-email', [$user, $token]) }}">Подтвердить</a>


    - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
</div>
</body>
</html>
