<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\http\Requests\UserStoreRequest;
use PhpParser\Node\Stmt\Return_;

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

    public function store(UserStoreRequest $request)
    {
        try {
            // Create new user
            User::create([
                'name' => $request->name,
                'email' => $request->email,
                'password' => $request->password,
            ]);
            return response()->json(
                [
                    'message' => 'User successfully created.',
                ],
                200,
            );
        } catch (\Exception $e) {
            // Return Json Response
            return response()->json(
                [
                    'message' => 'Something went really wrong!',
                ],
                500,
            );
        }
    }
}
