<?php

namespace App\Http\Controllers;

use App\Enums\OrderStatus;
use App\Http\Resources\OrderResource;
use App\Models\Feedback;
use App\Models\Flying;
use App\Models\News;
use App\Models\Order;
use App\Models\Otclice;
use App\Models\User;
use App\Models\Vacancy;
use FluidXml\FluidXml;
use App\Services\GenerateXMLService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Response;
use Storage;

class AdminController extends Controller
{
    public function index()
    {
        $order = OrderResource::collection(Order::all());
        $order_status = OrderStatus::cases();
        return inertia("admin/index", ['order' => $order, 'order_status' => $order_status]);
    }

    public function XMLExport()
    {
        $xml = new FluidXml("root");
        $news = News::all()->toArray();
        $feedback = Feedback::all()->toArray();
        $flying = Flying::all()->toArray();
        $order = Order::all()->toArray();
        $otclice = Otclice::all()->toArray();
        // $user = User::all()->toArray();
        $vacancy = Vacancy::all()->toArray();

        GenerateXMLService::Generate("news", $news, $xml);
        GenerateXMLService::Generate('feedback', $feedback, $xml);
        GenerateXMLService::Generate("flying", $flying, $xml);
        GenerateXMLService::Generate("order", $order, $xml);
        GenerateXMLService::Generate("otclice", $otclice, $xml);
        // GenerateXMLService::Generate("user", $user, $xml);
        GenerateXMLService::Generate("vacancy", $vacancy, $xml);

        $xmlString = $xml->xml();
        $fileDir = "reports";
        $fileName = now()->format("H_i") . "_report_" . now()->format("Y_m_d") . ".xml";
        Storage::disk("public")->put("$fileDir/$fileName", $xmlString);

        return Storage::disk("public")->download("$fileDir/$fileName", "Report.xml");
    }
}
