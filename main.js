var servResponse = document.querySelector('response');
document.forms.outForm.onsubmit = function (){
    e.preventDefault()
    var userInput = document.forms.outForm__inp.value;
    userInput = encodeURIComponent(userInput)
    var xhr = new XMLHttpRequest()

        //xhr.open('GET', 'form.php?' + 'ourForm_inp=' + '&key2=value2');
    xhr.open('POST', 'form.php')
    var formdata = new FormData(document.forms.outForm);
    xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    xhr.onreadystatechange = function (){
        if(xhr.readyState === 4 && xhr.status === 200){
            servResponse.textContent = xhr.responseText;
        }
    }
    xhr.send(formdata)

};
