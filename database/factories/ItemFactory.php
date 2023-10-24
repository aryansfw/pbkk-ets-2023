<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Item>
 */
class ItemFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'jenis' => fake()->randomElement(["Smartphone", "Tablet", "Laptop", "Smart Watch"]),
            'kondisi' => fake()->randomElement(["Baik", "Layak", "Rusak"]),
            'keterangan' => fake()->text(),
            'deskripsi_kecacatan' => fake()->text(),
            'jumlah' => fake()->randomNumber,
            'gambar' => fake()->imageUrl(),
        ];
    }
}
