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
// getdata
$surveyid=$_GET["formId"];
$surveyToFetch=[
    'createdby'=>$username,
    'formId'=>$surveyid,
];
$surveydetails=$collection->findOne($surveyToFetch);
$content="<div class='col-12 mb-3 p-0 d-flex justify-content-center'>".
"<h3 class='card-title'><b>$surveydetails->title</b></h3></div>".
"<div class='col-12 mb-1 p-0'>".
"<h6 class='card-title' id='surveyiddiv'><b>Form ID: </b><b style='color:#8d1dce'>survey$surveydetails->formId</b></h6></div>".
"<div class='col-12 mb-3 p-0'>".
"<h6 class='card-title'><b>Time started: $surveydetails->timestamp</b></h6></div>";
$tableContent='<thead><tr><th>Username</th>';
foreach($surveydetails->questionArray as $questions){
    $tableContent.='<th>'.$questions.'</th>';
}
$tableContent.='<th>Time submitted</th></tr></thead>';
$tableContent.='<tbody>';
foreach($surveydetails->responses as $cursor){
    $tableContent.='<tr>';
    foreach($cursor as $tablevalues){
        $tableContent.='<td>'.$tablevalues.'</td>';
    }
    $tableContent.='</tr>';
}
$tableContent.='</tbody';
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
    <link rel="stylesheet" href="surveystyle.css">
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
                    <li style="font-size: larger; white-space:nowrap !important;" class="p-2 namer"><b><?php echo $name ?></b></li>
                    <hr class="mx-2 my-1">
                    <a href="list.php"><li class="list-group-item px-2"><i class="bi bi-ui-checks-grid me-2"></i>My surveys</li></a>
                    <a href="#" class="currentpage"><li class="list-group-item px-2 active"><i class="bi bi-person-lines-fill me-2"></i>View survey</li></a>
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
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center accounter">
                            <li class="d-flex justify-content-center"><?php echo $name[0]; ?></li>
                        </div>
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                            <a  href="survey.php"><li class="list-group-item d-flex justify-content-center"><i class="bi bi-ui-checks"></i></li></a>
                        </div>
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                            <a href="#" class="currentpage"><li class="list-group-item px-2 active"><i class="bi bi-person-lines-fill me-2"></i></li></a>
                        </div>
                        <div class="col-3 p-0 d-flex justify-content-center align-items-center">
                            <a href="../logout.php"><li class="list-group-item d-flex justify-content-center"><i class="bi bi-box-arrow-right"></i></li></a>
                        </div>
                    </div>
                </ul>
            </div>
        </div>
    </div>
    <div class="container-fluid m-0 p-sm-2 p-1 mycontainer">
        <div class="row m-0 p-0 justify-content-center align-items-center">
            <div class="col-12 p-sm-3 p-2 mycard shadow rounded">
                <div class="row m-0 p-0 justify-content-center align-items-center">
                    <?php echo $content; ?>
                    <div class="col-12 p-0 mytable">
                        <table class="mb-3">
                            <?php echo $tableContent; ?>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
    <script src="script.js" ></script>
</body>
</html>