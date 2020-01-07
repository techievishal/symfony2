<?php

namespace App\Console\Commands;

use Mail;
use Illuminate\Console\Command;
use App\SchedulerReminder;

class WordOfTheDay extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'word:day {user}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send a Daily email to all users with a word and its meaning';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
		$userId = $this->argument('user');

		
	$name = 'Vishal Manjrekar';
    //$email = $_POST['email'];
    $message = 'Hello World_'.$userId;
    $to = 'monstervishal@yahoo.com';
    $from = 'vishal.manjrekar4u@gmail.com';
    $subject = 'Customer Inquiry:'.$userId;
    $body = "From: $name\n E-Mail: \n Message:\n $message";

    
        if (mail ($to, $subject, $body, $from)) {
            echo '<p>Your message has been sent!</p>';
        } else {
            echo '<p>Something went wrong, go back and try again!</p>';
        }
    
	
         
		 
        $this->info('Word of the Day sent to All Users');
    }
}
