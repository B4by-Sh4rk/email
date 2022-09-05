const login_form = document.querySelector('.login_form'); 
const login_a = document.querySelector('#login_a');
const logout_a = document.querySelector('#logout_a');
const container = document.querySelector('.container');
const text_message = document.querySelector('#text_message');
const send = document.querySelector('#send');
const remove = document.querySelector('#remove');
const send_msg_form = document.querySelector('#send_msg_form');
const send_message = document.querySelector('.send_message');
const close_send_form = document.querySelector('#close_send_form');
const title_send_msg = document.querySelector('#title_send_msg');
const msg_send_text = document.querySelector('#msg_send_text');
const send_send_form = document.querySelector('#send_send_form');
const sended = document.querySelector('.sended');
const msg_list = document.querySelector('.msg_list');
const login_btn = document.querySelector('.login_btn');
const form_input_login = document.querySelector('#form_input_login');
const form_input_password = document.querySelector('#form_input_password');
const title_message = document.querySelector('#title_message');

/* login values */
const login = 'admin';
const password = 'admin';

/* messeges */
class Msg {
    constructor(msg_title, msg_text){
        this.msg_title = msg_title;
        this.msg_text = msg_text;
    }
}

let msg1 = new Msg('', '');
let msg2 = new Msg('', '');
let msg3 = new Msg('', '');
let msg4 = new Msg('', '');
let msg5 = new Msg('', '');
//console.log(msg1);

/* login */
login_btn.addEventListener('click', function(){
if ((login == form_input_login.value)&&(password == form_input_password.value)){
    logout_a.setAttribute('class', '');
    login_a.setAttribute('class', 'none');
    login_form.setAttribute('class', 'none');
    container.setAttribute('class', '');
    console.log('Успешный вход');
}
else{
    login_form.setAttribute('class','login_form wrong');
    console.log('Логин или пароль не верны');
}

})
/* logout */
logout_a.addEventListener('click', function(){
    logout_a.setAttribute('class', 'none');
    login_a.setAttribute('class', '');
    login_form.setAttribute('class', '');
    container.setAttribute('class', 'none');
    console.log('Выход');
})

/* message_close */
send.addEventListener('click', function(){
    title_message.setAttribute('class', 'none');
    text_message.setAttribute('class', 'none');
    console.log('Закрыть massage');
})



/* send_send_form*/
send_send_form.addEventListener('click',function(event){
    send_message.setAttribute('class','send_message');
    const txt_send = msg_send_text.value;
    const ttl_send = title_send_msg.value;
    const li_btn = document.createElement('a');
    li_btn.innerText = `${ttl_send}`;
    const newMsg = document.createElement('li');
    const del_msg = document.createElement('button');
    del_msg.setAttribute('class', 'none');
    del_msg.innerText = ' Delete';
    newMsg.append(li_btn);
    newMsg.append(del_msg);
    msg_list.append(newMsg);
    msg_send_text.value = '';
    title_send_msg.value = '';
    title_send_msg.focus();
    title_message.innerText = `${ttl_send}`;
    text_message.innerText = `${txt_send}`;
    console.log('Message sent');
    send_message.setAttribute('class','send_message none');

    /* open msg */
li_btn.addEventListener('click', function(){
    title_message.innerText = `${ttl_send}`;
    text_message.innerText = `${txt_send}`;
    title_message.setAttribute('class', '');
    text_message.setAttribute('class', '');
    console.log('Открыть THIS massage');
    del_msg.setAttribute('class','');

    /* message_remove */
    del_msg.addEventListener('click', function(){
        title_message.setAttribute('class', 'none');
        text_message.setAttribute('class', 'none');
        del_msg.setAttribute('class', 'none');
        del_msg.closest('li').remove();
        console.log('Delete massage');
       
    })
    /* del_btn close */
    remove.addEventListener('click', function(){
    del_msg.setAttribute('class', 'none');
    title_message.setAttribute('class', 'none');
    text_message.setAttribute('class', 'none');
    console.log('Закрыть massage');
    })
}) 

})

/* send message form open*/
send_msg_form.addEventListener('click', function(){
    send_message.setAttribute('class','send_message');
    console.log('Send message form open');
})


/* send message form close*/
close_send_form.addEventListener('click', function(){
    send_message.setAttribute('class','send_message none');
    console.log('Send message form close');
})


