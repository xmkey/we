<?php
namespace Game\Controller;
use Think\Controller;
use \LaneWeChat\Userinfo;
class IndexController extends Controller {
    public function index(){
        // echo strtotime("2014-10-14 23:00:00");
        $overtime1=strtotime("2014-10-16 00:00:00");
        $overtime2=strtotime("2014-10-21 00:00:00");


        // echo (strtotime("2014-10-14 23:00:00")-time());

        if($overtime2-time()<0){
            $this->display("end2");
        }else if($overtime1-time()<0){
             $this->display("end");
        }
        else{
            $this->display();
        }
        
    }
    public function data(){
    	
    }
}