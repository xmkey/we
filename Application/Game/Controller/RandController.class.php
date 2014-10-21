<?php
namespace Game\Controller;
use Think\Controller;

class RandController extends Controller {
    public function index(){
    	// $User = M("User"); // 实例化User对象
        $Userinfo = M('Userinfo');
		// 查找status值为1name值为think的用户数据 
        $data = $Userinfo->where('`city`="北京"')->order('rand()')->limit(20)->select();
        $data2 = $Userinfo->where('`city`<>"北京"')->order('rand()')->limit(20)->select();
		$data3 = $Userinfo->select();
		// print_r($data);
        $this->assign("data",$data);
        $this->assign("data2",$data2);
        $this->assign("data3",$data3);
        $this->display("Index/rand");
    	
    }
    private function _handledata($postdata){
    	
    }
   
    
}