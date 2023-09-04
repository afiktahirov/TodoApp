<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $users = User::all();

        return response()->json(
            [
                'results' => $users,
            ],
            200,
        );
    }

    public function show($id)
    {
        // User details
        $users = User::find($id);
        if (!$users) {
            return response()->json(
                [
                    'message' => 'User Not Found.',
                ],
                404,
            );
        }

        // Return Json Response
        return response()->json(
            [
                'users' => $users,
            ],
            200,
        );
    }
}
