<?php

namespace App\Http\Controllers;

use App\DTOs\MessageDTO;
use App\Http\Requests\StoreMessageRequest;
use App\Models\Car;
// use App\Models\Messages;
use App\Services\MessageService;
use Illuminate\Http\Request;
// use Illuminate\Support\Facades\Session;

class MessagesController extends Controller
{

    protected MessageService $service;
    public function __construct(MessageService $service)
    {
        $this->service = $service;
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }


    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreMessageRequest $request)
    {
        $validated = $request->validated();

        $name = $validated['firstName'] . ' ' . $validated['lastName'];

        $dto = MessageDTO::fromArray([
            ...$validated,
            'name' => $name,
        ]);

        $slug = Car::where('id', $dto->car)
            ->value('slug_id');
        
        if($this->service->create($dto)== 'ok') {
            // $request->session()->flash('success', 'Operation successful!');
            return redirect()->route('car.details', ['id' => $slug])->with('success', 'Message sent successfully!');
        }

    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

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
