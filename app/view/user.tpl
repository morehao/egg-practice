<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <title>userrole测试</title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <!--[if lt IE 7]>
            <p class="browsehappy">You are using an <strong>outdated</strong> browser. Please <a href="#">upgrade your browser</a> to improve your experience.</p>
        <![endif]-->
        姓名：<input name="name" id="name">
        年龄：<input name="age" id="age">
        <button name="add" id="add">添加</button>
        <script src="/public/js/jquery-3.2.1.min.js"></script>
        <script>
            //添加user
            $('#add').click(function(){
                alert('change');
                var name = $('#name').val();
                var age = $('#age').val();
                $.ajax({
                    type: 'post',
                    data: {name: name,age: age},
                    url: '/user/userAdd',
                    success:function(res){
                        alert(res);
                    }
                })
            })
        </script>
    </body>
</html>