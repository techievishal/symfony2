<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;
use App\SchedulerReminder;
use DB;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\SendCustomerNotifications::class,
		Commands\WordOfTheDay::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
		$reminders = SchedulerReminder::where([
            'inactivate' => 0
        ])->get()->toArray();
		

		foreach($reminders as $reminder){
			$id = $reminder['id'];
			$time = $reminder['time_scheduled'];
			$days = explode(',',$reminder['day_scheduled']);
			 foreach($days as $day){
				 switch($day){
					 case "Sunday":
					    $schedule->command('word:day',['user' => "Sunday", '--id' => [5, 13]])
								 ->sundays()->at($time);
					 break;					 
					 case "Monday":
					 	$schedule->command('word:day',['user' => "Monday", '--id' => [5, 13]])
								 ->mondays()->at($time);
					 break;
					 case "Tuesday":
					 	$schedule->command('word:day',['user' => "Tuesday", '--id' => [5, 13]])
								 ->tuesdays()->at($time);
					 break;
					 case "Wednesday":
					 	$schedule->command('word:day',['user' => "Wednesday", '--id' => [5, 13]])
								 ->wednesdays()->at($time);
					 break;
					 case "Thursday":
					 	$schedule->command('word:day',['user' => "Thursday", '--id' => [5, 13]])
								 ->thursdays()->at($time);
					 break;
					 case "Friday":					 
					 	$schedule->command('word:day',['user' => "Friday", '--id' => [5, 13]])
								 ->fridays()->at('11:56:01');
					 break;
					 case "Saturday":
					 
					 	$schedule->command('word:day',['user' => "Saturday", '--id' => [5, 13]])
								 ->saturdays();
					 break;					 
				 }
				 
			 }
			 $this->updateCounter($id);
		} 
		date_default_timezone_set('Asia/Kolkata');

		echo date_default_timezone_get();

//$schedule->command('word:day')->cron('18 0 * * MON');


		$schedule->command('word:day')            
			->between('00:29', '00:31');
			
		/*$schedule->command('word:day')
            ->saturdays()
			->at('18:18:02');*/
		/*$schedule->command('word:day')
            ->daily();*/
			
			
	//$schedule->command('word:day',['user' => 'TestUser'])->everyMinute();
        // Run once per week on Monday at 1 PM....
        /*$schedule->command('echo "Happy New Year!" ')->everyMinute(); //<---- ADD HERE        


        // Here we can first connect our DB and check settings saved by every user
        // and the 13:00, monday all this stuffs we can replace dynamically
        $schedule->command('word:day')
        ->weekly()->mondays()->at('17:00');

        $schedule->command('word:day')
        ->weekly()->mondays()->at('17:02');
*/
        // Run hourly from 8 AM to 5 PM on weekdays...
        /*$schedule->command('word:day')
                ->weekdays()
                ->hourly()
                ->timezone('America/Chicago')
                ->between('8:00', '17:00'); */
    }
	
	public function updateCounter($id){
		
		
	}

    /**
     * Register the commands for the application.
     *
     * @return void
     */
    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
