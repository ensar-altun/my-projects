<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="">
</head>
<body>
    <h1>Add Company</h1>
    <form action="/home/1" method="POST">
        
        @csrf
        <input type="text" name="name" placeholder="Name">
        <textarea name="address" cols="20" rows="5" placeholder="Address"></textarea>
        <input type="text" name="phone" placeholder="Phone Number">
        <input type="text" name="email" placeholder="E-mail">
        <input type="text" name="link" placeholder="Web Site">
        <button>Add</button>
        <input type="checkbox"> Save

    </form>
    <div class="container">
 <table >
    <tr>
        <th>name</th>
        <th>address</th>
        <th>phone</th>
        <th>email</th>
        <th>website</th>
    </tr>
    
    @foreach ($companies as $content)
<tr >
    <td>{{$content->name}}</td>
    <td>{{$content->address}}</td>
    <td>{{$content->phone}}</td>
    <td>{{$content->email}}</td>
    <td>{{$content->link}}</td>
    
</tr>
    @endforeach
</table>
</div>
</body>
</html>