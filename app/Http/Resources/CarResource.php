<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Str;

class CarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug_id' => $this->slug_id,
            'year' => $this->year,
            'price' => number_format($this->price),
            'descrip' => Str::limit($this->description, 160),
            'mileage' => number_format($this->mileage),
            'mpg' => $this->mpg,
            'details' => [
                'dealer' => $this->dealer_description,
                'title' => $this->title_description,
                'description' =>$this->description
            ],
            'colors' => [
                'exterior' => $this->exterior_color,
                'interior' => $this->interior_color
            ],
            'feature' => $this->feature,

            'thumbnail' => [
                'id' => $this->thumbnail->id,
                'imageUrl'=> $this->thumbnail->image_url
            ],

            'images' => $this->images->map(function($image){
                return [
                    'id' => $image->id,
                    'image_url' => $image->image_url,
                    'isThumbnail' => $image->isThumbnail
                ];
            }),

            'carmake' => [
                'id' => $this->carmake->id,
                'name' => $this->carmake->name,
            ],

            'carmodel' => [
                'id' => $this->carmodel->id,
                'name' => $this->carmodel->name,
            ],

            'dealersel' => [
                'id' => $this->dealersel->id,
                'name' => $this->dealersel->dealer_title,
                'address' => $this->dealersel->address,
                'slug' => $this->dealersel->dealer_slug,
                'avatar' => $this->dealersel->dealer_logo,
                'lat' => $this->dealersel->latitude,
                'lon' => $this->dealersel->longitude
            ],

            'transmission' => [
                'title' => $this->transmission->transmission_title,
            ],

            'cartitle' => [
                'title' => $this->title->cartitle_title
            ],

            'drive' => [
                'title' => $this->drivetype->drivetype_title
            ],

            'engine' => [
                'title' => $this->engintype->engine_title
            ],

            'fueltype' => [
                'title' => $this->fueltype->fueltype_title
            ],

            'bodytype' => [
                'title' => $this->bodytype->bodystyle_title
            ]
        ];
    }
}
