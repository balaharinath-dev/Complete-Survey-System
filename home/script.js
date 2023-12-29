var started;
$(document).ready(function(){
    if(!localStorage.getItem("started")){
        localStorage.setItem("started",0);
    }
    started=localStorage.getItem("started");
    if(started==0){
        $(".surveyfinalcont").html(`<div class='card border-0 shadow w-100 h-100 p-1'>
                                <div class='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h1 class='mb-3'><b>Hello there!</b></h1>
                                    <button type='button' class='btn mybtn startsurvey'>Start a survey</button>
                                </div>
                            </div>`);
    }
    if(started==1){
        $(".surveyfinalcont").html(`<div class='card border-0 shadow w-100 h-100 p-1'>
                                <div class='card-body'>
                                    <form id='createsurveyform'>
                                        <div class='row m-0' id='questionbank'>
                                            <div class='col-12 p-0 mb-2'>
                                                <div class='form-group'>
                                                    <label class='form-label me-2' style='font-size:25px;'>Survey title</label><button type='button' class='btn py-0 px-2 mb-2 cancelsurvey mybtn' style='font-size: 17px;'>Cancel</button>
                                                    <input type='text' class='form-control' name='createsurveytitle'>
                                                    <div class="invalid-feedback d-block" id='createsurveytitle'></div>
                                                </div>                                  
                                            </div>
                                            <div class='col-12 p-0 mb-3'>                                   
                                                <div class='form-group'>
                                                    <label class='form-label me-2' style='font-size:18px;'>Survey description</label>
                                                    <textarea class='form-control' name='createsurveydescription' rows='3' cols='1'></textarea>
                                                    <div class="invalid-feedback d-block" id='createsurveydescription'></div>
                                                </div>                                   
                                            </div>
                                            <div class='col-12 mb-3 myborder rounded p-3' id='qa1'>                                    
                                                <div class='form-group mb-2'>
                                                    <label class='form-label'>Question</label>
                                                    <input type='text' class='form-control questionInput' name='question1'>
                                                    <div class="invalid-feedback d-block" id='question1'></div>
                                                </div>
                                                <div class='form-group mb-2'>
                                                    <label class='form-label'>Answer type</label>
                                                    <select class='form-select typeInput' id="answertype1" name='answertype1''>
                                                        <option value='' selected>Select an answer type</option>
                                                        <option value='text'>Text</option>
                                                        <option value='textarea'>Text area</option>
                                                        <option value='radio'>Radio</option>
                                                        <option value='select'>Select</option>
                                                        <option value='date'>Date</option>
                                                    </select>
                                                    <div class="invalid-feedback d-block" id='answertype1'></div>
                                                </div>
                                            </div>
                                            <div class='col-12 p-0 mt-4 mb-0'>
                                                <div class='row m-0'>
                                                    <div class='col-6 p-1 ps-0'><button type='button' id='addquestion' class='btn mybtn mb-0 shadow w-100'>Add question</button></div>
                                                    <div class='col-6 p-1 pe-0'><button type='submit' class='btn mybtn mb-0 shadow w-100'>Create survey</button></div>
                                                </div>                                  
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>`)
    }
    $(document).on("click",".surveyfinalcont .startsurvey",function(){
        started=1;
        localStorage.setItem("started",started);
        $(".surveyfinalcont").html(`<div class='card border-0 shadow w-100 h-100 p-1'>
                                <div class='card-body d-flex flex-column justify-content-center align-items-center'>
                                    <h1 class='mb-3'><b>Hello there!</b></h1>
                                    <button type='button' class='btn mybtn startsurvey'>Start a survey</button>
                                </div>
                            </div>`);
        location.reload();
    });
    $(document).on("click",".surveyfinalcont .cancelsurvey",function(){
        localStorage.removeItem("questionnoArray");
        localStorage.removeItem("roptArray");
        localStorage.removeItem("soptArray");
        localStorage.removeItem("valueArray");
        started=0;
        localStorage.setItem("started",started);
        $(".surveyfinalcont").html(`<div class='card border-0 shadow w-100 h-100 p-1'>
                                <div class='card-body'>
                                    <form id='createsurveyform'>
                                        <div class='row m-0' id='questionbank'>
                                            <div class='col-12 p-0 mb-3'>
                                                <div class='form-group'>
                                                    <label class='form-label me-2' style='font-size:25px;'>Survey title</label><button type='button' class='btn py-0 px-2 mb-2 cancelsurvey mybtn' style='font-size: 17px;'>Cancel</button>
                                                    <input type='text' class='form-control' name='createsurveytitle'>
                                                    <div class="invalid-feedback d-block" id='createsurveytitle'></div>
                                                </div>                                   
                                            </div>
                                            <div class='col-12 p-0 mb-3'>                                   
                                                <div class='form-group'>
                                                    <label class='form-label me-2' style='font-size:18px;'>Survey description</label>
                                                    <textarea class='form-control' name='createsurveydescription' rows='3' cols='1'></textarea>
                                                    <div class="invalid-feedback d-block" id='createsurveydescription'></div>
                                                </div>                                   
                                            </div>
                                            <div class='col-12 mb-3 myborder rounded p-3' id='qa1'>                                    
                                                <div class='form-group mb-2'>
                                                    <label class='form-label'>Question</label>
                                                    <input type='text' class='form-control questionInput' name='question1'>
                                                    <div class="invalid-feedback d-block" id='question1'></div>
                                                </div>
                                                <div class='form-group mb-2'>
                                                    <label class='form-label'>Answer type</label>
                                                    <select class='form-select typeInput' name='answertype1'>
                                                        <option value='' selected>Select an answer type</option>
                                                        <option value='text'>Text</option>
                                                        <option value='textarea'>Text area</option>
                                                        <option value='radio'>Radio</option>
                                                        <option value='select'>Select</option>
                                                        <option value='date'>Date</option>
                                                    </select>
                                                    <div class="invalid-feedback d-block" id='answertype1'></div>
                                                </div>
                                            </div>
                                            <div class='col-12 p-0 mt-4 mb-0'>
                                                <div class='row m-0'>
                                                    <div class='col-6 p-1 ps-0'><button type='button' id='addquestion' class='btn mybtn mb-0 shadow w-100'>Add question</button></div>
                                                    <div class='col-6 p-1 pe-0'><button type='submit' class='btn mybtn mb-0 shadow w-100'>Create survey</button></div>
                                                </div>                                  
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>`);
        location.reload();
    });
});
started=localStorage.getItem("started");
var roptArray=[];
var soptArray=[];
if(started==1){
    var questionnoVal;
    $(document).ready(function(){
        $("#questionbank").ready(function(){
            var questionno=$("#questionbank").children().last().prev().attr("id");
            if(questionno){
                var divider=questionno.match(/^([a-zA-Z]+)(.*)$/);
                questionnoVal=divider[2];
            }
        });
    });
    $(document).ready(function(){
        if(localStorage.getItem("questionnoArray")&&JSON.parse(localStorage.getItem("questionnoArray")!==null)){
            var noofQues=JSON.parse(localStorage.getItem("questionnoArray"));
            noofQues.forEach(function(quesno){
                var newquestion="<div class='col-12 mb-3 myborder rounded p-3' id='qa"+quesno+"'>"+                                    
                                "<div class='form-group mb-2'>"+
                                "<label class='form-label'>Question</label><button type='button' class='btn py-0 px-2 mx-2 mybtn delbtn' id='delbtn"+quesno+"' style='font-size:12px;'>Delete</button>"+
                                    "<input type='text' class='form-control' name='question"+quesno+"'>"+
                                    "<div class='invalid-feedback d-block' id='question"+quesno+"'></div>"+
                                "</div>" +
                                "<div class='form-group mb-2'>"+
                                    "<label class='form-label'>Answer type</label>"+
                                    "<select class='form-select typeInput' id='answertype"+quesno+"' name='answertype"+quesno+"'>"+
                                        "<option value='' selected>Select an answer type</option>"+
                                        "<option value='text'>Text</option>"+
                                        "<option value='textarea'>Text area</option>"+
                                        "<option value='radio'>Radio</option>"+
                                        "<option value='select'>Select</option>"+
                                        "<option value='date'>Date</option>"+
                                    "</select>"+
                                    "<div class='invalid-feedback d-block' id='answertype"+quesno+"'></div>"+
                                "</div>"+
                            "</div>"
                $("#questionbank").children().last().before(newquestion);
            });
        }
    });
    var questionnoArray=[];
    $(document).ready(function(){
        $("#addquestion").on("click",function(){
            ++questionnoVal;
            if(localStorage.getItem("questionnoArray")){
                questionnoArray=JSON.parse(localStorage.getItem("questionnoArray"));
            }
            questionnoArray.push(questionnoVal);
            localStorage.setItem("questionnoArray",JSON.stringify(questionnoArray));
            var newquestion="<div class='col-12 mb-3 myborder rounded p-3' id='qa"+questionnoVal+"'>"+                                    
                            "<div class='form-group mb-2'>"+
                                "<label class='form-label'>Question</label><button type='button' class='btn py-0 px-2 mx-2 mybtn delbtn' id='delbtn"+questionnoVal+"' style='font-size:12px;'>Delete</button>"+
                                "<input type='text' class='form-control questionInput' name='question"+questionnoVal+"'>"+
                                "<div class='invalid-feedback d-block' id='question"+questionnoVal+"'></div>"+
                            "</div>" +
                            "<div class='form-group mb-2'>"+
                                "<label class='form-label'>Answer type</label>"+
                                "<select class='form-select typeInput' id='answertype"+questionnoVal+"' name='answertype"+questionnoVal+"'>"+
                                    "<option value='' selected>Select an answer type</option>"+
                                    "<option value='text'>Text</option>"+
                                    "<option value='textarea'>Text area</option>"+
                                    "<option value='radio'>Radio</option>"+
                                    "<option value='select'>Select</option>"+
                                    "<option value='date'>Date</option>"+
                                "</select>"+
                                "<div class='invalid-feedback d-block' id='answertype"+questionnoVal+"'></div>"+
                            "</div>"+
                        "</div>"
            $("#questionbank").children().last().before(newquestion);
        });
    });
    $(document).ready(function(){
        $(document).on("click",".delbtn",function(){
            var id=$(this).attr("id");
            var divider=id.match(/^([a-zA-Z]+)(.*)$/);
            var idVal=divider[2];
            $("#qa"+idVal).remove();
            questionnoArray=JSON.parse(localStorage.getItem("questionnoArray"));
            var indexVal=questionnoArray.indexOf(parseInt(idVal));
            questionnoArray.splice(indexVal,1);
            localStorage.setItem("questionnoArray",JSON.stringify(questionnoArray));
            if(localStorage.getItem("roptArray")){
                roptArray=JSON.parse(localStorage.getItem("roptArray"));
                var newArray=roptArray.filter(function(item){
                    return item.id!==idVal;
                });
                roptArray=newArray;
                localStorage.setItem("roptArray",JSON.stringify(roptArray));
            }
            if(localStorage.getItem("soptArray")){
                soptArray=JSON.parse(localStorage.getItem("soptArray"));
                var newArray=soptArray.filter(function(item){
                    return item.id!==idVal;
                });
                soptArray=newArray;
                localStorage.setItem("soptArray",JSON.stringify(soptArray));
            }
            if(localStorage.getItem("valueArray")){
                valueArray=JSON.parse(localStorage.getItem("valueArray"));
                newArray = valueArray.filter(item => {
                    const matchResult = item.name.match(/optval(\d+)[rs](\d+)/);
                    if (item.name === 'question' + idVal) {
                      return item.name;
                    }
                    else if (item.name === 'answertype' + idVal) {
                      return item.name;
                    } 
                    else if (matchResult && matchResult[1] === idVal) {
                      return item.name;
                    }
                  });
                  const resultArray = valueArray.filter(item => !newArray.includes(item));
                localStorage.setItem("valueArray",JSON.stringify(resultArray));
            }
        });
    });
    $(document).ready(function(){
        $("#questionbank").on("input",".typeInput",function(){
            var id=$(this).attr("id");
            var divider=id.match(/^([a-zA-Z]+)(.*)$/);
            var idVal=divider[2];
            if(localStorage.getItem("roptArray")){
                roptArray=JSON.parse(localStorage.getItem("roptArray"));
                var roptchecker=roptArray.some(function(item) {
                    return item.id===idVal;
                });
            }
            if(localStorage.getItem("soptArray")){
                soptArray=JSON.parse(localStorage.getItem("soptArray"));
                var soptchecker=soptArray.some(function(item) {
                    return item.id===idVal;
                });
            }
            if($(this).val()=="radio"&&!roptchecker){
                if($("#soptdiv"+idVal)){
                    $("#soptdiv"+idVal).remove();
                    if(localStorage.getItem("soptArray")){
                        soptArray=JSON.parse(localStorage.getItem("soptArray"));
                        var newArray=soptArray.filter(function(item){
                            return item.id!==idVal;
                        });
                        soptArray=newArray;
                        localStorage.setItem("soptArray",JSON.stringify(soptArray));
                    }
                    if(localStorage.getItem("valueArray")){
                        valueArray=JSON.parse(localStorage.getItem("valueArray"));
                        newArray = valueArray.filter(item => {
                            const matchResult = item.name.match(/optval(\d+)[rs](\d+)/);
                            if (matchResult && matchResult[1] === idVal) {
                              return item.name;
                            }
                          });
                          const resultArray = valueArray.filter(item => !newArray.includes(item));
                        localStorage.setItem("valueArray",JSON.stringify(resultArray));
                    }
                }
                if(!localStorage.getItem("roptArray")){
                    localStorage.setItem("roptArray",JSON.stringify(roptArray));
                }
                if(localStorage.getItem("roptArray")){
                    roptArray=JSON.parse(localStorage.getItem("roptArray"));
                    roptArray.push({"id":idVal,"option":[]});
                }
                localStorage.setItem("roptArray",JSON.stringify(roptArray));
                var roptdiv="<div class='form-group mb-2' id='roptdiv"+idVal+"'><label class='form-label'>Options</label><button type='button' class='btn py-0 px-2 mx-2 addopt raddopt mybtn' id='raddopt"+idVal+"' style='font-size: 10px;'>Add</button><div class='d-flex flex-column' id='optval"+idVal+"r1'><input class='form-control' type='text' name='optval"+idVal+"r1'><div class='invalid-feedback d-block mb-2' id='optval"+idVal+"r1'></div></div></div>"
                $("#qa"+idVal).append(roptdiv);
            }
            if($(this).val()=="select"&&!soptchecker){
                if($("#roptdiv"+idVal)){
                    $("#roptdiv"+idVal).remove();
                    if(localStorage.getItem("roptArray")){
                        roptArray=JSON.parse(localStorage.getItem("roptArray"));
                        var newArray=roptArray.filter(function(item){
                            return item.id!==idVal;
                        });
                        roptArray=newArray;
                        localStorage.setItem("roptArray",JSON.stringify(roptArray));
                    }
                    if(localStorage.getItem("valueArray")){
                        valueArray=JSON.parse(localStorage.getItem("valueArray"));
                        newArray = valueArray.filter(item => {
                            const matchResult = item.name.match(/optval(\d+)[rs](\d+)/);
                            if (matchResult && matchResult[1] === idVal) {
                              return item.name;
                            }
                          });
                          const resultArray = valueArray.filter(item => !newArray.includes(item));
                        localStorage.setItem("valueArray",JSON.stringify(resultArray));
                    }
                }
                if(!localStorage.getItem("soptArray")){
                    localStorage.setItem("soptArray",JSON.stringify(soptArray));
                }
                if(localStorage.getItem("soptArray")){
                    soptArray=JSON.parse(localStorage.getItem("soptArray"));
                    soptArray.push({"id":idVal,"option":[]});
                }
                localStorage.setItem("soptArray",JSON.stringify(soptArray));
                var soptdiv="<div class='form-group mb-2' id='soptdiv"+idVal+"'><label class='form-label'>Options</label><button type='button' class='btn py-0 px-2 mx-2 addopt saddopt mybtn' id='saddopt"+idVal+"' style='font-size: 10px;'>Add</button><div class='d-flex flex-column' id='optval"+idVal+"s1'><input class='form-control' type='text' name='optval"+idVal+"s1'><div class='invalid-feedback d-block mb-2' id='optval"+idVal+"s1'></div></div></div>"
                $("#qa"+idVal).append(soptdiv);
            }
            if($(this).val()!="radio"&&$(this).val()!="select"){
                if($("#roptdiv"+idVal)){
                    $("#roptdiv"+idVal).remove();
                    if(localStorage.getItem("roptArray")){
                        roptArray=JSON.parse(localStorage.getItem("roptArray"));
                        var newArray=roptArray.filter(function(item){
                            return item.id!==idVal;
                        });
                        roptArray=newArray;
                        localStorage.setItem("roptArray",JSON.stringify(roptArray));
                    }
                }
                if($("#soptdiv"+idVal)){
                    $("#soptdiv"+idVal).remove();
                    if(localStorage.getItem("soptArray")){
                        soptArray=JSON.parse(localStorage.getItem("soptArray"));
                        var newArray=soptArray.filter(function(item){
                            return item.id!==idVal;
                        });
                        soptArray=newArray;
                        localStorage.setItem("soptArray",JSON.stringify(soptArray));
                    }
                }
                if(localStorage.getItem("valueArray")){
                    valueArray=JSON.parse(localStorage.getItem("valueArray"));
                    newArray = valueArray.filter(item => {
                        const matchResult = item.name.match(/optval(\d+)[rs](\d+)/);
                        if (matchResult && matchResult[1] === idVal) {
                          return item.name;
                        }
                      });
                      const resultArray = valueArray.filter(item => !newArray.includes(item));
                    localStorage.setItem("valueArray",JSON.stringify(resultArray));
                }
            }
        });
    });
    $(document).ready(function(){
        if(localStorage.getItem("roptArray")&&JSON.parse(localStorage.getItem("roptArray"))!==null){
            var roptAvail=JSON.parse(localStorage.getItem("roptArray"));
            roptAvail.forEach(function(yes){
                var idVal=yes.id;
                var roptdiv="<div class='form-group mb-2' id='roptdiv"+idVal+"'><label class='form-label'>Options</label><button type='button' class='btn py-0 px-2 mx-2 addopt raddopt mybtn' id='raddopt"+idVal+"' style='font-size: 10px;'>Add</button><div class='d-flex flex-column' id='optval"+idVal+"r1'><input class='form-control' type='text' name='optval"+idVal+"r1'><div class='invalid-feedback d-block mb-2' id='optval"+idVal+"r1'></div></div></div>"
                $("#qa"+idVal).append(roptdiv);
            });
        }
        if(localStorage.getItem("soptArray")&&JSON.parse(localStorage.getItem("soptArray"))!==null){
            var soptAvail=JSON.parse(localStorage.getItem("soptArray"));
            soptAvail.forEach(function(yes){
                var idVal=yes.id;
                var soptdiv="<div class='form-group mb-2' id='soptdiv"+idVal+"'><label class='form-label'>Options</label><button type='button' class='btn py-0 px-2 mx-2 addopt saddopt mybtn' id='saddopt"+idVal+"' style='font-size: 10px;'>Add</button><div class='d-flex flex-column' id='optval"+idVal+"s1'><input class='form-control' type='text' name='optval"+idVal+"s1'><div class='invalid-feedback d-block mb-2' id='optval"+idVal+"s1'></div></div></div>"
                $("#qa"+idVal).append(soptdiv);
            });
        }
    });
    var idVal2;
    $(document).ready(function(){
       $(document).on("click",".addopt",function(){
        if($(this).hasClass("raddopt")){
            var id=$(this).attr("id");
            var divider=id.match(/^([a-zA-Z]+)(.*)$/);
            var idVal1=divider[2];
            var roptdiv=$(this).parent();
            var lastopt=roptdiv.children().last().attr("id");
            var divider=lastopt.match(/\d+/g);
            idVal2=divider[1];
            ++idVal2;
            roptArray=JSON.parse(localStorage.getItem("roptArray"));
            var index=roptArray.findIndex(obj=>obj.id===idVal1);
            roptArray[index].option.push(idVal2);
            localStorage.setItem("roptArray",JSON.stringify(roptArray));
            $("#roptdiv"+idVal1).append("<div class='mb-2 d-flex row align-items-center px-2' id='roptnxt"+idVal1+"r"+idVal2+"'><div class='col-11 px-1'><input class='form-control' type='text' name='optval"+idVal1+"r"+idVal2+"'></div><div class='col-1 px-1 d-flex justify-content-center'><button type='button' class='btn p-0 optdel' id='optdel"+idVal1+"r"+idVal2+"' style='background-color:transparent; border:0'><i class='bi bi-trash-fill'></i></button></div><div class='col-12 px-1'><div class='invalid-feedback d-block' id='optval"+idVal1+"r"+idVal2+"'></div></div></div>");
        }
        if($(this).hasClass("saddopt")){
            var id=$(this).attr("id");
            var divider=id.match(/^([a-zA-Z]+)(.*)$/);
            var idVal1=divider[2];
            var soptdiv=$(this).parent();
            var lastopt=soptdiv.children().last().attr("id");
            var divider=lastopt.match(/\d+/g);
            idVal2=divider[1];
            ++idVal2;
            soptArray=JSON.parse(localStorage.getItem("soptArray"));
            var index=soptArray.findIndex(obj=>obj.id===idVal1);
            soptArray[index].option.push(idVal2);
            localStorage.setItem("soptArray",JSON.stringify(soptArray));
            $("#soptdiv"+idVal1).append("<div class='mb-2 d-flex row align-items-center px-2' id='soptnxt"+idVal1+"s"+idVal2+"'><div class='col-11 px-1'><input class='form-control' type='text' name='optval"+idVal1+"s"+idVal2+"'></div><div class='col-1 px-1 d-flex justify-content-center'><button type='button' class='btn p-0 optdel' id='optdel"+idVal1+"s"+idVal2+"' style='background-color:transparent; border:0'><i class='bi bi-trash-fill'></i></button></div><div class='col-12 px-1'><div class='invalid-feedback d-block' id='optval"+idVal1+"s"+idVal2+"'></div></div></div>");
        }
       }); 
    });
    $(document).ready(function(){
        $(document).on("click",".optdel",function(){
            var id=$(this).attr('id');
            var divider=id.match(/optdel(\d+)[rs](\d+)/);
            var idVal1=divider[1];
            var idVal2=divider[2];
            var charfinder=id.match(/^([a-zA-Z]+)(.*)$/);
            var charAfterNumeric=charfinder[2].charAt(charfinder[2].search(/\d/) + 1);
            if(charAfterNumeric=="r"){
                $("#roptnxt"+idVal1+"r"+idVal2).remove();
                roptArray=JSON.parse(localStorage.getItem("roptArray"));
                var index=roptArray.findIndex(obj=>obj.id===idVal1);
                var indexVal=roptArray[index].option.indexOf(parseInt(idVal2));
                roptArray[index].option.splice(indexVal,1);
                localStorage.setItem("roptArray",JSON.stringify(roptArray));
            }
            if(charAfterNumeric=="s"){
                $("#soptnxt"+idVal1+"s"+idVal2).remove();
                soptArray=JSON.parse(localStorage.getItem("soptArray"));
                var index=soptArray.findIndex(obj=>obj.id===idVal1);
                var indexVal=soptArray[index].option.indexOf(parseInt(idVal2));
                soptArray[index].option.splice(indexVal,1);
                localStorage.setItem("soptArray",JSON.stringify(soptArray));
            }
            if(localStorage.getItem("valueArray")){
                var name=$(this).prev().attr("name");
                valueArray=JSON.parse(localStorage.getItem("valueArray"));
                var newArray=valueArray.filter(function(item){
                    return item.name!==name;
                });
                valueArray=newArray;
                localStorage.setItem("valueArray",JSON.stringify(valueArray));
            }
        });
    });
    $(document).ready(function(){
        if(localStorage.getItem("roptArray")){
            roptArray=JSON.parse(localStorage.getItem("roptArray"));
            roptArray.forEach(function(item){
                item.option.forEach(function(option){
                    $("#roptdiv"+item.id).append("<div class='mb-2 d-flex row align-items-center px-2' id='roptnxt"+item.id+"r"+option+"'><div class='col-11 px-1'><input class='form-control' type='text' name='optval"+item.id+"r"+option+"'></div><div class='col-1 px-1 d-flex justify-content-center'><button type='button' class='btn p-0 optdel' id='optdel"+item.id+"r"+option+"' style='background-color:transparent; border:0'><i class='bi bi-trash-fill'></i></button></div><div class='col-12 px-1'><div class='invalid-feedback d-block' id='optval"+item.id+"r"+option+"'></div></div></div>")
                })
            })
        }
        if(localStorage.getItem("soptArray")){
            aoptArray=JSON.parse(localStorage.getItem("soptArray"));
            aoptArray.forEach(function(item){
                item.option.forEach(function(option){
                    $("#soptdiv"+item.id).append("<div class='mb-2 d-flex row align-items-center px-2' id='soptnxt"+item.id+"s"+option+"'><div class='col-11 px-1'><input class='form-control' type='text' name='optval"+item.id+"s"+option+"'></div><div class='col-1 px-1 d-flex justify-content-center'><button type='button' class='btn p-0 optdel' id='optdel"+item.id+"s"+option+"' style='background-color:transparent; border:0'><i class='bi bi-trash-fill'></i></button></div><div class='col-12 px-1'><div class='invalid-feedback d-block' id='optval"+item.id+"s"+option+"'></div></div></div>")
                });
            });
        }
    });
    var valueArray=[];
    $(document).ready(function(){
        $(document).on("input","input,select,textarea",function(){
            var value=$(this).val();
            var name=$(this).attr("name");
            if(!localStorage.getItem("valueArray")){
                localStorage.setItem("valueArray",JSON.stringify(valueArray));
            }
            if(localStorage.getItem("valueArray")){
                valueArray=JSON.parse(localStorage.getItem("valueArray"));
                var index=valueArray.findIndex(obj=>obj.name===name);
                if(index!=-1){
                    valueArray[index].value=value;
                }
                else{
                    valueArray.push({"value":value,"name":name});
                }
                localStorage.setItem("valueArray",JSON.stringify(valueArray));
            }
        });
    });
    $(document).ready(function(){
        if(localStorage.getItem("valueArray")){
            valueArray=JSON.parse(localStorage.getItem("valueArray"));
            valueArray.forEach(function(item){
                $('[name='+item.name+']').val(item.value);
            })
        }
    });
    $(document).ready(function(){
        $(document).on("submit","#createsurveyform",function(event){
            event.preventDefault();
            if(okForm()){
                var formDatafinal=$("#createsurveyform").serializeArray();
                var createsurveytitle=(formDatafinal.find(item=>item.name=="createsurveytitle")).value;
                var createsurveydescription=(formDatafinal.find(item=>item.name=="createsurveydescription")).value;
                if(localStorage.getItem("questionnoArray")){
                    var questionoArrayfinal=[1].concat(JSON.parse(localStorage.getItem("questionnoArray")));
                }
                else{
                    var questionoArrayfinal=[1];
                }
                if(localStorage.getItem("roptArray")){
                    var roptArrayfinal=JSON.parse(localStorage.getItem("roptArray"));
                }
                else{
                    var roptArrayfinal=[];
                }
                if(localStorage.getItem("soptArray")){
                    var soptArrayfinal=JSON.parse(localStorage.getItem("soptArray"));
                }
                else{
                    var soptArrayfinal=[];
                }
                var createdbycookie=getCookie('loginusername');
                const characters='0123456789abcdef';
                let iresult='';
                for(let i=0;i<24;i++){
                    iresult+=characters.charAt(Math.floor(Math.random()*characters.length));
                }
                var baseId=`${createdbycookie}${iresult}`;
                let stringWithAtReplaced = baseId.replace(/@/g, "at");
                let formId = stringWithAtReplaced.replace(/\./g, "dot");
                var createdby;
                const xhr=new XMLHttpRequest();
                xhr.open("POST","cookie.php",true);
                xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                xhr.send('createdbycookie='+createdbycookie);
                xhr.onreadystatechange=function(){
                    if(xhr.readyState===4&&xhr.status===200){
                        createdby=xhr.responseText;
                        var mainContent=`<!DOCTYPE html>
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
                                                                    <h1 class="mb-1"><b>${createsurveytitle}</b></h1>
                                                                </div>
                                                                <div class="col-12 p-0 d-flex align-items-center justify-content-center mb-2">
                                                                    <h5>by <b>${createdby}</b></h5>
                                                                </div>
                                                                <div class="col-12 p-0 d-flex align-items-center justify-content-center mb-0">
                                                                    <p><b>${createsurveydescription}</b></p>
                                                                </div>
                                                                <div class='col-12 p-0 mb-4'>                                   
                                                                    <div class='form-group'>
                                                                        <label class='form-label me-2' style='font-size:18px;'>Username</label>
                                                                        <input type='text' class='form-control' name='username'>
                                                                        <div class="invalid-feedback d-block" id='username'></div>
                                                                    </div>                                   
                                                                </div>`;
                        questionoArrayfinal.forEach(function(item){
                            var questioncontent=(formDatafinal.find(question=>question.name=="question"+item)).value;
                            var answertypecontent=(formDatafinal.find(answer=>answer.name=="answertype"+item)).value;
                            if(answertypecontent=="text"||answertypecontent=="date"){
                                mainContent+=`
                                <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                    <div class='form-group'>
                                        <label class='form-label me-2' style='font-size:18px;'>${questioncontent}</label>
                                        <input type='${answertypecontent}' class='form-control' name='question${item}'>
                                        <div class="invalid-feedback d-block" id='question${item}'></div>
                                    </div>                                   
                                </div>`;
                            }
                            if(answertypecontent=="textarea"){
                                mainContent+=`
                                <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                    <div class='form-group'>
                                        <label class='form-label me-2' style='font-size:18px;'>${questioncontent}</label>
                                        <textarea class='form-control' name='question${item}' rows='3' cols='1'></textarea>
                                        <div class="invalid-feedback d-block" id='question${item}'></div>
                                    </div>                                   
                                </div>`;
                            }
                            if(answertypecontent=="radio"){
                                var optioncontent;
                                roptArrayfinal.forEach(function(optionarray){
                                    if(optionarray.id==item){
                                        var foptionvalue=formDatafinal.find(optionvaluepass => optionvaluepass.name==`optval${item}r1`).value;
                                        optioncontent=`<label class="form-label"><input type='radio' class='form-check-input me-2' name='question${item}' value='${foptionvalue}'>${foptionvalue}</label>`;
                                        optionarray.option.forEach(function(optionno){
                                            var optionvalue=formDatafinal.find(optionvaluepass => optionvaluepass.name==`optval${item}r${optionno}`).value;
                                            optioncontent+=`<label class="form-label"><input type='radio' class='form-check-input me-2' name='question${item}' value='${optionvalue}'>${optionvalue}</label>`;
                                        });
                                    }
                                });
                                mainContent+=`
                                <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                    <div class='form-group'>
                                        <label class='form-label me-2' style='font-size:18px;'>${questioncontent}</label>
                                        <div class="options d-flex flex-column">
                                            ${optioncontent}
                                        </div>
                                        <div class="invalid-feedback d-block" id='question${item}'></div>
                                    </div>                                   
                                </div>`;
                            }
                            if(answertypecontent=="select"){
                                var optioncontent;
                                soptArrayfinal.forEach(function(optionarray){
                                    if(optionarray.id==item){
                                        optioncontent=`
                                        <div class='col-12 p-3 myborder rounded mb-3'>                                   
                                            <div class='form-group'>
                                                <label class='form-label me-2' style='font-size:18px;'>${questioncontent}</label>
                                                <select class='form-select' name='question${item}'>
                                                <option value="" selected>Select an option</option>`;
                                        var foptionvalue=formDatafinal.find(optionvaluepass => optionvaluepass.name==`optval${item}s1`).value;
                                        optioncontent+=`<option value="${foptionvalue}">${foptionvalue}</option>`;
                                        optionarray.option.forEach(function(optionno){
                                            var optionvalue=formDatafinal.find(optionvaluepass => optionvaluepass.name==`optval${item}s${optionno}`).value;
                                            optioncontent+=`<option value="${optionvalue}">${optionvalue}</option>`;
                                        });
                                        optioncontent+=`</select><div class="invalid-feedback d-block" id='question${item}'></div></div></div>`
                                    }
                                });
                                mainContent+=optioncontent;
                            }
                        });
                    mainContent+=`<div class='col-12 p-0 mt-4 mb-0'>
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
                            <b style="font-size:13px;">Your response has been submitted</b>
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
                </html>`;
                var scriptContent=`var fillvaluearray=[];
                var radioarray=[];
                        var createdbycookie="${createdbycookie}";
                        var formId="${formId}";
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
                        }`;
                        var styleContent=`.navcontainer{
                            background-color: #d48aff9d;
                            backdrop-filter: blur(10px);
                            position: fixed;
                            z-index: 100;
                        }
                        .mycard{
                            background-color: rgba(255, 255, 255, 0.3);
                            border-radius: 10px;
                            backdrop-filter: blur(20px);
                        }
                        .submittoast,.signintoast{
                            width: 300px;
                            left: calc(50% - 150px);
                            position: fixed;
                            z-index: 100;
                            background-color: rgba(255, 255, 255, 0.3);
                            border-radius: 10px;
                            backdrop-filter: blur(20px);
                        }
                        .mybtn{
                            background-color: #8d1dceb4 !important;
                            color: white;
                            backdrop-filter: blur(100px);
                        }
                        .mybtn:hover{
                            background-color: #8d1dce !important;
                            color: white;
                            backdrop-filter: blur(100px);
                        }
                        .myborder{
                            border: 1px #8d1dce solid;
                        }
                        .form-check-input:checked{
                            background-color: #8d1dce !important;
                            border: 1px solid #8d1dce !important;
                        }
                        label{
                            font-weight: bolder;
                        }
                        @media(min-width: 1200px) and (max-width: 2500px){
                            body{
                                display: flex;
                                flex-direction: column;
                                min-height: 100vh;
                                font-family: "Raleway";
                                background: url("../utilities/homebackground.jpg") fixed;
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center;
                                position: relative;
                                z-index: -1;
                            }
                            .title{
                                font-size: 30px;
                            }
                            .logo{
                                height: 35px;
                                width: 35px;
                            }
                            .submittoast,.signintoast{
                                bottom: 50px;
                            }
                            .mycontainer{
                                top: 77px;
                                position: absolute;
                            }
                        }
                        @media (min-width: 992px) and (max-width: 1199.98px){
                            body{
                                display: flex;
                                flex-direction: column;
                                min-height: 100vh;
                                font-family: "Raleway";
                                background: url("../utilities/homebackground.jpg") fixed;
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center;
                                position: relative;
                                z-index: -1;
                            }
                            .title{
                                font-size: 27px;
                            }
                            .logo{
                                height: 27px;
                                width: 27px;
                            }
                            .submittoast,.signintoast{
                                bottom: 50px;
                            }
                            .mycontainer{
                                top: 73px;
                                position: absolute;
                            }
                        }
                        @media (min-width: 768px) and (max-width: 991.98px){
                            body{
                                display: flex;
                                flex-direction: column;
                                min-height: 100vh;
                                font-family: "Raleway";
                                background: url("../utilities/homebackground.jpg") fixed;
                                background-repeat: no-repeat;
                                background-size: cover;
                                background-position: center;
                                position: relative;
                                z-index: -1;
                            }
                            .title{
                                font-size: 25px;
                            }
                            .logo{
                                height: 25px;
                                width: 25px;
                            }
                            .submittoast,.signintoast{
                                bottom: 50px;
                            }
                            .mycontainer{
                                top: 70px;
                                position: absolute;
                            }
                        }
                        @media (min-width: 576px) and (max-width: 767.98px){
                            body{
                                display: flex;
                                flex-direction: column;
                                min-height: 100vh;
                                font-family: "Raleway";
                                background: url("../utilities/homebackground.jpg");
                                background-size: cover;
                            }
                            .title{
                                font-size: 25px;
                            }
                            .logo{
                                height: 25px;
                                width: 25px;
                            }
                            .submittoast,.signintoast{
                                bottom: 100px;
                            }
                            .mycontainer{
                                top: 70px;
                                position: absolute;
                            }
                            i.bi.bi-trash-fill::before{
                                font-size: 12px !important;
                            }
                        }
                        @media (max-width: 575.98px){
                            body{
                                display: flex;
                                flex-direction: column;
                                min-height: 100vh;
                                font-family: "Raleway";
                                background: url("../utilities/homebackground.jpg");
                                background-size: cover;
                                background-position: center;
                                position: relative;
                                z-index: -1;
                            }
                            .title{
                                font-size: 23px;
                            }
                            .logo{
                                height: 23px;
                                width: 23px;
                            }
                            .submittoast,.signintoast{
                                bottom: 100px;
                            }
                            .mycontainer{
                                top: 67px;
                                position: absolute;
                            }
                            i.bi.bi-trash-fill::before{
                                font-size: 12px !important;
                            }
                        }
                        ::-webkit-scrollbar {
                            width: 5px;
                            height: 5px;
                        }
                        
                        ::-webkit-scrollbar-thumb:hover {
                            background: #8d1dce;
                            border-radius: 5px;
                            backdrop-filter: blur(10px);
                        }
                        
                        ::-webkit-scrollbar-thumb {
                            background-color: #8d1dceb4;
                            border-radius: 5px;
                            backdrop-filter: blur(10px);
                        }
                        
                        ::-webkit-scrollbar-track {
                            background-color: #f1f1f1;
                            border-radius: 5px;
                            backdrop-filter: blur(10px);
                        }
                        
                        ::-webkit-scrollbar-thumb:active {
                            background-color: #8d1dce;
                            border-radius: 5px;
                            backdrop-filter: blur(10px);
                        }
                        body,a,button,link{
                            cursor: url(../utilities/cursor.png),auto !important;
                        }`;
                        var phpContent=`<?php
                        require '../vendor/autoload.php';
                        $mongoDBUrl="mongodb://localhost:27017";
                        $databaseName="SurveyDB";
                        $collectionName="SurveyCollection";
                        $client=new MongoDB\\Client($mongoDBUrl);
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
                        ?>`;
                        var qToSend=[];
                        questionoArrayfinal.forEach(function(qval){
                            qToSend.push(formDatafinal.find(qItem=>qItem.name==`question${qval}`).value);
                        });
                        var lastsurvey=formDatafinal.find(tItem=>tItem.name==`createsurveytitle`).value;
                        const form=new XMLHttpRequest();
                        form.open("POST","createsurvey.php",true);
                        form.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
                        form.send('createdbycookie='+encodeURIComponent(createdbycookie)+'&uuid='+encodeURIComponent(formId)+'&qToSend='+encodeURIComponent(JSON.stringify(qToSend))+'&mainContent='+encodeURIComponent(mainContent)+'&scriptContent='+encodeURIComponent(scriptContent)+'&styleContent='+encodeURIComponent(styleContent)+'&phpContent='+encodeURIComponent(phpContent)+'&lastsurvey='+encodeURIComponent(lastsurvey));
                        form.onreadystatechange=function(){
                            if(form.readyState===4&&form.status===200){
                                var response=form.responseText;
                                if(response==="success"){
                                    localStorage.removeItem("questionnoArray");
                                    localStorage.removeItem("roptArray");
                                    localStorage.removeItem("soptArray");
                                    localStorage.removeItem("valueArray");
                                    localStorage.setItem("started",0);
                                    window.location.href="survey.php?createtoast=true";
                                }
                                else{
                                    alert('Error occurred: '+response.message);
                                }
                            }
                            else if(form.readyState==2||form.readyState==3){}
                            else{
                                alert(form.readyState);
                            }
                        };
                    }
                    else if(xhr.readyState==2||xhr.readyState==3){}
                    else{
                        alert(xhr.readyState);
                    }
                };               
            }
        });
    });
    function okForm(){
        var targetElement=[];
        var formData=$("#createsurveyform").serializeArray();
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
    function getCookie(cookieName) {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(cookieName + '=')) {
            return decodeURIComponent(cookie.substring(cookieName.length + 1));
          }
        }
        return null;
      }
}
var profileform=document.getElementById("profileform");
if(profileform){
    profileform.addEventListener("submit",(event)=>{
        event.preventDefault();
        if(signinValidate()){
            var signinfirstname=document.getElementById("signinfirstname");
            var signinlastname=document.getElementById("signinlastname");
            var profession=document.getElementById("profession");
            var country=document.getElementById("country");
            var signinfirstnamenew=signinfirstname.value.trim();
            var signinlastnamenew=signinlastname.value.trim();
            var professionnew=profession.value.trim();
            var countrynew=country.value.trim();
            //xmlrequest
            const xhr=new XMLHttpRequest();
            xhr.open("POST","updating.php",true);
            xhr.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
            xhr.send('signinfirstnamenew='+encodeURIComponent(signinfirstnamenew)+'&signinlastnamenew='+encodeURIComponent(signinlastnamenew)+'&professionnew='+encodeURIComponent(professionnew)+'&countrynew='+encodeURIComponent(countrynew));
            xhr.onreadystatechange=function(){
                if(xhr.readyState===4&&xhr.status===200){
                    var response=xhr.responseText;
                    if(response==="success"){
                        window.location.href="editprofile.php?profiletoast=true";
                    }
                    else{
                        alert('Error occurred: '+response.message);
                    }
                }
                else if(xhr.readyState==2||xhr.readyState==3){}
                else{
                    alert(xhr.readyState);
                }
            };
        }
    });
    function signinValidate(){
        let isValid=true;
        isValid=signinInitialValidate("signinfirstname","signinfirstnamediv")&&isValid;
        isValid=signinInitialValidate("signinlastname","signinlastnamediv")&&isValid;
        isValid=signinInitialValidate("profession","professiondiv")&&isValid;
        isValid=signinInitialValidate("country","countrydiv")&&isValid;
        return isValid;
    }
    function signinInitialValidate(signinInput,signinDiv){
        var input=document.getElementById(signinInput);
        var div=document.getElementById(signinDiv);
        var value=input.value.trim();
        isValid=false;
        if(!validateName(value)){
            input.classList.add("is-invalid");
            if(signinInput==="signinfirstname"){
                div.innerHTML="Enter a valid first name";
            }
            else if(signinInput==="signinlastname"){
                div.innerHTML="Enter a valid last name";
            }
            else if(signinInput==="profession"){
                div.innerHTML="Enter a valid profession title";
            }
            else{
                div.innerHTML="Enter a valid country name";
            }
        }
        else{
            input.classList.remove("is-invalid");
            div.innerHTML="";
            isValid=true;
        }
        return isValid;
    }
}
function validateName(name){
    const nameRegex=/^[a-zA-Z ]+$/;
    return nameRegex.test(name);
}
$(document).ready(function(){
    $(".currentpage").attr("href",window.location);
});