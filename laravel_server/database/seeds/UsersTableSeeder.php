<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    private $numberOfUsers = 50;
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $faker = Faker\Factory::create('pt_PT');

        for ($i = 0; $i < $this->numberOfUsers; ++$i) {
        DB::table('users')->insert($this->fakeUser($faker));
        }
    }

    private function fakeUser(Faker\Generator $faker)
    {
        static $password;
        $createdAt = Carbon\Carbon::now()->subDays(30);
        $updatedAt = $faker->dateTimeBetween($createdAt);
        $emailUsername = $faker->unique()->safeEmail;
        return [
            'name' => $faker->name,
            'email' => $emailUsername,
            'username' => $emailUsername,
            'password' => $password ?: $password = bcrypt('secret'),
            'remember_token' => str_random(10),
            'created_at' => $createdAt,
            'updated_at' => $updatedAt,
        ];
    }
}
