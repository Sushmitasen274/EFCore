$(document).ready(function () {
    var translations = {
        "en": {
            "Cash Book Transaction": "Cash Book Transaction",
            "CB Date": "CB Date",
            "Voucher Number": "Voucher Number",
            "Voucher Type": "Voucher Type",
            "Narration": "Narration",
            "Amount": "Amount",
            "Status": "Status",
            "Source": "Source",
            "History": "History",
            "Actions": "Actions",
            "Add New": "Add New",
            "Bill Payment Transaction": "Bill Payment Transaction",
            "Payment Date": "Payment Date",
            "Manual Number": "Manual Number",
            "Payment Management": "Payment Management"
            // Add more translations for English here
        },

        "hi": {
            "Cash Book Transaction": "कैश बुक लेन-देन",
            "CB Date": "सीबी तिथि",
            "Voucher Number": "वाउचर नंबर",
            "Voucher Type": "वाउचर प्रकार",
            "Narration": "विवरण",
            "Amount": "राशि",
            "Status": "स्थिति",
            "Source": "स्रोत",
            "History": "इतिहास",
            "Actions": "कार्रवाई",
            "Add New": "नया जोड़ो",
            "Bill Payment Transaction": "बिल भुगतान लेनदेन",
            "Payment Date": "भुगतान तिथि",
            "Manual Number": "मैन्युअल संख्या",
            "Payment Management": "भुगतान प्रबंधन"
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
