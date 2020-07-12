<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    protected $fillable = ['title', 'author', 'year', 'desc', 'image'];
    public function user() {
        return $this->belongsTo(User::class);
    }

    public function section()
  {
    return $this->belongsTo(Section::class);
  }
}
