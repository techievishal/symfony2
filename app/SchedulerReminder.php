<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SchedulerReminder extends Model
{
    protected $fillable = ['user_id','restaurant_id','menu_item_id','restaurant','how_long','day_scheduled','day_weeks_month','time_scheduled'];
    
}
