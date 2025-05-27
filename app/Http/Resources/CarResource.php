<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Request as FacadesRequest;
use Illuminate\Support\Str;

class CarResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */

     protected bool $withDetails = true;

    public function withDetails(bool $value): static
    {
        $this->withDetails = $value;
        return $this;
    }

    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'slug_id' => $this->slug_id,
            'year' => $this->year,
            'price' => number_format($this->price),
            'descrip' => $this->withDetails ? Str::limit($this->description, 160) : null,
            'mileage' => $this->withDetails ? number_format($this->mileage) : null,
            'mpg' => $this->withDetails ? $this->mpg : null,
            'thumbnail_url' => $this->thumbnail_url,
            'details' => $this->withDetails ? [
                'dealer' => $this->dealer_description,
                'title' => $this->title_description,
                'description' =>$this->description
            ] : null,
            'colors' => $this->withDetails ? [
                'exterior' => $this->exterior_color,
                'interior' => $this->interior_color
            ] : null,
            'feature' => $this->withDetails ? $this->feature : null,
            'images'=> FacadesRequest::routeIs('car.details') ? [
                'list' => $this->withDetails ? $this->images->map(function($image){
                    return [
                        'id' => $image->id,
                        'image_url' => $image->image_url,
                        'isThumbnail' => $image->isThumbnail
                    ];
                }) : null
            ]: null,

            'carmake' => [
                'id' => $this->carmake->id,
                'name' => $this->carmake->name,
            ],

            'carmodel' => [
                'id' => $this->carmodel->id,
                'name' => $this->carmodel->name,
            ],

            'dealersel' => $this->withDetails ? [
                'id' => $this->dealersel->id,
                'name' => $this->dealersel->dealer_title,
                'slug' => $this->dealersel->dealer_slug,
                'details' =>FacadesRequest::routeIs('car.details') ? [
                    'address' => $this->dealersel->address,
                    'phone' => $this->dealersel->phone,
                    'avatar' => $this->dealersel->dealer_logo,
                    'lat' => $this->dealersel->latitude,
                    'lon' => $this->dealersel->longitude,
                    'rating'=>$this->dealersel->rating,
                    'count'=>$this->dealersel->count,
                ] : null,
            ] : null,

            'transmission' => $this->withDetails ? [
                'title' => $this->transmission->transmission_title,
            ] : null,

            'cartitle' => $this->withDetails ? [
                'title' => $this->title->cartitle_title
            ] : null,

            'drive' => $this->withDetails ? [
                'title' => $this->drivetype->drivetype_title
            ] : null,

            'engine' => $this->withDetails ? [
                'title' => $this->engintype->engine_title
            ] : null,

            'fueltype' => $this->withDetails ? [
                'title' => $this->fueltype->fueltype_title
            ] : null,

            'bodytype' => $this->withDetails ? [
                'title' => $this->bodytype->bodystyle_title
            ] : null,
            'reviews' => $this->withDetails ? [
                'latestReviews' => [
                    'list'=>$this->latestReviews->map(function($review){
                        return [
                            'id' => $review->id,
                            'user' => $review->user->name,
                            'comment' => $review->comment,
                            'rating' => $review->rating
                        ];
                    })
                ],
                'countReviews'  => $this->reviews_count,
                'avgreviews'    => $this->reviews_avg_rating
            ] : null
        ];
    }
}
