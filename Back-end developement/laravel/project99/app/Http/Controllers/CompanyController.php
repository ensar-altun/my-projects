<?php

namespace App\Http\Controllers;
use Illuminate\Support\Facades\DB;

use App\Models\Company;
use Illuminate\Http\Request;

class CompanyController extends Controller
{
    
    public function index()
    {
        $companies = Company::all();
        return view("lists.companies", compact("companies"));

        // return view('lists.companies', [
        //     'companies' => DB::table('companies')->paginate(2)
        // ]);
    }
    public function create(){
        // return view("lists.companies");
   
   
    }

   
    public function store(Request $request)
    {
        $companies=new Company();
        $companies->name=$request->get('name');
        $companies->address=$request->get('address');
        $companies->phone=$request->get('phone');
        $companies->email=$request->get('email');
        $companies->company=$request->get('company');
        $companies->save();

    return redirect()->back(); 
    }

    /**
     * Display the specified resource.
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Company $company)
    {
        //
    }
}
