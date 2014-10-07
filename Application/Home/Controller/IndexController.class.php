<?php
namespace Home\Controller;
use Think\Controller;
use \LaneWeChat\Userinfo;
class IndexController extends Controller {
    public function index(){

		// $Info=new \LaneWeChat\Userinfo();
		// $userinfo=$Info->getUserinfo();
		// $urlparam=$Info->getUrlparam();
		// $this->assign('userinfo',$userinfo);
		// $this->assign('urlparam',$urlparam);
        // $type=$_GET["type"];
        // $this->display();
        $this->display();
    }
    public function data(){
    	
    }
}