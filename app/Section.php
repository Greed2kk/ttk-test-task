<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Section extends Model
{
    protected $fillable = ['title', 'description'];
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function books()
    {
        return $this->hasMany('App\Book');
    }
}
