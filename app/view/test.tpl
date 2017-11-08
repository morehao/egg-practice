<html>
  <head>
    <title>form表单</title>
  </head>
  <body>
    <div class="news-view view">
        <button type="buttom" id="ajax">ajax</button>
        <button type="buttom" id="delete">删除</button>
    </div>
    <script src="/public/js/jquery-3.2.1.min.js"></script>
    <script src="/public/js/CookieUtil.js"></script>
    <script>
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
    </script>
  </body>
</html>