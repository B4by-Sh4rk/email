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
const login_btn = document.querySelector('.login_btn');


/* login */
login_btn.addEventListener('click', function(){
    logout_a.setAttribute('class', '');
    login_a.setAttribute('class', 'none');
    login_form.setAttribute('class', 'none');
    container.setAttribute('class', '');
    console.log('Успешный вход');
})
/* logout */
logout_a.addEventListener('click', function(){
    logout_a.setAttribute('class', 'none');
    login_a.setAttribute('class', '');
    login_form.setAttribute('class', '');
    container.setAttribute('class', 'none');
    console.log('Выход');
})

/* message_remove */
remove.addEventListener('click', function(){
    text_message.setAttribute('class', 'none');
    console.log('Delete massage');
})

/* send_send_form*/
send_send_form.addEventListener('click',function(){
    title_send_msg.setAttribute('class','send_message none');
    msg_send_text.setAttribute('class','send_message none');
    send_send_form.setAttribute('class' , 'none');
    sended.innerHTML = '<br><br><p>Message sent!</p><br><p>Thank you</p>'
    console.log('Message sent');
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
