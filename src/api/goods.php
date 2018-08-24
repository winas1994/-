<?php
/**
 * @Author: Marte
 * @Date:   2018-08-23 20:40:34
 * @Last Modified by:   Marte
 * @Last Modified time: 2018-08-23 20:48:24
 */


include 'conne.php';


$id = isset($_POST['id']) ? $_POST['id'] : null;
$imgurl = isset($_POST['imgurl']) ? $_POST['imgurl'] : null;
$price = isset($_POST['price']) ? $_POST['price'] : null;
$title1 = isset($_POST['title1']) ? $_POST['title1'] : null;
$title2 = isset($_POST['title2']) ? $_POST['title2'] : null;
$date = isset($_POST['date']) ? $_POST['date'] : null;


    $conn->set_charset('utf8');

    //编写sql语句
    //查找数据库中是否存在同名用户以及存在的密码
    $sql = "select * from goodsmessage where id='$id' and imgurl='$imgurl' and price ='$price' and title1='$title1' and title2='$title2' and date='$date'";

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