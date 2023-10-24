<?php

namespace App\Http\Controllers;

use App\Models\Item;
use Illuminate\Http\Request;
use Inertia\Inertia;

class InventoryController extends Controller
{
    public function store(Request $request) {

        $request->validate([
            'jenis' => 'required',
            'kondisi' => 'required',
            'keterangan' => 'required',
            'deskripsi_kecacatan' => 'required',
            'jumlah' => 'required',
            'gambar' => 'required|max:2048|mimes:jpg,jpeg,png',
        ]);

        Item::create([
            'jenis' => $request->jenis,
            'kondisi' => $request->kondisi,
            'keterangan' => $request->keterangan,
            'deskripsi_kecacatan' => $request->deskripsi_kecacatan,
            'jumlah' => $request->jumlah,
            'gambar' => $request->gambar
        ]);
    }

    public function get() {
        $data = Item::all();

        $items = [];

        foreach ($data as $d) {
            array_push($items, [
                'jenis' => $d->jenis,
                'kondisi' => $d->kondisi,
                'keterangan' => $d->keterangan,
                'deskripsi_kecacatan' => $d->deskripsi_kecacatan,
                'jumlah' => $d->jumlah,
                'gambar' => $d->gambar
            ]);
        }

        return Inertia::render('Inventory', ['items' => $items]);
    }
}
