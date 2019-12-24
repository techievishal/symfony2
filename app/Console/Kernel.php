<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        Commands\SendCustomerNotifications::class,
    ];

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // Run once per week on Monday at 1 PM....
        $schedule->command('echo "Happy New Year!" ')->everyMinute(); //<---- ADD HERE        


        // Here we can first connect our DB and check settings saved by every user
        // and the 13:00, monday all this stuffs we can replace dynamically
        $schedule->command('notify:schedule')
        ->weekly()->mondays()->at('17:00');

        $schedule->command('notify:schedule')
        ->weekly()->mondays()->at('17:02');

        // Run hourly from 8 AM to 5 PM on weekdays...
        /*$schedule->command('notify:schedule')
                ->weekdays()
                ->hourly()
                ->timezone('America/Chicago')
                ->between('8:00', '17:00'); */
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
