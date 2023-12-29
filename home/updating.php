<?php
session_start();
require '../vendor/autoload.php';
$mongoDBUrl="mongodb://localhost:27017";
$databaseName="SurveyDB";
$collectionName="SurveyCollection";
$client=new MongoDB\Client($mongoDBUrl);
$database=$client->selectDatabase($databaseName);
$collection=$database->selectCollection($collectionName);
if($_SERVER["REQUEST_METHOD"]=="POST"){
    $username=$_SESSION["loginusername"];
    $firstname=$_POST["signinfirstnamenew"];
    $lastname=$_POST["signinlastnamenew"];
    $profession=$_POST["professionnew"];
    $country=$_POST["countrynew"];
    $dataToFilter=[
        'username'=>$username
    ];
    $dataToUpdate=[
        '$set'=>[
            'firstname'=>$firstname,
            'lastname'=>$lastname,
            'profession'=>$profession,
            'country'=>$country,
        ],
    ];
    $updateResult=$collection->updateOne($dataToFilter,$dataToUpdate);
    if($updateResult->getModifiedCount()>0){
        echo "success";
    } 
    else{
        echo "failed";
    }
}
?>