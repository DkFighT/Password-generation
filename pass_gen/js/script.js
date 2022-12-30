function get_param(){
    let count = document.getElementById('count').value;
    let nums;
    let special;
    if (document.getElementById('numbers').checked){
        nums = 1;
    }
    else{
        nums = 0;
    }
    if (document.getElementById('specials').checked){
        special = 1;
    }
    else{
        special = 0;
    }
    let res = [count, nums, special];
    return res;
}
function gen(){
    let charecters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let params = get_param();
    let password = '';
    console.log(params);
    if (params[1] == 1){
        charecters += '0123456789';
    }
    if (params[2] == 1){
        charecters += "~!@#$%^*()_-[]{}:;/";
    }
    for (let i = 0; i < parseInt(params[0], 10); i++){
        password += charecters.charAt(Math.floor(Math.random() * charecters.length));
    }
    document.iform.pass.value = password;
    if (document.iform.pass.value != ''){
        document.getElementById('copy').removeAttribute('disabled');
    }
}
function copy_pass(){
    navigator.clipboard.writeText(document.iform.pass.value).then().catch(err => {console.log('Something went wrong', err);});
    
}