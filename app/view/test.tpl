<html>
  <head>
    <title>form表单</title>
  </head>
  <body>
    <div class="news-view view">
        <button type="buttom" id="ajax">ajax</button>
        <button type="buttom" id="delete">删除</button>
        <button type="buttom" id="fs">读文件</button>
        <button type="buttom" id="middlewares">中间件</button>
        
    </div>
    <script src="/public/js/jquery-3.2.1.min.js"></script>
    <script src="/public/js/CookieUtil.js"></script>
    <script>
      //ajax测试
      $('#ajax').click(function () {
        alert('ajax');
        {#var csrfToken = CookieUtil.get('csrfToken');
        console.log("csrftoken:",csrfToken);#}
        $.ajax({
				type:'post',
                {#headers: { 'x-csrf-token': csrfToken },#}
                data:{data: 'ajax'},
                url:'/test/ajax',
                success:function (res) {
                        alert(res.data);
                    }
            })
        });
        //fs异步编程测试
      $('#fs').click(function () {
        alert('fs');
        {#var csrfToken = CookieUtil.get('csrfToken');
        console.log("csrftoken:",csrfToken);#}
        $.ajax({
				type:'post',
                {#headers: { 'x-csrf-token': csrfToken },#}
                data:{data: 'ajax'},
                url:'/test/fs',
                success:function (res) {
                        alert(res.data);
                    }
            })
        });
        //中间件post路由测试
      $('#middlewares').click(function () {
        alert('middlewares');
        $.ajax({
				type:'post',
                data:{data: 'ajax'},
                url:'/test/middlewares',
                success:function (res) {
                        alert(res.data);
                    }
            })
        });
    </script>
  </body>
</html>