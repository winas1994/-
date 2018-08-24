<?php
/**
 * @Author: Marte
 * @Date:   2018-08-22 21:17:25
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-23 16:39:03
 */
// 引入connect
include 'conne.php';


$username = isset($_POST['user']) ? $_POST['user'] : null;
$password = isset($_POST['pwd']) ? $_POST['pwd'] : null;


    $conn->set_charset('utf8');

    //编写sql语句
    //查找数据库中是否存在同名用户以及存在的密码
    $sql = "select * from ygzc where user='$username' and pwd='$password'";

    // 执行sql语句
    $result = $conn->query($sql);


    if($result->num_rows>0){
        echo "yes";
    }else{
        echo "no";
    }
   // 关闭数据库，避免资源浪费
    $conn->close();

?>