<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SendCustomerNotifications extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'notify:schedule';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Send an email to all customers at thier choosen schedule';

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
        
        //$users = User::all();
        /*foreach ($users as $user) {
            Mail::raw("{$key} -> {$value}", function ($mail) use ($user) {
                $mail->from('info@tutsforweb.com');
                $mail->to($user->email)
                    ->subject('Word of the Day');
            });
        } */
        
         
        $this->info('User "customer-02" notified on Monday @17:00');
    }
}
