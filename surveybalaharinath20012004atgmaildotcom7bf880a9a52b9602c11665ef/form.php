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
                                            <div class="container-fluid mycontainer px-0">
                                                <div class="row m-0 align-items-center justify-content-center">
                                                    <div class="col-12 p-sm-3 py-3 px-2">
                                                        <div class="row m-0 p-sm-3 py-3 px-1 align-items-center justify-content-center mycard shadow">
                                                            <form id="submitsurveyform">
                                                                <div class="col-12 p-0 d-flex align-items-center justify-content-center mb-0">
                                                                    <h1 class="mb-1"><b>Smartphone Survey 2023</b></h1>
                                                                </div>
                                                                <div class="col-12 p-0 d-flex align-items-center justify-content-center mb-2">
                                                                    <h5>by <b>Balaharinath C</b></h5>
                                                                </div>
                                                                <div class="col-12 p-0 d-flex align-items-center justify-content-center mb-0">
                                                                    <p><b>Thank you for taking the time to participate in our Smartphone Survey 2023. Your insights are valuable in understanding current trends and preferences in the rapidly evolving world of mobile technology. This survey is designed to gather information about your smartphone usage, preferences, and expectations.</b></p>
                                                                </div>
                                                                <div class='col-12 p-0 mb-4'>                                   
                                                                    <div class='form-group'>
                                                                        <label class='form-label me-2' style='font-size:18px;'>Username</label>
                                                                        <input type='text' class='form-control' name='username'>
                                                                        <div class="invalid-feedback d-block" id='username'></div>
                                                                    </div>                                   
                                                                </div>
                                <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                    <div class='form-group'>
                                        <label class='form-label me-2' style='font-size:18px;'>What is your age group?</label>
                                        <div class="options d-flex flex-column">
                                            <label class="form-label"><input type='radio' class='form-check-input me-2' name='question1' value='18-24'>18-24</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question1' value='25-34'>25-34</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question1' value='35-44'>35-44</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question1' value='45-54'>45-54</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question1' value='55 and above'>55 and above</label>
                                        </div>
                                        <div class="invalid-feedback d-block" id='question1'></div>
                                    </div>                                   
                                </div>
                                <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                    <div class='form-group'>
                                        <label class='form-label me-2' style='font-size:18px;'>Which gender do you identify with?</label>
                                        <div class="options d-flex flex-column">
                                            <label class="form-label"><input type='radio' class='form-check-input me-2' name='question2' value='Male'>Male</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question2' value='Female'>Female</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question2' value='Prefer not to say'>Prefer not to say</label>
                                        </div>
                                        <div class="invalid-feedback d-block" id='question2'></div>
                                    </div>                                   
                                </div>
                                <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                    <div class='form-group'>
                                        <label class='form-label me-2' style='font-size:18px;'>How often do you use your smartphone in a day?</label>
                                        <div class="options d-flex flex-column">
                                            <label class="form-label"><input type='radio' class='form-check-input me-2' name='question3' value='Less than 1 hour'>Less than 1 hour</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question3' value='1-2 hours'>1-2 hours</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question3' value='2-4 hours'>2-4 hours</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question3' value='More than 4 hours'>More than 4 hours</label>
                                        </div>
                                        <div class="invalid-feedback d-block" id='question3'></div>
                                    </div>                                   
                                </div>
                                <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                    <div class='form-group'>
                                        <label class='form-label me-2' style='font-size:18px;'>What operating system does your current smartphone use?</label>
                                        <div class="options d-flex flex-column">
                                            <label class="form-label"><input type='radio' class='form-check-input me-2' name='question4' value='Android'>Android</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question4' value='iOS'>iOS</label><label class="form-label"><input type='radio' class='form-check-input me-2' name='question4' value='Other'>Other</label>
                                        </div>
                                        <div class="invalid-feedback d-block" id='question4'></div>
                                    </div>                                   
                                </div>
                                <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                    <div class='form-group'>
                                        <label class='form-label me-2' style='font-size:18px;'>Do you have any additional comments or suggestions regarding smartphones that you would like to share?</label>
                                        <textarea class='form-control' name='question5' rows='3' cols='1'></textarea>
                                        <div class="invalid-feedback d-block" id='question5'></div>
                                    </div>                                   
                                </div><div class='col-12 p-0 mt-4 mb-0'>
                                        <div class='row m-0'>
                                            <div class='col-6 p-1 ps-0'><button type='reset' class='btn mybtn mb-0 shadow w-100'>Clear</button></div>
                                            <div class='col-6 p-1 pe-0'><button type='submit' class='btn mybtn mb-0 shadow w-100'>Submit survey</button></div>
                                        </div>                                  
                                    </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="signintoast d-none p-3 m-0 shadow" id="signintoast">
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="toast-body me-xl-3 d-flex justify-content-center align-items-center">
                        <b><a href="../signin.php" style="color: #8d1dce;"><b>Sign in</b></a> to continue the process</b>
                        </div>
                        <button type="button" class="btn-close btn-close-signintoast d-flex justify-content-end align-items-center"></button>
                        </div>
                    </div>
                    <div class="submittoast d-none p-3 m-0 shadow" id="submittoast">
                        <div class="d-flex justify-content-between align-items-center">
                        <div class="toast-body me-xl-3 d-flex justify-content-center align-items-center">
                            <b style="font-size:15px;">Your response has been submitted</b>
                        </div>
                        <button type="button" class="btn-close btn-close-submittoast d-flex justify-content-end align-items-center"></button>
                        </div>
                    </div>
                    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.7.1/jquery.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"></script>
                    <script src="script.js" ></script>
                    <script>
                    document.addEventListener("DOMContentLoaded",function(){
                        var urlParams=new URLSearchParams(window.location.search);
                        if(urlParams.get("signintoast")==="true"){
                            var myDiv=document.getElementById("signintoast");
                            if(myDiv){
                                setTimeout(() =>{
                                    myDiv.classList.add("d-block");
                                    myDiv.classList.remove("d-none");
                                },1000);
                            }
                        }
                    });
                    $(document).ready(function(){
                        $(".btn-close-signintoast").click(function(){
                            $(".signintoast").addClass("d-none").removeClass("d-block");
                            var newURL=window.location.href.split('?')[0];
                            history.pushState({},document.title,newURL);
                        });
                    });
                    document.addEventListener("DOMContentLoaded",function(){
                        var urlParams=new URLSearchParams(window.location.search);
                        if(urlParams.get("submittoast")==="true"){
                            var myDiv=document.getElementById("submittoast");
                            if(myDiv){
                                setTimeout(() =>{
                                    myDiv.classList.add("d-block");
                                    myDiv.classList.remove("d-none");
                                },1000);
                            }
                        }
                    });
                    $(document).ready(function(){
                        $(".btn-close-submittoast").click(function(){
                            $(".submittoast").addClass("d-none").removeClass("d-block");
                            var newURL=window.location.href.split('?')[0];
                            history.pushState({},document.title,newURL);
                        });
                    });
                    </script>
                </body>
                </html>