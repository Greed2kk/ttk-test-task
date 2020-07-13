<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Section;

class SectionController extends Controller
{
    public function __constructor()
    {
        $this->middleware('auth');
    }

    public function index(Request $request, Section $section)
    {
        $sections = $section->orderBy('created_at', 'desc')->take(20)->get();

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
            'title' => 'required|max:150',
            'description' => 'required|max:500',
        ]);
        if ($request->user()->isAdmin()) {
            $section = $request->user()->sections()->create([
                'title' => $request->title,
                'description' => $request->description
            ]);
            return response()->json($section->with('user')->find($section->id));
        } else {
            return response('Access denied.', 403);
        }
    }

    public function show($id)
    {
        //
    }

    public function edit($id, Request $request)
    {

        if ($request->user()->isAdmin()) {
            $section = Section::findOrFail($id);
            return response()->json([
                'section' => $section,
            ]);
        }
        return response('Access denied.', 403);
    }

    public function update(Request $request, $id)
    {   
        if ($request->user()->isAdmin()) {
        $input = $request->all();
        $section = Section::findOrFail($id);
        $section->update($input);
        return response()->json($section->with('user')->find($section->id));
        }
        return response('Access denied.', 403);
    }

    public function destroy($id, Request $request)
    {
        if ($request->user()->isAdmin()) {
            Section::findOrFail($id)->delete();
        }
        else{
            return response('Access denied.', 403);
        }
        
    }
}
