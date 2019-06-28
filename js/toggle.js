const st = {};

st.flap = document.querySelector('#flap');
st.toggle = document.querySelector('.toggle');

st.choice1 = document.querySelector('#choice1');
st.choice2 = document.querySelector('#choice2');

st.fileUpload = document.querySelector('#upload');
st.pastetextArea = document.querySelector('#textSpace');
st.contentPane = document.querySelector('#contentPane');


st.flap.addEventListener('transitionend', () => {

    if (st.choice1.checked) {
        st.contentPane.innerHTML = '<div class="input-container"><input type="file" id="real-input"><button class="browse-btn">Browse Files</button><span class="file-info">Upload a file</span></div>';
//        st.fileUpload.style.visibility = "visible";
//        st.pastetextArea.style.visibility = "hidden";
        st.toggle.style.transform = 'rotateY(-15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
    } else {
    st.contentPane.innerHTML = ' <textarea  rows="4" cols="50" name="comment" form="usrform">Enter text here...</textarea>';
//        st.pastetextArea.style.visibility = "visible";
//        st.fileUpload.style.visibility = "hidden";
        st.toggle.style.transform = 'rotateY(15deg)';
        setTimeout(() => st.toggle.style.transform = '', 400);
    }

})

st.clickHandler = (e) => {

    if (e.target.tagName === 'LABEL') {
        setTimeout(() => {
            st.flap.children[0].textContent = e.target.textContent;
        }, 250);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    st.flap.children[0].textContent = st.choice2.nextElementSibling.textContent;
});

document.addEventListener('click', (e) => st.clickHandler(e));