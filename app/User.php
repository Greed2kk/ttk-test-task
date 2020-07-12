<?php

namespace App;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    use Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name', 'email', 'password', 'role',
    ];

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password', 'remember_token',
    ];

    public function sections() {
        return $this->hasMany(Section::class);
    }

    public function books()
  {
    return $this->hasMany(Book::class);
  }

  public function canEdit()
  {
    $role = $this->role;
    if ($role == "user" || $role == "admin") {
      return true;
    }
    return false;
  }

  public function isAdmin()
  {
    $role = $this->role;
    if ($role == "admin") {
        return true;
    }
    return false;
        
  }

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];
}
