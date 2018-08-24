<?php
    // 引入connect.php
    include 'conne.php';

    /*
        接口功能：验证用户名是否存在
        所需参数：
            * username
     */
    
    $user = isset($_GET['user']) ? $_GET['user'] : null; 


    // 查找数据库中是否存在同名用户
    $sql = "select * from ygzc where user='$user'";
    // select * from ygzc where user='123@qq.com'

    // 执行sql语句
    $result = $conn->query($sql);


    if($result->num_rows>0){
        echo "no";
    }else{
        echo "yes";
    }

?>