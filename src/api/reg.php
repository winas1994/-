<?php


    // 引入connect.php
    include 'conne.php';

    /*
        接口功能：用户注册
            * 写入数据库
        所需参数：
            * username
            * password
     */
    
    $user= isset($_POST['user']) ? $_POST['user'] : null; //使用isset插入数据
    $pwd = isset($_POST['pwd']) ? $_POST['pwd'] : null; 


    // 插入数据
    $sql = "insert into ygzc(user,pwd) values('$user','$pwd')";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result){
        echo "success";
    }else{
        echo "fail";
    }

?>