<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    private $numberOfUsers = 30;
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
        return [
            'name' => $faker->name,
            'email' => $faker->unique()->safeEmail,
            'nickname' => $faker->unique()->name,
            'password' => $password ?: $password = bcrypt('secret'),
            'remember_token' => str_random(10),
            'age' => $faker->numberBetween(18, 75),
            'admin' => 0,
            'blocked' => 0,
            'created_at' => $createdAt,
            'updated_at' => $updatedAt,
        ];
    }
}
