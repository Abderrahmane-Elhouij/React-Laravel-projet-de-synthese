<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Formateur;
use Illuminate\Support\Facades\Hash;

class FormateurController extends Controller
{
    /**
     * Authenticate the formateur.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Formateur::select('idFormateur', 'nom', 'prenom', 'email', 'password')->get();
    }

    public function login(Request $request)
    {
        $credentials = $request->only('email', 'password');

        if (auth()->attempt($credentials)) {
            return response()->json(['message' => 'Authentication successful'], 200);
        } else {
            return response()->json(['message' => 'Invalid credentials'], 401);
        }
    }

    public function store(Request $request)
    {
        $validatedData = $request->validate([
            'nom' => 'required|string|max:100',
            'prenom' => 'required|string|max:100',
            'email' => 'required|email|unique:formateur,email',
            'password' => 'required|string|min:8',
        ]);

        $hashedPassword = Hash::make($validatedData['password']);

        $formateur = new Formateur([
            'nom' => $validatedData['nom'],
            'prenom' => $validatedData['prenom'],
            'email' => $validatedData['email'],
            'password' => $hashedPassword,
        ]);

        $formateur->save();

        return response()->json(['message' => 'Formateur created successfully'], 201);
    }

    public function destroy($id)
    {
        $formateur = Formateur::findOrFail($id);
        $formateur->delete();

        return response()->json(['message' => 'Formateur deleted successfully'], 200);
    }

    public function show($id)
    {
        $formateur = Formateur::findOrFail($id);
        return response()->json($formateur);
    }
}
