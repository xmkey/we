<?php
namespace Game\Controller;
use Think\Controller;

class DataController extends Controller {
    public function index(){
    	$postdata=I('post.');
    	
    	$this->_handledata($postdata);
    	
    }
    private function _handledata($postdata){
    	$ret=array();
    	$data['name'] =$postdata['name'];
		$data['tel'] = (string)$postdata['tel'];
		$data['gametime'] = $postdata['gametime'];
		$data['time'] = time();
		$position=$this->checkMobilePlace($data['tel']);
	
		if($position->retmsg=='OK'){
			$data['province']=$position->province;
			$data['city']=$position->city;
		}
    	$Userinfo = M('Userinfo');
    	if(isset($postdata['userid'])){
    		$userid=$postdata['userid'];
    		$Userinfo->where('`userid`="'.$postdata['userid'].'"')->save($data);
    	}else{
    		// print_r($data['tel']) ;
    		$result =$Userinfo->data($data)->add();
    		if($result){
		       
		        $userid = $result;
		    }
    	}
    	

    	$ret['status']='success';
    	$ret['userid']=$userid;
    	$ret['city']=$data['city'];
    	$ret['province']=$data['province'];
		echo json_encode($ret);
    }
   
    private function  checkMobilePlace($mobilephone){ 
    	// https://wallet.tenpay.com/life/cgi-bin/mobile/MobileQueryAttribution_jsonp.cgi?chgmobile=13008813949&OutPutType=JSONP&JsonObj=MOBILEAREACALLBACK
		// $url = "http://tcc.taobao.com/cc/json/mobile_tel_segment.htm?tel=".$mobilephone."&t=".time(); 
		 $url = "https://wallet.tenpay.com/life/cgi-bin/mobile/MobileQueryAttribution_jsonp.cgi?chgmobile=".$mobilephone."&t=".time(); 

		
		$content = file_get_contents($url);
		$content=trim($this->conv2utf8($content)); 
		
		$content=str_replace("document.domain = \"tenpay.com\";(","",$content);
		$content=substr($content, 0, -1);

		// $content=rtrim($content, ")");
		// $content=	substr($content, 0, -1);
		// $content=substr($content,0,strlen($content)-1); 
		// $content = substr($content, -1); 
		// return $content;
		return json_decode($content);
		// return $str = conv2utf8($p).conv2utf8($mo); 
	} 
	// 转换字符串编码为 UTF8 
	private function  conv2utf8($text){ 
		return mb_convert_encoding($text,'UTF-8','ASCII,GB2312,GB18030,GBK,UTF-8'); 
	}
    
}