<?php

namespace App\Http\Controllers;

use App\Models\Messages;
use Illuminate\Http\Request;

class MessagesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    // public function create()
    // {
    //     //
    // }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request, Messages $message)
    {
        $validated = $request->validate([
            'firstName' => ['required','string','min:3','max:25'],
            'lastName'  => ['required','string','min:3','max:25'],
            'zipCode'   => ['required', 'regex:/^\d{5}(-\d{4})?$/'],
            'email'     => ['required','email'],
            'phone' => ['nullable', 'regex:/^(\+1\s?)?(\d{3})[\s.-]?\d{3}[\s.-]?\d{4}$/'],
            'message' => ['nullable','string','max:100'],
            'car' => ['required','numeric'],
            'dealer' => ['required','numeric']
        ]);

        $name = $validated['firstName'] . ' ' . $validated['lastName'];

        $message = new Messages();

        $message->name = $name;
        $message->zipCode = $validated['zipCode'];
        $message->email = $validated['email'];
        $message->phone = $validated['phone'];
        $message->message =  $validated['message'] != null ? $validated['message'] : "";
        $message->car = $validated['car'];
        $message->dealer = $validated['dealer'];
        
        $message->save();


    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    // public function edit(string $id)
    // {
    //     //
    // }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
