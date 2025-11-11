<?php

namespace App\Http\Controllers;

use App\Http\Requests\StoreUserRequest;
use App\Http\Requests\UpdateUserRequest;
use App\Http\Resources\UserResource;
use App\Models\Role;
use App\Models\User;
use Dotenv\Exception\ValidationException;
use Illuminate\Database\UniqueConstraintViolationException;
use Illuminate\Http\Request;

class UserController extends Controller
{
    public function index()
    {
        $user = User::paginate(5);
        return inertia("users/index", ['user' => $user]);
    }

    public function indexMobile()
    {
        $user = User::paginate(5);
        return inertia("users/indexMobile", ['user' => $user]);
    }

    public function edit(User $user)
    {
        return inertia("users/edit", [
            'user' => new UserResource($user),
            'role' => Role::all()
        ]);
    }

    public function create()
    {
        return inertia("users/create");
    }

    public function store(StoreUserRequest $request)
    {
        User::create($request->all());
        return redirect()->route("user.index");
    }

    public function destroy(User $user)
    {
        $user->delete();
    }

    public function update(User $user, UpdateUserRequest $request)
    {

        $user->update($request->all());
        return redirect()->route("user.index");
    }

    public function ban(User $user)
    {
        $user->status = 0;
        $user->save();
    }

    public function unban(User $user)
    {
        $user->status = 1;
        $user->save();
    }
}
