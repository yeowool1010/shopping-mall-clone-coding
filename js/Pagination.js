
const pageCount = 9;
const blockCount = 4;
const totalPage = Math.ceil(dummyData.length / pageCount);
const totalBlock = Math.ceil(totalPage / blockCount);
const pagination = document.getElementById('pagination');
const testTable = document.getElementById('shop-container').querySelector('.shop-contents');

const renderTableAndPagination = function(page = 1) {
     renderTable(page);
     renderPagination(page);
};

const renderTable = function(page) {
    let startNum = (pageCount * (page - 1));
    let endNum = ((pageCount * page) >= dummyData.length) ? dummyData.length : (pageCount * page);

    let html = '';
        for (let index = startNum; index < endNum; index++) {
            html += `<div class="item-box"> <img class="item-img" src="${dummyData[index].img}">` + `<p> ${dummyData[index].item_name}</p>` + `<p>${dummyData[index].price}</p></div>` ;
        }

        testTable.innerHTML = html;
};

const renderPagination = function(page) {
    let block = Math.floor((page-1)/blockCount)+1;
    let startPage = ((block-1)*blockCount)+1;
    let endPage = ((startPage + blockCount -1) > totalPage) ? totalPage : (startPage + blockCount -1);

    var paginationHTML = '';

    if (page !== 1) paginationHTML += "<a style='cursor:pointer' class='first_page'>First...</a>";
    if (block !== 1) paginationHTML += "<a style='cursor:pointer' class='back_page'>Prev</a>   ";

    for (let index = startPage; index <= endPage; index++) {
        paginationHTML += (parseInt(page) === parseInt(index)) ?
            "| <a style='color:#ff8400'>" + index + "</a> |" : "| <a style='cursor: pointer' class='go_page' data-value='" + index + "'>" + index + "</a> |";
    }

    if (block < totalBlock) paginationHTML += "<a style='cursor:pointer' class='next_page'>    Next</a>";
    if (page < totalPage) paginationHTML += "<a style='cursor:pointer' class='last_page'>  ...Last</a>";

    pagination.innerHTML = paginationHTML;
    addEventPagination(startPage, endPage);
};


const addEventPagination = function(startPage, endPage){
    if (!!document.querySelector(".first_page")) {
        document.querySelector(".first_page").addEventListener('click', () => {
            renderTableAndPagination(1);
        });
    }

    if (!!document.querySelector(".back_page")) {
        document.querySelector(".back_page").addEventListener('click', () => {
            renderTableAndPagination(startPage-1);
        });
    }

    document.querySelectorAll(".go_page").forEach(goPage => {
        goPage.addEventListener('click', e => {
            renderTableAndPagination(parseInt(e.target.getAttribute('data-value')));
        });
    });

    if (!!document.querySelector(".next_page")) {
        document.querySelector(".next_page").addEventListener('click', () => {
            renderTableAndPagination(endPage + 1);
        });
    }

    if (!!document.querySelector(".last_page")) {
        document.querySelector(".last_page").addEventListener('click', () => {
            renderTableAndPagination(totalPage);
        });
    }
};

renderTableAndPagination();