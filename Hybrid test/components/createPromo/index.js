'use strict';

app.createPromo = kendo.observable({
    onShow: function() {},
    afterShow: function() {}
});

// START_CUSTOM_CODE_createPromo
// END_CUSTOM_CODE_createPromo
(function(parent) {
    var createPromoModel = kendo.observable({
        fields: {
            promotionType: '',
            comments: '',
            reference: '',
            customerAddress: '',
            allItems: '',
            promotionTypeList: '',
            discountPercentage: '',
            minimumQuantity: '',
            dealList: '',
            customerList: '',
            endBuy: '',
            startBuy: '',
            description: '',
        },
        submit: function() {},
        cancel: function() {}
    });

    parent.set('createPromoModel', createPromoModel);
})(app.createPromo);

// START_CUSTOM_CODE_createPromoModel

// END_CUSTOM_CODE_createPromoModel