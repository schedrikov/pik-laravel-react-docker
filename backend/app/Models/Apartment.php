<?php

namespace App\Models;

use App\Models\Traits\Filterable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\SoftDeletes;

class Apartment extends Model
{
    use HasFactory;
    use SoftDeletes;
    use Filterable;

    protected string $table = 'apartments';

    protected array $fillable = [
        'building_id',
        'number',
        'floor',
        'square',
        'rooms',
        'rent_price'
    ];

    protected array $hidden = [
        'deleted_at',
        'created_at',
        'updated_at'
    ];

    public function building(): BelongsTo
    {
        return $this->belongsTo(Building::class, 'building_id', 'id');
    }
}
