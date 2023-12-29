<?php
require '../vendor/autoload.php';
$mongoDBUrl="mongodb://localhost:27017";
$databaseName="SurveyDB";
$collectionName="SurveyCollection";
$client=new MongoDB\Client($mongoDBUrl);
$database=$client->selectDatabase($databaseName);
$collection=$database->selectCollection($collectionName);
$username=$_SESSION["loginusername"];
$usernameToCheck=[
    'createdby'=>$username
];
$checkUsername=$collection->find($usernameToCheck);
$resultsArray=$checkUsername->toArray();
if(count($resultsArray)==0){
    echo "<div class='col-12 p-2'>".
            "<div class='card border-0 shadow w-100 h-100 p-md-2 px-sm-1 py-sm-2 px-0 py-2'>".
                "<div class='card-body d-flex justify-content-center align-items-center'>".
                    "<h4 class='mb-0'><b>No results found</b></h4>".
                "</div>".
            "</div>".
        "</div>";
}
else{
    foreach($resultsArray as $document){
        echo "<div class='col-12 p-2 pb-0'>".
                "<div class='card border-0 shadow w-100 h-100 p-md-2 px-sm-1 py-sm-2 px-0 py-2'>".
                    "<div class='card-body'>".
                        "<div class='row m-0 justify-content-center align-items-center'>".
                            "<div class='col-xl-10 col-lg-9 col-md-8 mb-md-0 mb-3 px-sm-2 px-1'>".
                                "<h3 class='card-title mb-1'><b>$document->title</b></h3>".
                                "<h6 class='card-title mb-1' style='color:#8d1dce' id='surveyiddiv'><b>survey$document->formId</b></h6>".
                                "<h6 class='card-title mb-1'><b>$document->timestamp</b></h6>".
                            "</div>".
                            "<div class='col-xl-2 col-lg-3 col-md-4 d-flex viewsurveybtn px-sm-2 px-1'>".
                                "<a href='viewsurvey.php?formId=$document->formId' role='button' class='btn mybtn mb-0 shadow'>View survey</a>".
                            "</div>".
                        "</div>".
                    "</div>".
                "</div>".
            "</div>";
    }
}
?>