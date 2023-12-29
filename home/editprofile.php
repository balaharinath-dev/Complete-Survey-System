<?php
session_start();
if(isset($_COOKIE["loginusername"])&&!isset($_SESSION["loginusername"])){
    $_SESSION["loginusername"]=$_COOKIE["loginusername"];
}
if(!isset($_COOKIE["loginusername"])&&!isset($_SESSION["loginusername"])){
    session_destroy();
    header("Location:../index.php");
    exit;
}
$username=$_SESSION["loginusername"];
require '../vendor/autoload.php';
$mongoDBUrl="mongodb://localhost:27017";
$databaseName="SurveyDB";
$collectionName="SurveyCollection";
$client=new MongoDB\Client($mongoDBUrl);
$database=$client->selectDatabase($databaseName);
$collection=$database->selectCollection($collectionName);
$usernameToFetch=[
    'username'=>$username
];
$checkUsername=$collection->findOne($usernameToFetch);
$firstname=$checkUsername->firstname;
$lastname=$checkUsername->lastname;
$name=$firstname." ".$lastname;
$profession=$checkUsername->profession;
$country=$checkUsername->country;
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Survey System-Z</title>
    <link rel="icon" href="../utilities/survey.ico" type="image/x-icon">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.2/font/bootstrap-icons.min.css">
    <style>@import url('https://fonts.googleapis.com/css2?family=Raleway&display=swap');</style>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container-fluid navcontainer m-0 px-sm-2 px-0">
        <div class="row m-0 py-sm-3 px-sm-2 py-3 px-0">
            <div class="col-12 d-flex flex-row justify-content-center align-items-center">
                <div class="me-sm-2 me-1"><img class="logo" src="../utilities/survey.svg"></div>
                <div class="title"><b>Survey System-Z</b></div>
            </div>
        </div>
    </div>
    <div class="container-fluid p-0 m-2 d-md-block d-none canvas shadow">
        <div class="row m-0 p-0">
            <div class="col-12 m-0 p-1">
                <ul class="list-group list-group-flush p-2">
                    <a href="home.php"><li class="list-group-item px-2"><i class="bi bi-house-fill me-2"></i>Home</li></a>
                    <a href="editprofile.php"><li class="list-group-item active px-2"><i class="bi bi-pencil-square me-2"></i>Update profile</li></a>
                    <hr class="mx-2 my-1">
                    <a href="../logout.php"><li class="list-group-item px-2"><i class="bi bi-box-arrow-right me-2"></i>Log out</li></a>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-fluid m-0 p-2 px-3 d-md-none d-block canvassm">
        <div class="row m-0 p-0">
            <div class="col-12 m-0 p-1 canvassmcontent shadow">
                <ul class="list-group list-group-flush p-2">
                    <div class="row m-0 d-flex justify-content-center align-items-center">
                        <div class="col-4 p-0 d-flex justify-content-center align-items-center">
                            <a href="home.php"><li class="list-group-item d-flex justify-content-center"><i class="bi bi-house-fill"></i></li></a>
                        </div>
                        <div class="col-4 p-0 d-flex justify-content-center align-items-center">
                            <a  href="editprofile.php"><li class="list-group-item d-flex justify-content-center active"><i class="bi bi-pencil-square"></i></li></a>
                        </div>
                        <div class="col-4 p-0 d-flex justify-content-center align-items-center">
                            <a href="../logout.php"><li class="list-group-item d-flex justify-content-center"><i class="bi bi-box-arrow-right"></i></li></a>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-fluid m-0 p-0 mycontainer">
        <div class="row m-0 d-flex justify-content-center align-items-center">
            <div class="col-12 p-0 d-flex justify-content-center align-items-center p-2">
                <form id="profileform">
                    <div class="row m-0 mycard p-4 rounded shadow finalcont">
                        <div class="col-12 p-0 mb-4">
                            <div class="form-floating">
                                <input type="mail" class="form-control" id="signinusername" placeholder="Username" value="<?php echo $username ?>" disabled>
                                <label for="signinusername" class="form-floating-label">Username</label>
                            </div>
                            <div id="signinusernamediv" class="invalid-feedback d-block"></div>
                        </div>
                        <div class="col-md-6 pe-md-2 p-0 mb-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="signinfirstname" placeholder="First name" value="<?php echo $firstname ?>">
                                <label for="signinfirstname" class="form-floating-label">First name</label>
                            </div>
                            <div id="signinfirstnamediv" class="invalid-feedback d-block"></div>
                        </div>
                        <div class="col-md-6 ps-md-2 p-0 mb-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="signinlastname" placeholder="Last name" value="<?php echo $lastname ?>">
                                <label for="signinlastname" class="form-floating-label">Last name</label>
                            </div>
                            <div id="signinlastnamediv" class="invalid-feedback d-block"></div>
                        </div>
                        <div class="col-md-6 pe-md-2 p-0 mb-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="profession" placeholder="Profession" value="<?php echo $profession ?>">
                                <label for="profession" class="form-floating-label">Profession</label>
                            </div>
                            <div id="professiondiv" class="invalid-feedback d-block"></div>
                        </div>
                        <div class="col-md-6 ps-md-2 p-0 mb-4">
                            <div class="form-floating">
                                <input type="text" class="form-control" id="country" placeholder="Country" value="<?php echo $country ?>">
                                <label for="country" class="form-floating-label">Country</label>
                            </div>
                            <div id="countrydiv" class="invalid-feedback d-block"></div>
                        </div>
                        <div class="col-12 p-0 mb-0">
                            <div class="form-floating">
                                <button type="submit" class="btn btn-lg w-100 shadow" id="profilebtn">Update profile</button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </div><div class="profiletoast d-none p-3 m-0 shadow" id="profiletoast">
        <div class="d-flex justify-content-between align-items-center">
          <div class="toast-body me-xl-3 d-flex justify-content-center align-items-center">
            <b>Profile updated successfully</b>
          </div>
          <button type="button" class="btn-close btn-close-profiletoast d-flex justify-content-end align-items-center"></button>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="script.js" ></script>
    <script>
        document.addEventListener("DOMContentLoaded",function(){
            var urlParams=new URLSearchParams(window.location.search);
            if(urlParams.get("profiletoast")==="true"){
                var myDiv=document.getElementById("profiletoast");
                if(myDiv){
                    setTimeout(() =>{
                        myDiv.classList.add("d-block");
                        myDiv.classList.remove("d-none");
                    },1000);
                }
            }
        });
        $(document).ready(function(){
            $(".btn-close-profiletoast").click(function(){
                $(".profiletoast").addClass("d-none").removeClass("d-block");
                var newURL=window.location.href.split('?')[0];
                history.pushState({},document.title,newURL);
            });
        });
    </script>
</body>
</html>