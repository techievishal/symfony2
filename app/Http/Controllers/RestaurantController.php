<?php

namespace App\Http\Controllers;

use App\Restaurant;
use App\SchedulerQuestionnaireWeekOption;
use DB;
use Illuminate\Http\Request;

class RestaurantController extends Controller
{

    
    public function index()
    {
        
        return Restaurant::all()->toJson();
       
        
        $restaurants = Restaurant::where('is_active', 1)
        ->orderBy('created_at', 'desc');
        return response()->json(['data'=>$restaurants]);
       // return Response::json($restaurants);
        //return $restaurants->toArray();
    }
    
    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required',
            'description' => 'required',
        ]);
        
        $restaurant = Restaurant::create([
            'name' => $validatedData['name'],
            'description' => $validatedData['description'],
        ]);
        
        return response()->json('Restaurant created!');
    }
    
    public function show($id)
    {
        
        $restaurant = Restaurant::where([
            'id' => $id,
            'is_active' => 1
        ])->get();
        
        
        return $restaurant->toJson();
    }

    public function setquestions($id)   {
        $restaurant = SchedulerQuestionnaireWeekOption::where([
            'restaurant_id' => $id
        ])->get();

        return $restaurant->toJson();
        
        $weekdays = DB::table('scheduler_questionnaire_week_options')
        ->select('Sunday','Monday','Tuesday', 'Wednesday','Thursday','Friday','Saturday')
        ->where([
            'restaurant_id' => $id            
        ])
        ->get();                
        $weekdaysList = collect($weekdays)->map(function($x){ return (array) $x; })->toArray(); 
        
        return json_encode($weekdaysList);        
    }

    public function updatequestions(Request $request)    {
        $weekdaysList = array();
        $days = SchedulerQuestionnaireWeekOption::firstOrNew(array('id' => $request->questionSetID));
        $days->Sunday = (null !== $request->Sunday) ? $request->Sunday: "0";
        $days->Monday = (null !== $request->Monday) ? $request->Monday: "0";
        $days->Tuesday = (null !== $request->Tuesday) ? $request->Tuesday: "0";
        $days->Wednesday = (null !== $request->Wednesday) ? $request->Wednesday: "0";
        $days->Thursday = (null !== $request->Thursday) ? $request->Thursday: "0";
        $days->Friday = (null !== $request->Friday) ? $request->Friday: "0";
        $days->Saturday = (null !== $request->Saturday) ? $request->Saturday: "0";
        $days->restaurant_id = $request->restaurant_id;
        $days->save();

        return response()->json([
            'success' => true,
        ],201);

    }
}
