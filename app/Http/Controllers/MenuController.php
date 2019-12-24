<?php

namespace App\Http\Controllers;

use App\Menu;
use App\SchedulerReminder;
use App\SchedulerQuestionnaireWeekOption;
use DB;
use Illuminate\Http\Request;

class MenuController extends Controller
{

    
    public function index($id)
    {
        
        $Menu = DB::table('menus')
        ->join('menu_items', 'menus.id', '=', 'menu_items.menu_id')
        ->select('menus.name as menu_name' , 'menu_items.id','menu_items.name', 'menu_items.price')
        ->where([
            'menus.restaurant_id' => $id,
            'menu_items.status' => 1
        ])
        ->get();
        $menuList = collect($Menu)->map(function($x){ return (array) $x; })->toArray(); 

        $data = array();
        $newarray = array();
        foreach($menuList as $key=>$menuItems){           
          $data[$menuItems['menu_name']]['menu'] = $menuItems['menu_name'];
          $bootstrap_name =  preg_replace('/\s+/', '_', $menuItems['name']);
          $data[$menuItems['menu_name']]['menu_items'][] = array('item_id'=>$menuItems['id'],'name'=>$menuItems['name'],'price'=>$menuItems['price'],'bootstrap_name'=>  $bootstrap_name );
        }

        $newarray['menu'] = $data;

        //SchedulerQuestionnaireWeekOption::where([
        $weekdays = DB::table('scheduler_questionnaire_week_options')
        ->select('Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday')
        ->where([
            'restaurant_id' => $id            
        ])
        ->get();        
        $weekdaysList = collect($weekdays)->map(function($x){ return (array) $x; })->toArray(); 
        
        $newarray['weekdays_options'] = $weekdaysList;


        return json_encode($newarray);
        header('Content-Type: application/json');
       
        echo json_encode($newarray, JSON_PRETTY_PRINT);
 exit;
       // $result = $Menu->toArray();
       //return response()->json(['data'=>$menuList]);


    }
    
    public function storeschedule(Request $request)
    {        

        $time = $request->hours_01.''.$request->hours_02.':'.$request->mins_01.''.$request->mins_02. '  '.$request->time_format;

        $Menu = SchedulerReminder::create([
            'user_id' => '2',
            'restaurant' => 'Restaurant-02',
            'menu_item_id' => $request->menu_item_id,    
            'restaurant_id' => $request->restaurant_id,
            'how_long' => $request->how_long,
            'day_scheduled' => 'Test',
            'time_scheduled' => $time,
            'day_weeks_month' => $request->frequency
        ]);
        return response()->json(['success'=>true]);
        //return response()->json(['success'=>true]);
    }
    
    public function show($id)
    {        
        $Menu = Menu::where([
            'id' => $id,
            'is_active' => 1
        ])->get();        
        
        return $Menu->toJson();
    }
}
