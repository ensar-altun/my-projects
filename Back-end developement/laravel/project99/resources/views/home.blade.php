@extends('layouts.app')

@section('content')
<div class="container">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card" stye = "height:300px">
                <div class="card-header">{{ __('Dashboard') }}</div>

                <div class="card-body">
                    @if (session('status'))
                        <div class="alert alert-success" role="alert">
                            {{ session('status') }}
                        </div>
                    @endif

                </div>
                <div class="container">
                <div class="row justify-content-center">
                <div class="col-md-6 " style ="margin:0px" ><a href="/home/1">Companies</a></div>
                <div class="col-md-6 " style = "margin:0px"><a href="/home/2">Employees</a></div>
                </div></div>


                
                
            </div>
        </div>
    </div>

</div>

@endsection
