<?php
namespace Home\Controller;
use Think\Controller;

class DataController extends Controller {
    public function index(){
    	$postdata=I('get.');
    	
    	$this->_handledata($postdata);
    	
    }
    private function _handledata($postdata){
    	$ret=array();
    	$data['name'] =$postdata['name'];
		$data['tel'] = $postdata['tel'];
		$data['gametime'] = $postdata['gametime'];
		
    	$Userinfo = M('Userinfo');
    	if(isset($postdata['userid'])){
    		$userid=$postdata['userid'];
    		$Userinfo->where('`userid`="'.$postdata['userid'].'"')->save($data);
    	}else{
    		$result =$Userinfo->data($data)->add();
    		if($result){
		       
		        $userid = $result;
		    }
    	}
    	echo $this->checkMobilePlace($data['tel']);
    	$ret['status']='success';
    	$ret['userid']=$userid;
		// echo json_encode($ret);
    }
   
    private function  checkMobilePlace($mobilephone){ 
    	// https://wallet.tenpay.com/life/cgi-bin/mobile/MobileQueryAttribution_jsonp.cgi?chgmobile=13008813949&OutPutType=JSONP&JsonObj=MOBILEAREACALLBACK
		// $url = "http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=".$mobilephone."&t=".time(); 
		 $url = "https://wallet.tenpay.com/life/cgi-bin/mobile/MobileQueryAttribution_jsonp.cgi?chgmobile=".$mobilephone."&t=".time(); 
		$content = file_get_contents($url); 
		$content=str_replace("document.domain = \"tenpay.com\";(","",$content);
		$content = substr($content, -1); 
		return json_encode($content);
		// return $str = conv2utf8($p).conv2utf8($mo); 
	} 
	// 转换字符串编码为 UTF8 
	private function  conv2utf8($text){ 
		return mb_convert_encoding($text,'UTF-8','ASCII,GB2312,GB18030,GBK,UTF-8'); 
	}
    
}