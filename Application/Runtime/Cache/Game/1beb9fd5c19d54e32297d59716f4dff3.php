<?php if (!defined('THINK_PATH')) exit();?><!DOCTYPE html>
<html lang="ch">
<head>
<title>WE大会</title>
<meta charset="utf-8" />
<meta name="keywords" content="WE大会" />
<meta name="description" content="WE大会" />
<meta name="apple-touch-fullscreen" content="yes" />
<meta name="format-detection" content="telephone=no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="apple-mobile-web-app-capable" content="yes">
<meta name="apple-mobile-web-app-status-bar-style" content="black" />


</head>
<body class="app">
  <table>
    <tr>
      <td>userid</td>
      <td>name</td>
      <td>tel</td>
      <td>gametime</td>
      <td>city</td>
      <td>province</td>
      <td>time</td>
    </tr>
 <?php if(is_array($data)): foreach($data as $key=>$vo): ?><tr>
      <td><?php echo ($vo["userid"]); ?></td>
      <td><?php echo ($vo["name"]); ?></td>
      <td><?php echo ($vo["tel"]); ?></td>
      <td><?php echo ($vo["gametime"]); ?></td>
      <td><?php echo ($vo["city"]); ?></td>
      <td><?php echo ($vo["province"]); ?></td>
      <td><?php echo ($vo["time"]); ?></td>
    </tr><?php endforeach; endif; ?>
 </table>
</body>
</html>