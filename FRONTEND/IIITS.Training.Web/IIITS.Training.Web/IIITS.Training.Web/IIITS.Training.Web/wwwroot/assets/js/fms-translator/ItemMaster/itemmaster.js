$(document).ready(function () {
    var translations = {
        "en": {
            "Item Master": "Item Master",
            "Item Type": "Item Type",
            "Item Name": "Item Name",
            "Goods": "Goods",
            "Service": "Service",
            "Sale Rate": "Sale Rate",
            "Purchase Rate": "Purchase Rate",
            "Rate Effective From": "Rate Effective From",
            "Item Rate": "Item Rate",
            "Tax Type": "Tax Type",
            "Tax Preference": "Tax Preference",
            "Sales Account Code": "Sales Account Code",
            "Purchase Account Code": "Purchase Account Code",
            "SKU/Item Code": "SKU/Item Code",
            "Unit Of Measure": "Unit Of Measure",
            "ItemMaster": "ItemMaster",
         
            "Save": "Save",
            "Item Description": "Item Description",
            "Back": "Back"
            // Add more translations for English here
        },

        "hi": {
            "Item Master": "आइटम मास्टर",
            "Item Type": "आइटम प्रकार",
            "Item Name": "आइटम नाम",
            "Goods": "माल",
            "Service":" सेवा",
            "Sale Rate": "बिक्री दर",
            "Purchase Rate": "खरीद दर",
            "Rate Effective From": "दर प्रभावी तिथि से",
            "Item Rate": "आइटम दर",
            "Tax Type": "कर प्रकार",
            "Tax Preference": "कर वरीयता",
            "Sales Account Code": "बिक्री खाता कोड",
            "Purchase Account Code": "खरीद खाता कोड",
            "Unit Of Measure": "माप की इकाई",
            ItemMaster: "आइटममास्टर",
            
            "Save": "सहेजें",
            "Item Description": "आइटम विवरण",
            "SKU/Item Code": "एसकेयू / आइटम कोड",
            "Back":"पीछे"

   // Add more translations for Hindi here
},
    };

    // Function to translate labels and buttons
    function translateLabels(language) {
        $('[data-translate]').each(function () {
            var labelText = $(this).data('translate');
            var translatedText = translations[language][labelText];
            if (translatedText) {
                if ($(this).is("button")) {
                    // If the element is a button, set its text content
                    $(this).text(translatedText);
                } else {
                    // For other elements, set their text content
                    $(this).text(translatedText);
                }
            }
        });
    }

    // Language selector change event
    $("#language-selector input[type='radio']").change(function () {

        var selectedLanguage = $("input[name='radio-switch-name']:checked").val();
        translateLabels(selectedLanguage);

    });

    // Initial translation
    var initialLanguage = $("input[name='radio-switch-name']:checked").val();
    translateLabels(initialLanguage);
});
