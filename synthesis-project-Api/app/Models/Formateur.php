<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Formateur extends Model
{
    use HasFactory;
    public $timestamps = false;
    protected $table='formateur';
    protected $primaryKey = 'idFormateur';
    protected $fillable=['nom','prenom','email','password'];
}
