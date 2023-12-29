var fillvaluearray=[];
                var radioarray=[];
                        var createdbycookie="balaharinath20012004@gmail.com";
                        var formId="balaharinath20012004atgmaildotcom7bf880a9a52b9602c11665ef";
                        $(document).ready(function(){
                            $(document).on("input","input,select,textarea",function(){
                                var value=$(this).val();
                                var name=$(this).attr("name");
                                var type=$(this).attr("type");
                                if(type=="radio"){
                                    if(!localStorage.getItem("radioarray")){
                                        localStorage.setItem("radioarray",JSON.stringify(radioarray));
                                    }
                                    if(localStorage.getItem("radioarray")){
                                        radioarray=JSON.parse(localStorage.getItem("radioarray"));
                                        var rindex=radioarray.findIndex(obj=>obj.name===name);
                                        if(rindex!=-1){
                                            radioarray[rindex].value=value;
                                        }
                                        else{
                                            radioarray.push({"value":value,"name":name});
                                        }
                                        localStorage.setItem("radioarray",JSON.stringify(radioarray));
                                    }
                                }
                                else{
                                    if(!localStorage.getItem("fillvaluearray")){
                                        localStorage.setItem("fillvaluearray",JSON.stringify(fillvaluearray));
                                    }
                                    if(localStorage.getItem("fillvaluearray")){
                                        fillvaluearray=JSON.parse(localStorage.getItem("fillvaluearray"));
                                        var index=fillvaluearray.findIndex(obj=>obj.name===name);
                                        if(index!=-1){
                                            fillvaluearray[index].value=value;
                                        }
                                        else{
                                            fillvaluearray.push({"value":value,"name":name});
                                        }
                                        localStorage.setItem("fillvaluearray",JSON.stringify(fillvaluearray));
                                    }
                                }
                            });
                        });
                        $(document).ready(function(){
                            if(localStorage.getItem("fillvaluearray")){
                                fillvaluearray=JSON.parse(localStorage.getItem("fillvaluearray"));
                                fillvaluearray.forEach(function(item){
                                    $('[name='+item.name+']').val(item.value);
                                })
                            }
                            if(localStorage.getItem("radioarray")){
                                radioarray=JSON.parse(localStorage.getItem("radioarray"));
                                radioarray.forEach(function(item){
                                    $('[name="'+item.name+'"][value="'+item.value+'"]').prop("checked",true);
                                })
                            }
                        });
                        $(document).ready(function(){
                            $(document).on("submit","#submitsurveyform",function(event){
                                event.preventDefault();
                                var decider1=okForm1();
                                var decider2=okForm2();
                                var decider=decider1&&decider2;
                                if(decider){
                                    var formData=$("#submitsurveyform").serializeArray();
                                    var formDataFinal=[];
                                    formData.forEach(function(item){
                                        formDataFinal.push(item.value);
                                    });
                                    const xhr=new XMLHttpRequest();
                                    xhr.open("POST","submitform.php",true);
                                    xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                                    xhr.send('createdbycookie='+createdbycookie+'&formId='+formId+'&formDataFinal='+JSON.stringify(formDataFinal));
                                    xhr.onreadystatechange=function(){
                                        if(xhr.readyState===4&&xhr.status===200){
                                            var myresponse=xhr.responseText;
                                            if(myresponse=="success"){
                                                window.location.href="form.php?submittoast=true";
                                                window.scrollTo(0, 0);
                                                localStorage.removeItem("fillvaluearray");
                                                localStorage.removeItem("radioarray");
                                            }
                                            else if(myresponse=="usernamenotexist"){
                                                $("#username").html("You are not an active user");
                                                $("[name=username].form-control").addClass("is-invalid");
                                                var element=document.getElementById('username');
                                                var myDiv=document.getElementById("signintoast");
                                                if(myDiv){
                                                    setTimeout(() =>{
                                                        myDiv.classList.add("d-block");
                                                        myDiv.classList.remove("d-none");
                                                    },500);
                                                }
                                                $(".btn-close-signintoast").click(function(){
                                                    $(".signintoast").addClass("d-none").removeClass("d-block");
                                                });
                                                element.scrollIntoView({ behavior: 'smooth', block: 'center'});
                                            }
                                            else if(myresponse=="alreadysubmitted"){
                                                $("#username").html("You have already submitted your response");
                                                $("[name=username].form-control").addClass("is-invalid");
                                                var element=document.getElementById('username');
                                                element.scrollIntoView({ behavior: 'smooth', block: 'center'});
                                            }
                                            else{
                                                alert('Error occurred: '+myresponse.message);
                                            }
                                        }
                                        else if(xhr.readyState==2||xhr.readyState==3){}
                                        else{
                                            alert(xhr.readyState);
                                        }
                                    };
                                }
                            });
                        });
                        function okForm1(){
                            var targetElement=[];
                            var formData=$("#submitsurveyform").serializeArray();
                            formData.forEach(function(item){
                                if(item.value==""){
                                    $('[name='+item.name+']').addClass("is-invalid");
                                    $('[id='+item.name+'].invalid-feedback').html("This field cannot be empty");
                                    var index=targetElement.indexOf(item.name);
                                    if(index==-1){
                                        targetElement.push(item.name);
                                    }
                                    else{
                                        targetElement[index]=item.name;
                                    }
                                }
                                else{
                                    $('[name='+item.name+']').removeClass("is-invalid");
                                    $('[id='+item.name+'].invalid-feedback').html("");
                                }
                            });
                            if(targetElement.length==0){
                                return true;
                            }
                            else{
                                var element=document.querySelector('[id="'+targetElement[0]+'"].invalid-feedback');
                                element.scrollIntoView({ behavior: 'smooth', block: 'center'});
                                return false;
                            }
                        }
                        function okForm2(){
                            var newtargetElement=[];
                            var allRadioButtons=$('input[type="radio"]');
                            var groups=Array.from(new Set(allRadioButtons.map(function(){
                                    return this.name;
                            }).get()));
                            for(var i=0;i<groups.length;i++){
                                var groupName=groups[i];
                                var groupSelected=$('input[name="'+groupName+'"]:checked').length>0;
                                if(!groupSelected){
                                    $('[id='+groupName+'].invalid-feedback').html("This field cannot be empty");
                                    var index=newtargetElement.indexOf(groupName);
                                    if(index==-1){
                                        newtargetElement.push(groupName);
                                    }
                                    else{
                                        newtargetElement[index]=groupName;
                                    }
                                }
                                else{
                                    $('[id='+groupName+'].invalid-feedback').html("");
                                }
                            }
                            if(newtargetElement.length==0){
                                return true;
                            }
                            else{
                                var element=document.querySelector('[id="'+newtargetElement[0]+'"].invalid-feedback');
                                element.scrollIntoView({ behavior: 'smooth', block: 'center'});
                                return false;
                            }
                        }