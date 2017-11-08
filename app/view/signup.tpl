<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>注册</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        <form action="/user/finishSignup" method="POST">
            手机号码：<input type="text" name="tel" id="tel" value="18435155690"></input><br>
            图片验证码：<input type="text" name="picYanzheng" id="picYanzheng"></input><br>
            手机验证码：<input type="text" name="msgCaptcha" id="msgCaptcha"></input><button type="button" id="getTelYanzheng">获取验证码</button><br>
            密码：<input type="text" name="password" id="password"></input><br>
            <button type="submit">注册</button>
        </form>
        <script src="/public/js/jquery-3.2.1.min.js"></script>
        <script src="/public/js/CookieUtil.js"></script>
        <script>
        //获取手机验证码
        $('#getTelYanzheng').click(function () {
            alert('getTelYanzheng');
            var csrfToken = CookieUtil.get('csrfToken');
            var tel = $('#tel').val();
            alert(tel);
            console.log("csrftoken:",csrfToken);
            $.ajax({
                    type:'post',
                    headers: { 'x-csrf-token': csrfToken },
                    data:{tel: tel},
                    url:'/user/telYanzheng',
                    success:function (res) {
                            alert(res.data);
                        }
                })
            });
            //手机验证码校验
            $('#msgCaptcha').change(function(){
                alert('change');
                var msgCaptcha = $('#msgCaptcha').val();
                alert(msgCaptcha);
                $.ajax({
                    type: 'post',
                    data: {msgCaptcha: msgCaptcha},
                    url: '/user/msgCaptcha',
                    success:function(res){
                        alert(res);
                    }
                })
            })
        </script>
    </body>
</html>