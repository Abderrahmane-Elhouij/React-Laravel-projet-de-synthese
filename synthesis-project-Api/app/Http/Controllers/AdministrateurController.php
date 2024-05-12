<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Administrateur;
use App\Models\Formateur;

class AdministrateurController extends Controller
{
    /**
     * Authenticate the administrator.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */

     public function index()
    {
        return Administrateur::select('idAdmin','nom','prenom','email','password')->get();
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            // Authentication passed
            return response()->json(['message' => 'Authentication successful'], 200);
        } else {
            // Authentication failed
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }

    /**
     * Create a new formateur account.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function createFormateur(Request $request)
    {
        // Validate the request data
        $validatedData = $request->validate([
            'nom' => 'required|string',
            'prenom' => 'required|string',
            'email' => 'required|email|unique:formateurs,email',
            'password' => 'required|string',
        ]);

        // Create the formateur account
        $formateur = new Formateur([
            'nom' => $validatedData['nom'],
            'prenom' => $validatedData['prenom'],
            'email' => $validatedData['email'],
            'password' => bcrypt($validatedData['password']), // Hash the password
        ]);
        $formateur->save();

        return response()->json(['message' => 'Formateur account created successfully'], 201);
    }
}
