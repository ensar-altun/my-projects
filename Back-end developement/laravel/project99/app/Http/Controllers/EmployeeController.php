<?php

namespace App\Http\Controllers;

use App\Models\Employee;
use Illuminate\Http\Request;

class EmployeeController extends Controller
{
    
    public function index()
    {
        //$employees = Employee::where('is_published',1)->get();
        $employees = Employee::all();
        return view("lists.employees", compact("employees"));
    }

   
    public function create()
    {
        return view("lists.employees");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $employees=new Employee();
        $employees->first_name=$request->get("first_name");
        $employees->last_name=$request->get("last_name");
        $employees->email=$request->get("email");
        $employees->phone=$request->get("phone");
        $employees->company=$request->get("company");
        $employees->save();
        //$employees->is_published=$request->boolean("is_published");
        return redirect()->back();

    }

    /**
     * Display the specified resource.
     */
    public function show(Employee $employee)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Employee $employee)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, Employee $employee)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Employee $employee)
    {
        //
    }
}
