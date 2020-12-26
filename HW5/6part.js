// 6. Реализовать свой CSS generator как был выполнен на уроке, только для margin

var testBlock = document.getElementById('block');

var rtrInput = document.getElementById('rtr');
var rtlInput = document.getElementById('rtl');
var rbrInput = document.getElementById('rbr');
var rblInput = document.getElementById('rbl');
var mlInput = document.getElementById('ml');
var mtInput = document.getElementById('mt');

var ttrSpan = document.getElementById('ttr');
var ttlSpan = document.getElementById('ttl');
var tbrSpan = document.getElementById('tbr');
var tblSpan = document.getElementById('tbl');
var ml1Span = document.getElementById('ml1');
var mt1Span = document.getElementById('mt1');

rtrInput.addEventListener('input', function() {
    ttrSpan.innerText = rtrInput.value;
    block.style.borderTopRightRadius = rtrInput.value + 'px';
});

rtlInput.addEventListener('input', function() {
    ttlSpan.innerText = rtlInput.value;
    block.style.borderTopLeftRadius = rtlInput.value + 'px';
});

rbrInput.addEventListener('input', function() {
    tbrSpan.innerText = rbrInput.value;
    block.style.borderBottomRightRadius = rbrInput.value + 'px';
});

rblInput.addEventListener('input', function() {
    tblSpan.innerText = rblInput.value;
    block.style.borderBottomLeftRadius = rblInput.value + 'px';
});

mlInput.addEventListener('input', function() {
    ml1Span.innerText = mlInput.value;
    block.style.marginLeft = mlInput.value + 'px';
});

mtInput.addEventListener('input', function() {
    mt1Span.innerText = mtInput.value;
    block.style.marginTop = mtInput.value + 'px';
});