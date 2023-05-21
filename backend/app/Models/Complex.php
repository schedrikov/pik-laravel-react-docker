<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Complex extends Model
{
    use HasFactory, SoftDeletes;

    protected string $table = 'complexes';

    protected array $fillable = [
        'name'
    ];

    public function buildings(): HasMany
    {
        return $this->hasMany(Building::class, 'complex_id', 'id');
    }
}
