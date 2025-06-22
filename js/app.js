const appMain = (function () {   
    // func show search cate
    const searchCateId = document.querySelector("#header-cates");
    const searchCateList = document.querySelectorAll(".header-cates__dropdown>li");
    const searchCateTitle = document.querySelector("#header-cate-title");
    
    searchCateId.addEventListener("click", function(evt){
        evt.currentTarget.classList.toggle('show');
    });    

    // Close dropdown if clicked outside
    document.addEventListener('click', (e) => {     
        if (!searchCateId.contains(e.target) && !searchCateId.contains(e.target)) {
            searchCateId.classList.remove('show');
        }
    });

    searchCateList.forEach(item => {
        item.addEventListener('click', (evt) => {
            let txt = item.textContent.trim();
            searchCateTitle.textContent = txt;    

            // Update active state
            searchCateList.forEach(i => i.classList.remove('active'));
            item.classList.add("active");     
        });
    });

    return {
        init: function () {
        },
    }
})();

document.addEventListener("DOMContentLoaded", function (event) {
    appMain.init();
});