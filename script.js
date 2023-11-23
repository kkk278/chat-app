document.querySelector('.leftbar-profile-toggle').addEventListener('click', function(e) {
    e.preventDefault()
    this.parentElement.classList.toggle('active')
})

document.addEventListener('click', function(e) {
    if(!e.target.matches('.leftbar-profile, .leftbar-profile *')) {
        document.querySelector('.leftbar-profile').classList.remove('active')
    }
})

document.querySelector('.chat[data-chat=person1]').classList.add('active-chat');
document.querySelector('.person[data-chat=person1]').classList.add('active');

let friends = {
    list: document.querySelector('ul.people'),
    all: document.querySelectorAll('.left .person'),
    name: '',
    pfp: '', 
    status:" ",
  };
  
let chat = {
  container: document.querySelector('.container .right'),
  profile: document.querySelector('.container .profile'),
  current: null,
  person: null,
  name: document.querySelector('.container .right .top .name'),
  pfp: document.querySelector('.container .right .top .pfp'),
  status: document.querySelector('.container .right .top .status'),
};

friends.all.forEach((f) => {
  f.addEventListener('mousedown', () => {
    if (!f.classList.contains('active')) {
      setActiveChat(f);
    }
  });
});

function setActiveChat(f) {
  friends.list.querySelector('.active').classList.remove('active');
  f.classList.add('active');
  chat.current = chat.container.querySelector('.active-chat');
  chat.person = f.getAttribute('data-chat');
  chat.current.classList.remove('active-chat');
  chat.container
    .querySelector('[data-chat="' + chat.person + '"]')
    .classList.add('active-chat');

  friends.name = f.querySelector('.name').innerText;
  friends.pfp = f.querySelector('.pfp').src; 
  friends.status = f.querySelector('.status').innerText;

  chat.name.innerHTML = friends.name;
  chat.pfp.src = friends.pfp; 
  chat.status.innerHTML = friends.status;

  chat.profile.querySelector('.name').innerHTML = friends.name;
  chat.profile.querySelector('.pfp').src = friends.pfp;
}
  

function openFileUpload() {
    document.getElementById("file-upload").click();
}
  
document.getElementById("file-upload").addEventListener("change", function () {
    var fileName = this.value.split("\\").pop();
    document.getElementById("file-label").innerText = fileName || "Choose a file";
});

document.querySelector('.info').addEventListener('click', function() {
  document.querySelector('.profile').classList.add('profile-visible');
  document.querySelector('.right').classList.add('right-expanded');
});

document.querySelector('.close-profile').addEventListener('click', function() {
  document.querySelector('.profile').classList.remove('profile-visible');
  document.querySelector('.right').classList.remove('right-expanded');
});