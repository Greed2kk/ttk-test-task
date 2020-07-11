<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Section;

class SectionController extends Controller
{
    public function __constructor(){
        $this->middleware('auth');
    }

    public function index(Request $request, Section $section)
    {
        $allSections = $section->whereIn('user_id', $request->user())->with('user');
        $sections = $allSections->orderBy('created_at', 'desc')->take(20)->get(); 

        return response()->json([
            'sections' => $sections,
        ]);
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //server validation
        $this->validate($request, [
            'title' => 'required|max:150', //title or sectionTitle
            'description' => 'required|max:500', //description or sectionDesc
        ]);

        $section = $request->user()->sections()->create([
            'title' => $request->title, //тут мб title() тут проверка того кто создал задачу
            'description' => $request->description 
        ]);

        return response()->json($section->with('user')->find($section->id));

    }

    public function show($id)
    {
        //
    }

    public function edit($id)
    {
        //
    }

    public function update(Request $request, $id)
    {
        //
    }

    public function destroy($id)
    {
        //
    }
}
