<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class SchedulerQuestionnaireWeekOption extends Model
{
    protected $fillable = ['restaurant_id','Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
    
}
