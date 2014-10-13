<?php
namespace Game\Controller;
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
        // echo $_GET("simple");
        if(isset($_GET["simple"])){
            $this->display("index2");
        }else{
            $this->display();
        }
        
    }
    public function data(){
    	
    }
}