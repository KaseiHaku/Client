const jqXHR = $.ajax({
    url: '',
    type: 'post',
    data: {}, 
    timeout: 60*1000,
    dataType: 'json'
});
jqXHR.done(function(data, textStatus, jqXHR){
    console.log('success');
}).fail(function(jqXHR, textStatus, errorThrown){
    console.log('failure');
}).always(function(data|jqXHR, textStatus, jqXHR|errorThrown){ 
    console.log('complete');
}).then(function(data, textStatus, jqXHR){  // 1.8 之后
    console.log('then success');
}, function(jqXHR, textStatus, errorThrown){
    console.log('then failure');
});
