<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DealerResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'name'  => $this->dealer_title,
            'slug'  => $this->dealer_slug,
            'logo'  => $this->dealer_logo,
            'phone' => $this->phone,
            'email' => $this->email,
            'address'=>$this->address,
            'lat'   => $this->latitude,
            'lon'   => $this->longitude,
            'workhours' => $this->whenLoaded('workingHours'),
            'reviews' => [
                'all' => $this->whenLoaded('reviews'),
                'rate'=> round($this->reviews->avg('rating'),1)
            ],
            'cars'  =>  $this->whenLoaded('cars', function(){
                            return $this->cars->map(function($car){
                                return (new CarResource($car))->withDetails(false)->resolve();
                            });
                        }),
        ];
    }
}
