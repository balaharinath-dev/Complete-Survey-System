<?php
require '../vendor/autoload.php';
$mongoDBUrl="mongodb://localhost:27017";
$databaseName="SurveyDB";
$collectionName="SurveyCollection";
$client=new MongoDB\Client($mongoDBUrl);
$database=$client->selectDatabase($databaseName);
$collection=$database->selectCollection($collectionName);
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $createdbycookie=$_POST["createdbycookie"];
    $usernameToGet=[
        'username'=>$createdbycookie
    ];
    $checkUsername=$collection->findOne($usernameToGet);
    $storedfirstname=$checkUsername->firstname;
    $storedlastname=$checkUsername->lastname;
    echo $storedfirstname.' '.$storedlastname;
}
?>