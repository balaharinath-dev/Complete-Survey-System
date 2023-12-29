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
                            $formId=$_POST["formId"];
                            $formDataFinal=json_decode($_POST["formDataFinal"]);
                            date_default_timezone_set('Asia/Kolkata');
                            $timestamp=time();
                            $formDataFinal[]=date("Y-m-d H:i:s", $timestamp);
                            $usernameToCheck=[
                                'username'=>$formDataFinal[0],
                            ];
                            $checkUsername=$collection->findOne($usernameToCheck);
                            if($checkUsername==null){
                                echo "usernamenotexist";
                            }
                            else{
                                $createdbyToCheck=[
                                    'createdby'=>$createdbycookie,
                                    'formId'=>$formId,
                                ];
                                $valuefound="";
                                $result=$collection->findOne($createdbyToCheck);
                                $responsearray=$result->responses;
                                foreach($responsearray as $checker){
                                    if($checker[0]==$formDataFinal[0]){
                                        $valuefound="ok";
                                        break;
                                    }
                                }
                                if($valuefound=="ok"){
                                    echo "alreadysubmitted";
                                }
                                else{
                                    $createdbyInsert1=[
                                        'createdby'=>$createdbycookie,
                                        'formId'=>$formId,
                                    ];
                                    $dataArrayToInsert1=[
                                        '$push'=>['responses'=>$formDataFinal],
                                    ];
                                    $pushresult1=$collection->updateOne($createdbyInsert1,$dataArrayToInsert1);
                                    $createdbyInsert2=[
                                        'username'=>$formDataFinal[0],
                                    ];
                                    $dataArrayToInsert2=[
                                        '$inc'=>['surveyssubmitted'=>1],
                                    ];
                                    $pushresult2=$collection->updateOne($createdbyInsert2,$dataArrayToInsert2);
                                    if($pushresult1->getModifiedCount()>0&&$pushresult2->getModifiedCount()>0){
                                        echo "success";
                                    }
                                }
                            }
                        }
                        ?>