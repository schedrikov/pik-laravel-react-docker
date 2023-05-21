<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\SoftDeletes;

class Building extends Model
{
    use HasFactory, SoftDeletes;

    protected string $table = 'buildings';

    protected array $fillable = [
        'number',
        'floors',
        'complex_id'
    ];

    public function complex(): BelongsTo
    {
        return $this->belongsTo(Complex::class, 'complex_id', 'id');
    }

    public function apartments(): hasMany
    {
        return $this->hasMany(Apartment::class, 'building_id', 'id');
    }
}
